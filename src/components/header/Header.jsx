
import { Fade } from "react-reveal";


function Header(){
    return(
        <div className="HeaderContent">
            <Fade left>
            <ul className="List_header">
                <span className="menuBtn"><button>Botao</button></span>
                <li><a href="#">Home</a></li>             
                <li><a href="#">Culture</a></li>                
                <li><a href="#">Contacts</a></li>
                
            </ul>
            </Fade>
            <Fade bottom>
            <div><img src=".\src\assets\imgs\castle.png" alt="Japan art" /></div>
            </Fade>
        </div>
    )
}




export default Header;