import styled from 'styled-components'

export const FooterStyled = styled.footer`
  width: 100%;
  height: 256px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  background-color: #000001;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  place-items: center;
  box-sizing: border-box;
`;

export const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  place-items: center;
  color: white;
`;

export const CopyrightText = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  color: #fafafa;
  font-family: 'Nunito Sans';
  font-weight: lighter;
  font-style: normal;
  font-size: 14px;
  place-items: center;

  @media (min-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ProductNameText = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 5px;
  color: #fafafa;
  font-family: 'Nunito Sans';
  font-weight: bold;
  font-style: normal;
  font-size: 14px;
  place-items: center;

  @media (min-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  flex-direction: column;
`;

export const SectionText = styled.div`
  display: grid;
  width: 100%;
  padding: 5px;
  color: #fafafa;
  font-family: 'Nunito Sans';
  font-weight: lighter;
  font-style: normal;
  font-size: 14px;
  margin: 20px;

  @media (min-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const SectionItemsText = styled.a`
  display: grid;
  width: 100%;
  padding: 5px;
  color: #fafafa;
  font-family: 'Nunito Sans';
  font-weight: bold;
  font-style: normal;
  font-size: 14px;
  margin: 20px;

  @media (min-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  place-items: center;

  svg {
    transition: .3s all ease;
  }
`;

export const LogoHref = styled.a`
  text-decoration: none;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    place-items: center;

    svg {
      width: 480px;
      height: 90px;
    }
  }
`;

const ROOT = 'Footer'

FooterStyled.displayName = `${ ROOT }/Styled`
Row.displayName = `${ ROOT }/Row`
Column.displayName = `${ ROOT }/Column`
ContentWrapper.displayName = `${ ROOT }/ContentWrapper`
CopyrightText.displayName = `${ ROOT }/CopyrightText`
SectionWrapper.displayName = `${ ROOT }/SectionWrapper`
SectionText.displayName = `${ ROOT }/SectionText`
SectionItemsText.displayName = `${ ROOT }/SectionItemsText`
LogoWrapper.displayName = `${ ROOT }/LogoWrapper`
LogoHref.displayName = `${ ROOT }/LogoHref`
