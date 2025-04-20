import React,{useState} from 'react'
import Sidebar from '../../components/navigation/Sidebar';

function CommercialSidebar(props) {
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

export default CommercialSidebar