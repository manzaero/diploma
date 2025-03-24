import styled from "styled-components";
import {Title} from "../../components/index.js";
import {productImages} from "../../assets/product-image/index.js";
import {icons} from "../../assets/icon/index.js";


const AdminPanelContainer = ({className}) => {
    return (
        <div className={className}>
            <Title>{"Admin panel"}</Title>

            <table className="cart-table">
                <thead>
                <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <div className="product-info">
                            <img src={productImages.barbertonDaisy}
                                 alt="Barberton Daisy"/>
                            <div>
                                <p className="product-name">Barberton Daisy</p>
                                <p className="sku">SKU: 1995751877966</p>
                            </div>
                        </div>
                    </td>
                    <td>$119.00</td>
                    <td>
                        <div className="quantity-control">
                            <button>-</button>
                            <span>2</span>
                            <button>+</button>
                        </div>
                    </td>
                    <td className="total">$238.00</td>
                    <td>
                        <button className="delete-btn"><img src={icons.delete}
                                                            alt=""/></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="product-info">
                            <img src={productImages.africanViolet}
                                 alt="Blushing Bromeliad"/>
                            <div>
                                <p className="product-name">Blushing
                                    Bromeliad</p>
                                <p className="sku">SKU: 19957518757065</p>
                            </div>
                        </div>
                    </td>
                    <td>$139.00</td>
                    <td>
                        <div className="quantity-control">
                            <button>-</button>
                            <span>6</span>
                            <button>+</button>
                        </div>
                    </td>
                    <td className="total">$834.00</td>
                    <td>
                        <button className="delete-btn"><img src={icons.delete}
                                                            alt=""/></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="product-info">
                            <img src={productImages.aluminumPlant}
                                 alt="Aluminum Plant"/>
                            <div>
                                <p className="product-name">Aluminum Plant</p>
                                <p className="sku">SKU: 1995751877786</p>
                            </div>
                        </div>
                    </td>
                    <td>$179.00</td>
                    <td>
                        <div className="quantity-control">
                            <button>-</button>
                            <span>9</span>
                            <button>+</button>
                        </div>
                    </td>
                    <td className="total">$1,611.00</td>
                    <td>
                        <button className="delete-btn"><img src={icons.delete}
                                                            alt=""/></button>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}

export const AdminPanel = styled(AdminPanelContainer)`
    .cart-table {
        width: 100%;
        border-collapse: collapse;
    }

    .cart-table th,
    .cart-table td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    .product-info {
        display: flex;
        align-items: center;
    }

    .product-info img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 8px;
    }

    .product-name {
        font-weight: bold;
    }

    .sku {
        font-size: 12px;
        color: gray;
    }

    .quantity-control {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .quantity-control button {
        background: green;
        color: white;
        border: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        font-size: 16px;
        cursor: pointer;
    }

    .total {
        color: green;
        font-weight: bold;
    }

    .delete-btn {
        background: none;
        border: none;
        font-size: 18px;
        cursor: pointer;
        color: gray;
    }

    .delete-btn:hover {
        color: red;
    }

`