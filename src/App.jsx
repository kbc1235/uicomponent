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
        let  name = e.target.name;
        setContent(name);
        console.log( e.target.name)
      }

    return(
     <div className="main">
        <Nav add={handleSubmit}/>
      
        <Content>{selectComponent[`first`]}</Content>
        
     </div>
    )
    
       
    
}

export default App;