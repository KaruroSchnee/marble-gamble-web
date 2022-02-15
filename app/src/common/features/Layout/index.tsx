import React from 'react'
import { Content, Main } from './styled'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Main>
                <Header/>
                <Content>
                    { children }
                </Content>
                <Footer/>
            </Main>
        </>
    );
};

Layout.displayName = 'Layout'
