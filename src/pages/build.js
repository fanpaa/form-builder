import React, { Component } from "react";

import PrimaryHeader from "../components/build/primaryHeader";
import SecondaryHeader from "../components/build/secondaryHeader";
import LeftPanel from "../components/build/leftPanel";
import RightPanel from "../components/build/rightPanel";
import StageContainer from "../components/build/stageContainer";

class Build extends Component {
  render() {
    return (
      <div>
        <PrimaryHeader />
        <SecondaryHeader />
        <StageContainer />
        <LeftPanel />
        <RightPanel />
      </div>
    );
  }
}

export default Build;
