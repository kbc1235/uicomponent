import { useState } from 'react';
import Content from "./components/Content";
import Nav from "./components/Nav";
import Test from './components/Test';


const App = () =>{  
    const [content, setContent] = useState();
    const selectComponent = {
        first:<Test />,
        second:`<div></div>` ,
    }
    const handleSubmit = e => {
        const {name} = e.target;
        setContent(name);
      }
      console.log(content)
    return(
     <div className="main">
        <Nav add={handleSubmit}/>
      
        <Content>{selectComponent[content]}</Content>
        
     </div>
    )
    
       
    
}

export default App;