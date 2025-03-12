import { ReactNode, useState } from 'react';
import { TabsContainer, TabList, TabButton, TabPanel } from './styles';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveTab?: number;
}

export function Tabs({ tabs, defaultActiveTab = 0 }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <TabsContainer>
      <TabList>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            active={index === activeTab}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabList>
      {tabs.map((tab, index) => (
        <TabPanel key={index} active={index === activeTab}>
          {tab.content}
        </TabPanel>
      ))}
    </TabsContainer>
  );
}