import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import Provider from "./tools/provider";
import "react-quill/dist/quill.snow.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider>
    <Root />
  </Provider>,
);
