import styled from "styled-components";

export const MainContainer = styled.main`
  min-width: 360px;
  margin: 0 auto;


  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }

  @media screen and (min-width: 2560px) {
    max-width: 1170px;
  }
`;