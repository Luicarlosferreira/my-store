
import { Fade } from "react-reveal";


function TextHeader(){
    return(
        <div className="TextContentHeader">
            
            <Fade left>
            <div className="spanContainer">            
                <img src=".\src\assets\imgs\16741343401556273568-128.png" />           
            </div>
            </Fade>

            <Fade right>
            <h2>
             All that you need is <br /> 
            here, <strong>by your side.</strong> 
            </h2>
            </Fade>
        </div>
    )
}


export default TextHeader;