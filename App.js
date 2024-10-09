import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Menu from "./Component/Menu";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import { Routes , Route } from 'react-router-dom';
import AddMenu from "./Component/AddMenu";
import UpdateMenu from "./Component/UpdateMenu";

function App(){
    return(
        <>
       <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/add-menu" element={<AddMenu/>}/>
        <Route path="update-menu/:id" element={<UpdateMenu/>}/> 
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
        </>
    )
}
export default App;




