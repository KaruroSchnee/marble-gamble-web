import type { NextPage } from 'next'
import React from 'react'
import {
    DescriptionContainer,
    DescriptionText,
    HomeButton,
    HomeContainer,
    PageNotFoundStyled,
    TitleContainer,
    TitleText
} from './styled'

export const PageNotFound: NextPage = () => {
    return (
        <>
            <PageNotFoundStyled>
                <TitleContainer>
                    <TitleText>404 | PAGE NOT FOUND</TitleText>
                </TitleContainer>
                <DescriptionContainer>
                    <DescriptionText>The requested page was not found.</DescriptionText>
                </DescriptionContainer>
                <HomeContainer>
                    <HomeButton href={ '/' }>HOME</HomeButton>
                </HomeContainer>
            </PageNotFoundStyled>
        </>
    )
}

export default PageNotFound
