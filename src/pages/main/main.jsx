import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {
    selectCategories,
    selectCategory,
    selectLoadProducts,
    selectSearchProduct
} from "../../selectors/index.js";
import {
    loadCategories,
    loadProducts,
    selectProduct,
    setCategories
} from "../../action/index.js";
import {Loader} from "../../components/index.js";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {server} from "../../bff/index.js";
import {productImages} from '../../assets/product-image/index.js'
import {countProductsByCategory} from "../../hooks/index.js";

const MainContainer = ({className}) => {
    const dispatch = useDispatch();
    const searchProduct = useSelector(selectSearchProduct);
    const setCategory = useSelector(selectCategory);
    const [sortToggled, setSortToggle] = useState('reset');
    // const categories = [
    //     {
    //         id: 1,
    //         name: "House Plants",
    //         category: "house_plants"
    //     },
    //     {
    //         id: 2,
    //         name: "Potter Plants",
    //         category: "potter_plants"
    //     },
    //     {
    //         id: 3,
    //         name: "Seeds",
    //         category: "seeds"
    //     },
    //     {
    //         id: 4,
    //         name: "Succulents",
    //         category: "succulents"
    //     }
    // ]
    const products = useSelector(selectLoadProducts);
    const categories = useSelector(selectCategories);
    const productCount = countProductsByCategory(products)
    console.log('categories', categories)
    useEffect(() => {
        server.loadProducts().then(({error, result}) => {
            if (error) {
                setErrorLoadProducts(`Product loading error: ${error}`);
                return;
            }
            if (Array.isArray(result)) {
                dispatch(loadProducts(result));
            } else {
                console.error("Unexpected data structure:", result);
            }
        });
        server.loadCategories().then(({error, result}) => {
            if (error) {
                setErrorLoadCategories(`Categories loading error: ${error}`);
                return
            }
            if (Array.isArray(result)) {
                dispatch(loadCategories(result));
            } else {
                console.error("Unexpected data structure:", result)
            }
        })
    }, [dispatch]);


    console.log(products);

    const filteredProducts = Array.isArray(products) ? products.filter(product => {
        return (
            product.name.toLowerCase().includes(searchProduct.toLowerCase()) &&
            (!setCategory || product.category === setCategory)
        );
    }) : [];


    const [errorLoadProducts, setErrorLoadProducts] = useState(null)
    const [errorLoadCategories, setErrorLoadCategories] = useState(null)

    const sortedProducts = [...filteredProducts]
    if (sortToggled === 'descending') {
        sortedProducts.sort((a, b) => {
            return (Number(b.price) || 0) - (Number(a.price) || 0);
        });
    } else if (sortToggled === 'ascending') {
        sortedProducts.sort((a, b) => {
            return (Number(a.price) || 0) - (Number(b.price) || 0);
        });
    }

    const handleClick = (product) => {
        dispatch(selectProduct(product))
    }

    const handleValue = (e) => {
        setSortToggle(e.target.value)
    }

    const handleCategories = (category) => {
        dispatch(setCategories(category))
        setSortToggle(('reset'))
    }
    return (
        <div className={className}>

            <div className="main-categories">
                <p>Categories</p>
                <ul>
                    {errorLoadCategories ? (
                            <div>{errorLoadCategories}</div>
                        ) :
                        categories.map((item) => (
                            <li className="active" key={item.id}
                                onClick={() => handleCategories(item.category)}>
                                <span>{item.name}</span>
                                <span>{productCount[item.category] || 0}</span>
                            </li>
                        ))}
                    <li className="active"
                        onClick={() => dispatch(setCategories(null))}>
                        <span>All categories</span>
                    </li>
                </ul>
            </div>
            {errorLoadProducts ? (
                <div>{errorLoadProducts}</div>
            ) : sortedProducts.length === 0 ? (<Loader/>) : (
                <div className="main-cards">
                    <select value={sortToggled} name="sort" id="sort"
                            onChange={handleValue}>
                        <option value="reset">Sort by default</option>
                        <option value="descending">Descending</option>
                        <option value="ascending">Ascending</option>
                    </select>
                    <div className="cards">
                        {sortedProducts.map((item) => (
                            <Link to="/product" className="card" key={item.id}
                                  onClick={() => handleClick(item)}>
                                <img
                                    src={productImages[item.image_url.replace('.png', '')]}
                                    alt={item.name}/>
                                <div className="product-description">
                                    <div
                                        className="product-name">{item.name}</div>
                                    <div
                                        className="product-price">$ {item.price}.00
                                    </div>
                                </div>
                            </Link>))}
                    </div>
                </div>)}
        </div>
    )
}

export const Main = styled(MainContainer)`
    display: flex;

    .main-categories {
        min-width: 310px;
        height: 100%;
        background-color: #FBFBFB;
        padding: 18px;

        p {
            font-size: 18px;
            font-weight: 700;
        }

        ul {
            padding: 0 12px;
            font-size: 15px;

            li {
                display: flex;
                justify-content: space-between;
                margin-bottom: 12px;

                span {
                    cursor: pointer;
                }
            }
        }
    }

    .main-cards {
        margin: 0 0 100px 50px;

        .cards {
            display: grid;
            grid-template-columns: auto auto auto;
        }

        .card {
            width: 260px;
            height: 300px;
            margin: 70px 32px 0 0;
            border: solid 1px #eeeeee;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;

            img {
                width: 250px;
                height: 250px;
                margin: 30px 4px;
            }
        }

        .card:hover {
            transform: scale(1.05);
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
            border-top: 1px solid #46A358;
        }
    }
`