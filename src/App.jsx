import { useState } from 'react';
import Content from "./components/Content";
import Nav from "./components/Nav";
import Main from './components/Main';
import Test from './components/Test';


const App = () =>{  
    const [content, setContent] = useState('default');
    const selectComponent = {
        default:<Main />,
        first:<Test />,
        second:<Main /> ,
    }
    const handleSubmit = e => {
        const {name} = e.target;
        setContent(name);
      }
    return(
     <div className="main">
        <Nav add={handleSubmit}/>
      
        {content && <Content>{selectComponent[content]}</Content>}
        
     </div>
    )
    
       
    
}

export default App;