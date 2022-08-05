import React from "react";
import { observer } from "mobx-react";
import { ReactModalImage } from "./components/ReactModalImage";
import "./index.css";

export const App: React.FC = observer(() => {
  return (
    <div className="app">
      <ReactModalImage smallImgSrc="" largeImgSrc="" />
    </div>
  );
});
