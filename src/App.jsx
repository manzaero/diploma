import styled from "styled-components";
import {Header} from "./components/header/header.jsx";
import {Footer} from "./components/footer/footer.jsx";
import {Route, Routes} from "react-router-dom";


const AppColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1250px;
    min-height: 100%;
    margin: 0 auto;
    background-color: #fff;
    padding: 0 25px;
`

const Pages = styled.div`
    padding: 50px 0;
`

export const Shop =  () => {

  return (
    <AppColumn>
        <Header/>
        <Pages>
            <Routes>
                <Route path="/" element={<div>Main page</div>}/>
                <Route path="/cart" element={<div>Product cart</div>}/>
                <Route path="/signin" element={<div>Authorization</div>}/>
                <Route path="/signup" element={<div>Registration</div>}/>
                <Route path="/admin" element={<div>Admin panel</div>}/>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
        </Pages>
        <Footer/>
    </AppColumn>
  )
}
