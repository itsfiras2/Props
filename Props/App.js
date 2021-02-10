import logo from './logo.svg';
import './App.css';
import { FullName,Bio, Profession,Image,Email, } from './profile/Profile component';


function App() {
 const  styleObject={textAlign:'center',color:'Red' ,fontFamily:'Courier New, Courier, monospace',fontSize:'50px'}

  return (
        <div style={styleObject}>
      
        <FullName  name="Firas Saadi"/>
        <Bio bio="I'm on my way to build a rich bio"/>
        <Profession profession="Fullstack Js Developer"/>
        <Image><img src={logo} alt="image"/></Image>
        <Email/>
        <Foo/>
        </div>
        
  )
}

export default App;
