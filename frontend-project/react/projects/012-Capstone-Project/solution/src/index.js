import ReactDOM from "react-dom";
import Providers from "./providers";
import MainRouter from "./router";

ReactDOM.render(
  <Providers>
    <MainRouter />
  </Providers>,
  document.getElementById("root")
);
