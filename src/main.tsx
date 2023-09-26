import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./config/chakra.config.ts";
import AppRoutes from "./routes/routes.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ChakraProvider>
);
