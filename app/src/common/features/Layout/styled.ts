import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: block;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const ROOT = 'Layout'

Main.displayName = `${ ROOT }/Main`
Content.displayName = `${ ROOT }/Content`
