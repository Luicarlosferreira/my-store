
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";


function Header(){




    return(
        <div id="Home" className="HeaderContent">
            <Fade left>
            <ul className="List_header">
                <span className="menuBtn"><button>Botao</button></span>
                <li><a href="#Home">HOME</a></li>          
                <li><a href="#cardsSection">CULTURE</a></li>                
                <li><a href="#">CONTACTS</a></li>
                
            </ul>
            </Fade>
            <Fade bottom>
            <div><img src=".\src\assets\imgs\castle.png" alt="Japan art" /></div>
            </Fade>            
        </div>
    )
}




export default Header;