import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
