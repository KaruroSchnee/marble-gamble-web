import styled from 'styled-components'

export const Banner = styled.div`
  width: 100%;
  height: 1000px;
  align-items: flex-end;
  position: relative;
  transform: translate(0px, -15%);
  overflow: hidden;

  @media (max-width: 1200px) {
    display: block;
    height: 100%;
  }
`;

export const BannerBackground = styled.img`
  display: grid;
  height: 100%;

  width: 100%;
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
`;

export const Section = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0 48px;
}
`;

const ROOT = 'MainHome'

Banner.displayName = `${ ROOT }/Banner`
BannerBackground.displayName = `${ ROOT }/BannerBackground`
Section.displayName = `${ ROOT }/Section`
