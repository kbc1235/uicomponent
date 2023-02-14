import React, { useState } from 'react';
import Content from "./components/Content";
import Nav from "./components/Nav";
import Main from './components/Main';
import Modal from './components/Modal';
import Grid from './components/Grid';
import Radio from './components/Radio';
import Toast from './components/Toast';
import CarouselWrap from './components/CarouselWrap';



const App = () =>{  
    const [content, setContent] = useState('default');
    const selectComponent = {
        default:<Main />,
        modal:<Modal />,
        slider:<CarouselWrap />,
        grid:<Grid />,
        radio:<Radio />,
        toast:<Toast />
    }
    const handleSubmit = e => {
        const {name} = e.target;
        setContent(name);
      }
    return(
    <React.StrictMode>
        <div className="main">
            <Nav add={handleSubmit}/>
        
            {content && <Content>{selectComponent[content]}</Content>}
            
        </div>
     </React.StrictMode>
    )
    
       
    
}

export default App;