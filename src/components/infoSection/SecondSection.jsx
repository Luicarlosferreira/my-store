import Fade from "react-reveal";
import Spin from "react-reveal/Spin"


function SecondSection(){
    return(


        <section className="secondSection">
            <div className="infoContent">
               <Fade bottom><h2>JAPAN</h2> 
                <p>Japan, island country lying off the east coast of Asia. It consists of a great string of islands in a northeast-southwest arc that stretches for approximately 1,500 miles (2,400 km) through the western North Pacific Ocean. Nearly the entire land area is taken up by the country’s four main islands; from north to south these are Hokkaido (Hokkaidō), Honshu (Honshū), Shikoku, and Kyushu (Kyūshū). Honshu is the largest of the four, followed in size by Hokkaido, Kyushu, and Shikoku.</p></Fade>
            </div>

            <div id="cardsSection" className="cardsContent">




                <Spin >
                <div><img src=".\src\assets\imgs\cultural.png"  alt="Japan Cultural"/> <p>Japanese culture is ancient and is filled with rites and traditions to honor the family. </p></div>



                <div><img src=".\src\assets\imgs\education.png" alt="Japan Education" /> <p>The Education in Japan goes further.
                </p></div>




                <div><img src=".\src\assets\imgs\travel.png" alt="Japan Travelers" /> <p>Japan is one of the most visited countries in the world.</p></div>  
                </Spin>

                <Spin >
                <div><img src=".\src\assets\imgs\dangos.png" /> <p>Japanese cuisine is incredibly adored.
</p></div>

                <div><img src=".\src\assets\imgs\samurai.png" /> <p>A lot of history and art are involved in japan.</p></div>

                <div><img src=".\src\assets\imgs\japan.png" /> <p>It is a country where once in a lifetime you need to visit.</p></div>
                </Spin>
            </div>


        </section>





    )
}


export default SecondSection;