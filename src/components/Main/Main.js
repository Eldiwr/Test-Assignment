import { Form } from "./Form/Form";
import { Hero } from "./Hero/Hero";
import { MainContainer } from "./Main.styled";
import { Members } from "./Members/Members";

export const Main = () => {
  return (
    <MainContainer>
      <Hero />
      <Members />
      <Form />
    </MainContainer>
  );
};
