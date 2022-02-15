import styled from 'styled-components'

export const CardStyled = styled.div`
  margin: 5px;
  width: 173px;
  height: 240px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #181818;
  background-clip: border-box;
  border-radius: 15px;
  box-shadow: 5px 10px 10px 1px rgba(52, 52, 52, 0.27) !important;
  transition: 0.5s;
  animation: ease-in-out;
  overflow: hidden;

  @media (min-width: 480px) {
    width: 216px;
    height: 300px;
  }

  @media (min-width: 768px) {
    width: 240px;
    height: 360px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px 0px;
  }
`;

export const DisabledCardStyled = styled.div`
  margin: 5px;
  width: 173px;
  height: 240px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: black;
  background-clip: border-box;
  border-radius: 15px;
  box-shadow: 5px 10px 10px 1px rgba(52, 52, 52, 0.27) !important;
  transition: 0.5s;
  animation: ease-in-out;
  overflow: hidden;

  @media (min-width: 480px) {
    width: 216px;
    height: 300px;
  }

  @media (min-width: 768px) {
    width: 240px;
    height: 360px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px 0px;
  }
`;


export const CardHref = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: inline-block;
    background: linear-gradient(to top, black 15%, transparent 25% 100%);
    pointer-events: none;
    content: '';
  }
`;

export const CardImage = styled.div`
  width: auto;
  height: auto;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 15%;
  background: black;
  bottom: 0;
  position: absolute;
`;

export const TitleText = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 5px;
  color: #fafafa;
  font-family: 'Nunito Sans';
  font-weight: lighter;
  font-style: normal;
  font-size: 16px;
  place-items: center;

  @media (min-width: 480px) {
    font-size: 17px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const DisableTextContainer = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  text-align: center;
`;

export const DisableTitleText = styled.div`
  width: 100%;
  height: 15%;
  padding: 5px;
  position: absolute;
  top: 45%;
  color: #fafafa;
  font-family: 'Nunito Sans';
  font-weight: lighter;
  font-style: normal;
  font-size: 20px;

  @media (min-width: 480px) {
    font-size: 22px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const ROOT = 'Card'

CardStyled.displayName = `${ ROOT }/CardStyled`
DisabledCardStyled.displayName = `${ ROOT }/DisabledCardStyled`
CardHref.displayName = `${ ROOT }/CardHref`
CardImageContainer.displayName = `${ ROOT }/CardImageContainer`
CardImage.displayName = `${ ROOT }/CardImage`
TitleContainer.displayName = `${ ROOT }/TitleContainer`
TitleText.displayName = `${ ROOT }/TitleText`
DisableTextContainer.displayName = `${ ROOT }/DisableTextContainer`
DisableTitleText.displayName = `${ ROOT }/DisableTitleText`
