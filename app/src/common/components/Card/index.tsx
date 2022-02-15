import React from 'react'
import {
    CardHref,
    CardImage,
    CardImageContainer,
    CardStyled,
    DisabledCardStyled,
    DisableTextContainer,
    DisableTitleText,
    TitleContainer,
    TitleText
} from './styled'

interface Props {
    href?: string
    title?: string
    image?: string
    active: boolean
}

export const Card: React.FC<Props> = ({ href, title, image, active }) => {
    return (
        <>
            {
                active ?
                    <CardStyled>
                        <CardHref href={ href }>
                            <CardImageContainer/>
                            <img className={ CardImage }
                                 src={ image } alt={ title }/>
                            <TitleContainer>
                                <TitleText>{ title }</TitleText>
                            </TitleContainer>
                        </CardHref></CardStyled> :
                    <CardStyled>
                            <DisableTextContainer>
                                <DisableTitleText>NEXT GAME</DisableTitleText>
                            </DisableTextContainer>

                    </CardStyled>
            }
        </>
    );
};

Card.displayName = 'Card'
