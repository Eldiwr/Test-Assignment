import styled from "styled-components";

export const HeaderWrapper = styled.div`
  min-width: 360px;
  margin: 0px auto;
  padding: 13px 16px 13px 16px;
  min-height: 60px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 13px 32px 13px 32px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding: 13px 60px 13px 60px;
  }

  @media screen and (min-width: 2560px) {
    max-width: 1170px;
    padding: 13px 0 13px 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const HeaderButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const HeaderButton = styled.button`
  width: 100px;
  height: 34px;
  text-align: center;
  border: 0;
  border-radius: 80px;
  background-color: ${({ theme }) => theme.colors.primaryColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor};
    cursor: pointer;
  }
`;
