import styled from 'styled-components'

export const PageNotFoundStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: 128px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 1000px;
    max-height: 900px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 64px;
  top: 0;
  position: relative;

  @media (min-width: 480px) {
    height: 86px;
  }

  @media (min-width: 768px) {
    height: 112px;
  }

  @media (min-width: 1024px) {
    height: 116px;
  }
`;

export const TitleText = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 5px;
  color: #fafafa;
  font-family: 'Nunito Sans';
  font-weight: bold;
  font-style: normal;
  font-size: 18px;
  place-items: center;
  text-align: center;

  @media (min-width: 360px) {
    font-size: 24px;
  }

  @media (min-width: 480px) {
    font-size: 36px;
  }

  @media (min-width: 768px) {
    font-size: 56px;
  }

  @media (min-width: 1024px) {
    font-size: 72px;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 24px;
  top: 0;
  place-items: center;
  position: relative;

  @media (min-width: 768px) {
    height: 36px;
  }

  @media (min-width: 1024px) {
    height: 48px;
  }
`;

export const DescriptionText = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 5px;
  color: #fafafa;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-size: 14px;
  place-items: center;
  text-align: center;

  @media (min-width: 360px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const HomeContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  place-items: center;
`;

export const HomeButton = styled.a`
  float: right;
  margin: 0;
  padding: 12px 14px;
  text-align: center;
  appearance: none;
  background-color: white;
  border: 2px solid black;
  border-radius: 15px;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  outline: none;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

  @media (min-width: 690px) {
    font-size: 16px;
  }

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    background-color: black;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;


const ROOT = 'PageNotFound'

PageNotFoundStyled.displayName = `${ ROOT }/PageNotFoundStyled`
TitleContainer.displayName = `${ ROOT }/TitleContainer`
TitleText.displayName = `${ ROOT }/TitleText`
DescriptionContainer.displayName = `${ ROOT }/TitleContainer`
DescriptionText.displayName = `${ ROOT }/TitleText`
HomeContainer.displayName = `${ ROOT }/HomeContainer`
HomeButton.displayName = `${ ROOT }/HomeButton`
