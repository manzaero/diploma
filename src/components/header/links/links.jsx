import styled from "styled-components";
import {Link} from "react-router-dom";

const LinksContainer = ({className}) => (<div className={className}>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/404'>Shop</Link>
            <Link to=''>Plant care</Link>
            <Link to=''>Blogs</Link>
        </ul>
    </div>)

export const Links = styled(LinksContainer)`
    width: 350px;
    & ul {
        font-size: 16px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 0;
    }
    & li {
        list-style-type: none;
    }
`