import styled from "styled-components";

export const MembersSection = styled.section`
  padding: 140px 16px 140px 16px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 140px 32px 140px 32px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding: 140px 60px 140px 60px;
  }

  @media screen and (min-width: 2560px) {
    max-width: 2560px;
    padding: 140px 0px 140px 0px;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 1;
`

export const CardList = styled.ul`
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    gap: 29px;
  }

`;

export const MemberButton = styled.button`
  width: 100px;
  height: 34px;
  margin-top: 50px;
  text-align: center;
  border: 0;
  border-radius: 80px;
  background-color: ${({ theme }) => theme.colors.primaryColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor};
    cursor: pointer;
  }
`;