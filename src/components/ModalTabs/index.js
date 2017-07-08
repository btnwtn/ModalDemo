import React from "react";
import styled from "styled-components";
import Tabs from "../../containers/Tabs";
import TabBar from "../TabBar";
import Tab from "../Tab";
import TabPanels from "../TabPanels";
import TabPanel from "../TabPanel";

const TabPanelTitle = styled.h2`
  margin: 0;
  margin-bottom: .5rem;
  color: #72767d;
  font-size: .8rem;
`;

const Textarea = styled.textarea`
  box-sizing: border-box;
  height: 100%;
  border: 2px solid #dadddf;
  border-radius: 3px;
  padding: .75em .625em;
  resize: none;
`;

const ModalTabs = props => {
  return (
    <Tabs>
      <TabBar>
        {props.data.map(tabData =>
          <Tab key={tabData.title}>{tabData.title}</Tab>
        )}
      </TabBar>
      <TabPanels>
        {props.data.map(tabData =>
          <TabPanel key={tabData.title}>
            <TabPanelTitle>NOTES</TabPanelTitle>
            <Textarea
              name={tabData.title}
              value={tabData.content}
              onChange={props.onChange}
            />
          </TabPanel>
        )}
      </TabPanels>
    </Tabs>
  );
};

export default ModalTabs;
