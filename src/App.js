import react from "react";
import Navigation from "./components/navigation";
import './styles/style.css';
import './styles/media.css';
import Banner from "./components/banner";
import Section from "./components/section1";


const App = () => {
    return(
       <>
        <Navigation/>
        <Banner/>
        <Section/>
       </>
    )
}



export default App;