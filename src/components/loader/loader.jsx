import styled from "styled-components";

const LoaderContainer = ({className}) => {
    return <div className={className}/>;
};

export const Loader = styled(LoaderContainer)`
    width: 65px;
    aspect-ratio: 1;
    position: relative;

    &::before,
    &::after {
        content: "";
        position: absolute;
        border-radius: 50px;
        box-shadow: 0 0 0 3px inset #fff;
        animation: l4 2.5s infinite;
    }

    &::after {
        animation-delay: -1.25s;
    }

    @keyframes l4 {
        0% {
            inset: 0 35px 35px 0;
        }
        12.5% {
            inset: 0 35px 0 0;
        }
        25% {
            inset: 35px 35px 0 0;
        }
        37.5% {
            inset: 35px 0 0 0;
        }
        50% {
            inset: 35px 0 0 35px;
        }
        62.5% {
            inset: 0 0 0 35px;
        }
        75% {
            inset: 0 0 35px 35px;
        }
        87.5% {
            inset: 0 0 35px 0;
        }
        100% {
            inset: 0 35px 35px 0;
        }
    }
`;
