import React, { useContext, useState } from 'react'
import { createContext } from 'react'
import App from '../App';
import devlens from "../assets/logo-devlens.svg";
import stylespy from "../assets/logo-style-spy.svg";
import speedboost from "../assets/logo-speed-boost.svg";
import jsonwizard from "../assets/logo-json-wizard.svg";
import tabmaster from "../assets/logo-tab-master-pro.svg";
import viewportbuddy from "../assets/logo-viewport-buddy.svg";
import markupnotes from "../assets/logo-markup-notes.svg";
import gridguides from "../assets/logo-grid-guides.svg";
import palettepicker from "../assets/logo-palette-picker.svg";
import linkchecker from "../assets/logo-link-checker.svg";
import domsnapshot from "../assets/logo-dom-snapshot.svg";
import consoleplus from "../assets/logo-console-plus.svg";


export const extentionData=createContext();
const Element_data = () => {
  const extensions = [
  {
    id: 1,
    image: devlens,
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    active: false
  },
  {
    id: 2,
    image: stylespy,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    active: false
  },
  {
    id: 3,
    image: speedboost,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    active: false
  },
  {
    id: 4,
    image: jsonwizard,
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    active: false
  },
  {
    id: 5,
    image: tabmaster,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    active: false
  },
  {
    id: 6,
    image: viewportbuddy,
    name: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    active: false
  },
  {
    id: 7,
    image: markupnotes,
    name: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    active: false
  },
  {
    id: 8,
    image: gridguides,
    name: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    active: false
  },
  {
    id: 9,
    image: palettepicker,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    active: false
  },
  {
    id: 10,
    image: linkchecker,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    active: false
  },
  {
    id: 11,
    image: domsnapshot,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    active: false
  },
  {
    id: 12,
    image: consoleplus,
    name: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    active: false
  }
];

  const [gradient,setGradient]=useState(true);
  const [filter,setFilter]=useState("all");
  const [allElements,setAllElements]=useState([...extensions]);
  return (
    <extentionData.Provider value={{extensions,gradient,setGradient,filter,setFilter,allElements,setAllElements}}>
      <App/>
    </extentionData.Provider>
  )
}

export default Element_data
