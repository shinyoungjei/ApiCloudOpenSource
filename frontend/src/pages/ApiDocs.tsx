import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Sidebar from "../components/ApiDocs/Sidebar";
import '../components/ApiDocs/ApiDocs.scss'

const ApiDocs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <div className="apiDocContainer">
      <div className="sidebarDocWrapper">
        <div className="sidebarBox">
          <div onClick={toggleSide} className="sidebarButton">
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className="docBox">
          <div className="title">API DOC 페이지</div>
          <div className="doc"></div>
        </div>
      </div>
    </div>
  )
};

export default ApiDocs;
