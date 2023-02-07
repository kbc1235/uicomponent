import { useState } from 'react';
import Content from "./components/Content";
import Nav from "./components/Nav";
import Main from './components/Main';



const App = () =>{  
    const [content, setContent] = useState('default');
    const selectComponent = {
        default:<Main />,
        modal:<div>모달팝업 컴포넌트 만들 예정</div>,
        slider:<div>슬라이드 컴포넌트 만들 예정</div> ,
        grid:<div>그리드 컴포넌트 만들 예정</div> ,
        chart:<div>D3 활용 컴포넌트 만들 예정</div> ,
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