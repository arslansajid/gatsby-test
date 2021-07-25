import React from 'react';
import * as Styles from "./styles"
import { Link } from "gatsby";
import Logo from "../../images/icon.png";

function Header(props) {
    return (
        <Styles.HeaderContainer>
            <Link to="/">
                <Styles.LogoImage src={Logo} />
            </Link>
            <Link to="/about">About</Link>
        </Styles.HeaderContainer>
    );
}

export default Header;
