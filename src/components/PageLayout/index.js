import React from 'react';
import * as Styles from "./styles";

import Header from "../Header"

function PageLayout({ children }) {
    return (
        <>
            <Header />
            <Styles.Container>
                {children}
            </Styles.Container>
        </>
    );
}

export default PageLayout;