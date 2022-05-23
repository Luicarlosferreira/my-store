import BallsDesign from "../header/balls";
import Header from "../header/Header";
import TextHeader from "../header/TextHeader";


function MainSection(){
    return(
        <div className="MainSectionContent">

        <Header></Header>
        <TextHeader></TextHeader>
        <BallsDesign></BallsDesign>

        
        </div>
    )
}



export default MainSection;