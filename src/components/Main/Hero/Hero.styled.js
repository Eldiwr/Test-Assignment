import styled from "styled-components";
import img from "../../../assets/pexels-alexandr-podvalny-1227513.jpeg";

export const HeroSection = styled.section`
  min-width: 360px;
  min-height: 500px;
  margin: 0 auto;
  padding: 40px 16px 0px 16px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${img});

  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding: 89px 194px 0px 194px;
  }

  @media screen and (min-width: 1024px) {
    min-height: 650px;
    padding: 164px 322px 0px 322px;
  }

  @media screen and (min-width: 2560px) {
    max-width: 1170px;
    min-height: 650px;
    padding: 164px 395px 0px 395px;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.title};
  line-height: 1;
`;

export const TextWrapper = styled.div`
  margin: 21px 0 0 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const HeroButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;   
`

export const HeroButton = styled.button`
  align-items: center;
  text-align: center;
  width: 100px;
  height: 34px;
  border: 0;
  border-radius: 80px;
  background-color: ${({ theme }) => theme.colors.primaryColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor};
    cursor: pointer;
  }
`;