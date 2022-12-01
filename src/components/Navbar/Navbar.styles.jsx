import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarHeader = styled.header``;

export const NavLinkStyled = styled(Link)`
    padding: 0.5rem 1rem;
    font-size: 1.3rem !important;
    :hover {
        font-weight: bold;
    }
`;
