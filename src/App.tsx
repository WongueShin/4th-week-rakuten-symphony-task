import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "components/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import * as C from "constant";
import * as T from "types";
import { Data } from "MockData";

function App() {
  const [LinkFileData, setListFileData] = useState<T.FetchDataType[]>([]);
  useEffect(() => {
    fetch(`${C.PROXY}${C.FETCHURL}`)
      .then((res) => res.json())
      .then((data) => setListFileData(data));
  }, []);

  let keyArr: Array<string | undefined> = [];
  if (LinkFileData.length > 0) {
    console.log(LinkFileData);
    LinkFileData.map((item, idex) => {
      keyArr.push(item?.key);
    });
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <GlobalStyle />
            <Container>
              <LinkPage LinkFileData={LinkFileData} />
            </Container>
          </>
        }
      />
      <Route
        path="/:key"
        element={
          <>
            {LinkFileData.length > 0 && (
              <>
                <GlobalStyle />
                <Container>
                  <DetailPage LinkFileData={LinkFileData} keyArr={keyArr} />
                </Container>
              </>
            )}
          </>
        }
      />
    </Routes>
  );
}

export default App;
