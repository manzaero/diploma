import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {selectProduct} from '../../selectors/index.js'
import {productImages} from "../../assets/product-image/index.js";
import {addToCart} from "../../action/index.js";
import {useUserRole} from "../../constants/index.js";

const ProductContainer = ({className}) => {
    const product = useSelector(selectProduct)
    const image = productImages[product.selectedProduct.image_url.replace('.png', '')]
    const dispatch = useDispatch();
    const userRole = useUserRole()
    console.log(product)

    const addProductToCart = () => {
        dispatch(addToCart({
            id: product.selectedProduct.id,
            name: product.selectedProduct.name,
            price: product.selectedProduct.price,
            image_url: product.selectedProduct.image_url.replace('.png', '')
        }))
    }

    if (!product || !product.selectedProduct) {
        return <div>Product not found</div>;
    }


    return (
        <div className={className}>
            <div className="product-img">
                <img
                    src={image}
                    alt="product image"/>
            </div>
            <div>
                <div className="title">
                    <p className="product-name">{product.selectedProduct.name}</p>
                    <div className="product-stock">
                        <p className="product-price">$ {product.selectedProduct.price}.00</p>
                        <p className="product-in-stock">In
                            stock: {product.selectedProduct.count}</p>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="title-description">
                    <div className="description-title">Short Description:</div>
                    <div className="description-text">
                        {product.selectedProduct.product_description}
                    </div>
                    <div className="product-buy">
                        {userRole ?
                            (<button className="buy-btn"
                                     onClick={addProductToCart}>Add to
                                cart
                            </button>) :
                            (<p>Please log in to add to cart</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Product = styled(ProductContainer)`
    display: flex;

    .product-img {
        width: 400px;
        height: 400px;
        margin-right: 75px;
    }

    .product-stock {
        display: flex;
        justify-content: space-between;
    }

    .product-in-stock {
        font-weight: 600;
    }

    .title {
        margin-bottom: -12px;
    }

    .product-name {
        font-size: 28px;
        font-weight: 700;
    }

    .product-price {
        font-size: 22px;
        color: #46A358;
        font-weight: 700;
        margin-top: 12px;
    }

    .hr {
        border: 1px solid #d6ffd6;
    }

    .title-description {
        margin: 16px 0 0 0;

        p {
            font-size: 16px;
            padding-left: 20px;
        }
    }

    .description-title {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .description-text {
        font-size: 18px;
        color: #727272;
    }

    .product-buy {
        display: flex;
        margin-top: 24px;
        align-items: center;
    }

    
    span {
        padding: 0 20px;
        font-size: 20px;
    }

    .buy-btn {
        width: 130px;
        height: 40px;
        border-radius: 6px;
        border: none;
        background-color: #46A358;
        color: #ffffff;
        text-transform: uppercase;
        margin-left: 26px;
        cursor: pointer;

        &:hover {
            background: #d6ffd6;
            color: #46A358;
        }
    }
`