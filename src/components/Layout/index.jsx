import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Global } from "@emotion/core";
import globalStyles from 'styles/global';
import typeStyles from 'styles/typography';
import Footer from "components/Footer";
import Header from "components/Header";
import 'styles/colors.scss';
import 'styles/global.scss';
import 'styles/fonts.scss';
import './layout.scss';

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Global styles={[globalStyles, typeStyles]} />
                <div className="outter-container">
                    <Header />
                    <main className="Layout__content">
                        {children}
                    </main>
                    <Footer />
                </div>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
