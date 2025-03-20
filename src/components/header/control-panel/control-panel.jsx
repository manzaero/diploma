import styled from "styled-components";
import {Link} from "react-router-dom";
import {icons} from "../../../assets/icon/index.js"
import {useDispatch, useSelector} from "react-redux";
import {
    selectUserName,
    selectUserRole,
    selectUserSession
} from "../../../selectors/index.js";
import {ROLE} from "../../../constants/index.js";
import {logout} from "../../../action/index.js";

const ControlPanelContainer = ({className}) => {
    const roleId = useSelector(selectUserRole)
    const name = useSelector(selectUserName);
    const session = useSelector(selectUserSession)
    const dispatch = useDispatch();

    return (<div className={className}>
        <div className='control-input-form'>
            <input className="control-input" type="text"
                   placeholder="search..."/>
            <img className="control-search" src={icons.search}
                 alt="Search"/>
        </div>
        <Link className='control-cart' to='/cart'>
            <img src={icons.cart} alt="cart"/>
            <div>{6}</div>
        </Link>
        {roleId === ROLE.GUEST ?
            (<Link className="control-button" to='/signin'>
                <img src={icons.logout} alt=""/>
                <div>SignIn</div>
            </Link>) :
            (<Link className='control-button' to='/'
                   onClick={() => dispatch(logout(session))}>
                <img src={icons.logout} alt=""/>
                <div>{name}</div>
            </Link>)}
    </div>)
}

export const ControlPanel = styled(ControlPanelContainer)`
    display: flex;
    align-items: center;

    & .control-input-form {
        position: relative;
        margin-right: 30px;
    }

    & .control-input {
        border-radius: 4px;
        background-color: #F8F8F8;
        height: 35px;
        padding-left: 30px;
        font-size: 14px;
        border: 1px solid #EAEAEA
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
        border-radius: 5px;

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