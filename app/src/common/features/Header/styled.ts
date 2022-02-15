import styled from 'styled-components'

export const HeaderStyled = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: fixed;
  top: 0;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  justify-content: space-between;
  z-index: 5;
  padding: 0 90px;
`;

export const LogoWrapper = styled.a`
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 2rem;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  padding: 5px;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const NavbarItem = styled.a`
  padding: 5px 24px;
  background-color: transparent;
  color: white;
  font-family: 'Varela Round';
  font-size: 18px;
  font-weight: lighter;
`;

export const MarketPlaceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const MarketPlaceButton = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  outline: none;
  color: white;
  font-family: 'Varela Round';
  font-size: 18px;
  font-weight: lighter;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 100px;

  &:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 100px;
  }

  &:active {
    color: #000
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;;
    left: 0;
    top: 0;
    border-radius: 100px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;


const ROOT = 'Header'

HeaderStyled.displayName = `${ ROOT }/HeaderStyled`

LogoWrapper.displayName = `${ ROOT }/LogoWrapper`
Logo.displayName = `${ ROOT }/Logo`

NavbarWrapper.displayName = `${ ROOT }/NavbarWrapper`
NavbarItem.displayName = `${ ROOT }/NavbarItem`

MarketPlaceWrapper.displayName = `${ ROOT }/MarketPlaceWrapper`
MarketPlaceButton.displayName = `${ ROOT }/MarketPlaceButton`
