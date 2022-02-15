import React from 'react'
import {
    Column,
    ContentWrapper,
    CopyrightText,
    FooterStyled,
    LogoHref,
    LogoWrapper,
    ProductNameText,
    Row,
    SectionItemsText,
    SectionText,
    SectionWrapper
} from './styled'

export const Footer: React.FC = () => {
    return (
        <>
            <FooterStyled>
                <Row>
                    <Column>
                        <ContentWrapper>
                            <CopyrightText>©2022 </CopyrightText>
                            <ProductNameText>TREINTEN</ProductNameText>
                        </ContentWrapper>
                    </Column>
                    <Column>
                        <LogoWrapper>
                            <LogoHref>
                            </LogoHref>
                        </LogoWrapper>
                    </Column>
                    <Column>
                        <SectionWrapper>
                            <SectionText>Builds Randomizer</SectionText>
                            <SectionItemsText href={ '/game/pokemon-unite/randomizer' }>Pokémon Unite</SectionItemsText>
                        </SectionWrapper>
                    </Column>
                </Row>
            </FooterStyled>
        </>
    );
};

Footer.displayName = 'Footer'
