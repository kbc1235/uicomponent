import { useState } from 'react';
import Content from "./components/Content";
import Nav from "./components/Nav";
import Test from './components/Test';


const App = () =>{  
    const [content, setContent] = useState();
    const selectComponent = {
        Test:<Test />  
    }
    const handleSubmit = e => {
        const { text } = e.target;
        setContent(text);
        console.log(selectComponent[text])
      }

    return(
     <div className="main">
        <Nav add={handleSubmit}/>
      
        {content && <Content>{selectComponent[content]}</Content>}
        {console.log(selectComponent[content])}
        
     </div>
    )
    
       
    
}

export default App;