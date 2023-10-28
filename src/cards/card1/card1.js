import './fc24.css'
import fc24 from './jj.png';
export default function Card1() {
    return <>
      <div className="cont1">
    <div className="card1">
        <img src={fc24} id='logo1' />
        <p className="dispo1">DISPONIBLE DÈS MAINTENANT </p>
        <p className="textGame1">
            EA SPORTS FC™ 24 vous plonge au coeur  de
             The World’s Game pour vous offrir le jeu 
             de football le plus réaliste au monde .
        </p>
        <p className="prix1">
            le prix de départ :  <span>70 $US</span>
        </p>
        <div className="btnAchete1">
            ACHETER MAINTENANT
        </div>
    </div>
   </div></>
}