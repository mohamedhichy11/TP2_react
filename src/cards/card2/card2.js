import './assasin.css'
import logoass from './MIRAGE_LOGO.webp'
export default function Card2() {
    return <>
      <div className="cont2">
    <div className="card2">
        <img src={logoass} id='logo2' />
        <p className="dispo2">DISPONIBLE  </p>
        <p className="textGame2">
        Découvrez l'histoire de Basim, un voleur habile en quête de
         réponses et de justice dans les rues du Bagdad du IXe siècle.
        </p>
        <p className="prix2">
            le prix de départ :  <span>50 $US</span>
        </p>
        <div className="btnAchete2">
            ACHETER MAINTENANT
        </div>
    </div>
   </div></>
   }