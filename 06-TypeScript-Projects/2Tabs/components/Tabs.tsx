
import { useState, type ReactNode } from "react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiCoursera } from "react-icons/si";
import Card from "./Card";
import About from "./About";
import Contact from "./Contact";

type TabsType = {
  id: string;
  icon: ReactNode; 
  label: string;
  content: ReactNode;
}

const tabs: TabsType[] = [
  { 
    id: "home",
    icon: <FaHome/>, 
    label: "Home",
    content: (
      <div>
        {Array.from({ length: 2 }).map((_, index) => (
          <Card 
            key={index} 
            title="Portfolio Highlight"
            description="Featured work showcasing modern web applications built with React and TypeScript." 
            image="https://picsum.photos/id/237/400/300"
            link="https://google.com"
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />, 
    label: "About",
    content: <About />,
  },
  { 
    id: "projects",
    icon: <GoProjectSymlink/>, 
    label: "Projects",
    content: (
    <div>
        {Array.from({ length: 2 }).map((_, index) => (
          <Card 
            key={index} 
            title="Recent Project"
            description="Full-stack application with real-time features, REST APIs, and responsive design." 
            image="https://picsum.photos/id/200/400/300"
            link="https://google.com"
          />
        ))}
    </div>
    ),
  },
  { 
    id: "courses",
    icon: <SiCoursera/>, 
    label: "Courses",
    content: (
      <div>
        {Array.from({ length: 2 }).map((_, index) => (
          <Card 
            key={index}
            title="Course Module"
            description="Comprehensive tutorial covering advanced React patterns, hooks, and performance optimization."
            image="https://picsum.photos/id/27/400/300"
            link="https://google.com"
            />
        ))}
      </div>
    ),
  },
  { 
    id: "contact",
    icon: <FaPhone/>, 
    label: "Contact",
    content: <Contact />,
  },
]

const Tabs = () => {

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}>
            <div>
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>
      <div>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;