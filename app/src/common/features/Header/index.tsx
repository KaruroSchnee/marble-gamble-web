import React from 'react'
import {
    HeaderStyled,
    Logo,
    LogoWrapper,
    MarketPlaceButton,
    MarketPlaceWrapper,
    NavbarItem,
    NavbarWrapper
} from './styled'

export const Header: React.FC = () => {
    return (
        <>
            <HeaderStyled>
                <LogoWrapper href={ '/' }>
                    <Logo src='/assets/images/logo.png'/>
                </LogoWrapper>
                <NavbarWrapper>
                    <NavbarItem>Marbles</NavbarItem>
                    <NavbarItem>Gameplay</NavbarItem>
                    <NavbarItem>Bet Coin</NavbarItem>
                    <NavbarItem>Roadmap</NavbarItem>
                </NavbarWrapper>
                <MarketPlaceWrapper>
                    <MarketPlaceButton>MARKET PLACE</MarketPlaceButton>
                </MarketPlaceWrapper>
            </HeaderStyled>
        </>
    );
};

Header.displayName = 'Header'
