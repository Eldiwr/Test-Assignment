import styled from "styled-components";

export const FormWrapper = styled.section`
    padding: 0px 16px 0px 16px;
    text-align: center;

`;
export const StyledForm = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 14px 16px 14px 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorderColor};
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  @media screen and (min-width: 768px){
    max-width: 380px;
  }
`;

export const StyledRadio = styled.input``;

export const SubmitButton = styled.button`
  width: 100px;
  height: 34px;
  text-align: center;
  border: 0;
  border-radius: 80px;
  background-color: ${({ theme }) => theme.colors.disabledColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor};
    cursor: pointer;
  }
`;
    

    