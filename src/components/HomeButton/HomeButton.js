import Imghome from "./../../assets/home.png";
import { Link } from "react-router-dom";
import  "./HomeButton.css";


function HomeButton(){
    return(
        <Link to="/">
            <img src={Imghome}alt ="home" className="home-img"/>
        </Link>
    )
}

export default HomeButton;