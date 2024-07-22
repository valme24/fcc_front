
import image1 from '../comps/image1.png';
function Card(){


    return(
        <div className="card">
          <img src={image1} alt="image.png"></img>
          <h2>Arya Code</h2>
          <p>i writes code</p>
         </div>
    );

}
export default Card;