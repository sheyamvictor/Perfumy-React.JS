import one from "../gallery/images/image1 (1).png"

import two from "../gallery/images/image1 (2).png"

import three from "../gallery/images/image1 (3).png"


function Imagetag(){

    return(
      <div className="container">
    
        <div className="box1-img">
          <img src={one} alt="one"></img>
          <h3>ONE MAN ARMY</h3>
          <p>fogg wood extreme eau de perfume long-lasting perfume.</p>
          <p>100ml</p>
        </div>
    
        <div className="box2-img">
          <img src={two} alt="two"></img>
          <h3>VILLAIN</h3>
          <p>fogg wood extreme eau de perfume long-lasting perfume.</p>
          <p>100ml</p>
        </div>
    
        <div className="box3-img">
          <img src={three} alt="three"></img>
          <h3>FIGHT CLUB</h3>
          <p>fogg wood extreme eau de perfume long-lasting perfume.</p>
          <p>100ml</p>
        </div>
    
    
      </div>
    )
    
    }

    export default Imagetag