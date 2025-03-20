import styled from "styled-components";

const ButtonContainer = ({className, children, width, ...props}) => {
    return (
        <button className={className} {...props}>
            {children}
        </button>
    )
}
export const Button = styled(ButtonContainer)`
    width: ${({width = '100%'}) => width}px;
    min-height: 45px;
    padding-left: 14px;
    background: #46A358;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
`