import React from "react";
// import { Layout } from 'antd';

import PrimaryHeader from "../components/myforms/primaryHeader";
import SecondaryHeader from "../components/myforms/secondaryHeader";
import LeftPanel from "../components/myforms/leftPanel";
import RightPanel from "../components/myforms/rightPanel";
import StageContainer from "../components/myforms/stageContainer";

const Build = () => (
  <div>
    <PrimaryHeader />
    <SecondaryHeader />
    <StageContainer />
    <LeftPanel />
    <RightPanel />
  </div>
);

export default Build;
