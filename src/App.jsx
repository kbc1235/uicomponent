import React, { useState } from 'react';
import Content from "./components/Content";
import Nav from "./components/Nav";
import Main from './components/Main';
import Modal from './components/Modal';
import Grid from './components/Grid';
import Radio from './components/Radio';
import Toast from './components/Toast';



const App = () =>{  
    const [content, setContent] = useState('default');
    const selectComponent = {
        default:<Main />,
        modal:<Modal />,
        slider:<div>슬라이드 컴포넌트 만들 예정</div> ,
        grid:<Grid />,
        chart:<div>D3 활용 컴포넌트 만들 예정</div> ,
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