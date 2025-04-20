/** @format */

import React, { useState } from "react";
import Sidebar from "../../components/navigation/Sidebar";

function AgentSidebar(props) {
  const [fullName, setFullName] = useState("Aya Saidani");
  const [post, setPost] = useState("teleconseiller");
  return (
    <Sidebar
      isOpen={props.isOpen}
      full_name={fullName}
      post={post}
    />
  );
}

export default AgentSidebar;
