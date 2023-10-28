import './wich.css'
import wich from './logo_wichfire.png';
export default function Card3() {
    return <>
      <div className="cont3">
    <div className="card3">
        <img src={wich} id="logo3" />
        <p className="dispo3">DISPONIBLE </p>
        <p className="textGame3">
        Avec des armes étranges et de la magie interdite, 
        chassez une puissante sorcière qui est la clé de votre salut.
        </p>
        <p className="prix3">
            le prix de départ :  <span>10,39 $US</span>
        </p>
        <div className="btnAchete3">
            ACHETER MAINTENANT
        </div>
    </div>
   </div></>
}