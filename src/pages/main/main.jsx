import styled from "styled-components";
import {productImages} from "../../assets/product-image/index.js";
import {useDispatch, useSelector} from "react-redux";
import {selectCategory, selectSearchProduct} from "../../selectors/index.js";
import {setCategories} from "../../action/index.js";

const MainContainer = ({className}) => {
    const dispatch = useDispatch();
    const searchProduct = useSelector(selectSearchProduct);
    const setCategory = useSelector(selectCategory);
    const categories = [
        {
            id: 1,
            name: "House Plants",
            category: "house_plants"
        },
        {
            id: 2,
            name: "Potter Plants",
            category: "potter_plants"
        },
        {
            id: 3,
            name: "Seeds",
            category: "seeds"
        },
        {
            id: 4,
            name: "Succulents",
            category: "succulents"
        }
    ]
    const products = [
        {
            id: 1,
            name: "Barberton Daisy",
            price: "$119.00",
            image: productImages.barbertonDaisy,
            category: "house_plants"
        },
        {
            id: 2,
            name: "Angel Wing Begonia",
            price: "$169.00",
            image: productImages.angelWingBegonia,
            category: "potter_plants"
        },
        {
            id: 3,
            name: "African Violet",
            price: "$199.00",
            image: productImages.africanViolet,
            category: "house_plants"
        },
        {
            id: 4,
            name: "Aluminum Plant",
            price: "$179.00",
            image: productImages.aluminumPlant,
            category: "seeds"
        },
        {
            id: 5,
            name: "Beach Spider Lily",
            price: "$137.00",
            image: productImages.beachSpiderLily,
            category: "succulents"
        },
        {
            id: 6,
            name: "BirdsNestFern",
            price: "$108.00",
            image: productImages.birdsNestFern,
            category: "potter_plants"
        },
        {
            id: 7,
            name: "BlushingBromeliad",
            price: "$203.00",
            image: productImages.blushingBromeliad,
            category: "seeds"
        },
        {
            id: 8,
            name: "BroadleafLadyPalm",
            price: "$328.00",
            image: productImages.broadleafLadyPalm,
            category: "succulents"
        },
    ]


    const filteredProducts = products.filter(product => {
        return (
            product.name.toLowerCase().includes(searchProduct.toLowerCase()) && (!setCategory || product.category === setCategory)
        )
    })

    return (
        <div className={className}>
            <div className="main-categories">
                <p>Categories</p>
                <ul>
                    {categories.map((item) => (
                        <li className="active" key={item.id}
                            onClick={() => dispatch(setCategories(item.category))}>
                            <span>{item.name}</span>
                            <span>(33)</span>
                        </li>
                    ))}
                    <li className="active"
                        onClick={() => dispatch(setCategories(null))}>
                        <span>All categories</span>
                    </li>
                </ul>
            </div>
            <div className="main-cards">
                <div className="cards-sort">Default sorting</div>
                <div className="cards">
                    {filteredProducts.length > 0 ? filteredProducts.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt=""/>
                            <div className="product-description">
                                <div className="product-name">{item.name}</div>
                                <div
                                    className="product-price">{item.price}</div>
                            </div>
                        </div>
                    )) : <li>No product</li>}
                </div>
            </div>
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

            img {
                width: 250px;
                height: 250px;
                margin: 30px 4px;
            }
        }

        .card:first-child {
            border-top: 1px solid #46A358;
        }
    }
`