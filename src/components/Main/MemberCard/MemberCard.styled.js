import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CardItem = styled.li`
  min-width: 328px;
  height: 254px;
  padding: 20px;
  margin-bottom: 10px;
  word-wrap: break-word;
  overflow: hidden;
  &:last-child {
    margin-bottom: 0px;
  }
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  text-align: center;
  min-width: 328px;

  @media screen and (min-width: 768px) {
    min-width: 344px;
    margin: 0;
  }

  @media screen and (min-width: 1024px) {
    min-width: 282px;
    max-width: 282px;
    margin: 0;
  }

  @media screen and (min-width: 2560px) {
    min-width: 370px;
    margin: 0;
  }
`;

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`
export const Image = styled.img`
    border-radius: 50%;
`
export const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`
export const Name = styled.p`
  margin-top: 20px;
`