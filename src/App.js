import React from "react";
import Sidebar from "./components/Sidebar";
import Information from "./components/Infomation";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Sidebar />
        <Information />
      </main>
    </>
  );
}

export default App;
