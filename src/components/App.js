import { Routes, Route } from "react-router";
import { Page } from "pages/page";
import { GlobalStyle } from "./GlobalStyle";



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page/>} />
      </Routes>
      <GlobalStyle />
    </>
  );
}


