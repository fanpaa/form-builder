import React, { Component } from "react";

import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import PrimaryHeader from "../components/build/primaryHeader";
import SecondaryHeader from "../components/build/secondaryHeader";
import LeftPanel from "../components/build/leftPanel";
import RightPanel from "../components/build/rightPanel";
import StageContainer from "../components/build/stageContainer";

class Build extends Component {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <PrimaryHeader />
          <SecondaryHeader />
          <StageContainer />
          <LeftPanel />
          <RightPanel />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default Build;
