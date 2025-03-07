import styled from "styled-components";
import {Link} from "react-router-dom";
import Cart from '../../../assets/icon/Cart.png'
import Search from '../../../assets/icon/Search.png'
import Logout from '../../../assets/icon/Logout.png'

const ControlPanelContainer = ({className}) => (
    <div className={className}>
        <div className='control-input-form'>
            <input className="control-input" type="text" placeholder="search..."/>
            <img className="control-search" src={Search} alt="Search"/>
        </div>
        <Link className='control-cart' to='/cart'>
            <img src={Cart} alt="cart"/>
            <div>{6}</div>
        </Link>
        <Link className="control-button" to='/signin'>
            <img src={Logout} alt=""/>
            <div>SignIn</div>
        </Link>
    </div>
)

export const ControlPanel = styled(ControlPanelContainer)`
    display: flex;
    align-items: center;
    & .control-input-form{
        position: relative;
        margin-right: 30px;
    }
    & .control-input {
        border: 2px solid #fff;
        border-radius: 4px;
        background-color: #F8F8F8;
        height: 35px;
        padding-left: 30px;
        font-size: 14px;
    }
    & .control-search {
        position: absolute;
        left: 6px;
        top: 6px;
    }
    & .control-cart {
        display: flex;
        position: relative;
        padding: 8px 0 8px 0;
        margin-right: 30px;
        & img {
        }
        & div {
            left: 13px;
            font-size: 10px;
            padding: 0 3px;
            width: 12px;
            height: 12px;
            color: #ffffff;
            background-color: #46A358;
            border-radius: 50%;
            position: absolute;
        }
    }
    & .control-button {
        display: flex;
        width: 100px;
        height: 35px;
        background-color: #46A358;
        border-radius: 6px;
        & img {
            padding: 9px 0 9px 14px;
            align-items: center;
        }
        & div {
            font-size: 16px;
            font-weight: 500;
            color: #ffffff;
            padding: 8px 0 0 4px;
        }
    }
`