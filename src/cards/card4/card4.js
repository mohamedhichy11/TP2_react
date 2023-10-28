import './cyber.css'
import cyber from './Cyberpunk-2077-Logo.png';
export default function Card4() {
    return <>
      <div className="cont4">
    <div className="card4">
        <img src={cyber} id="logo4" />
        <p className="dispo4">DISPONIBLE </p>
        <p className="textGame4">
        Dans la peau de V, mercenaire aux améliorations
         cybernétiques, plongez dans une mission d'espionnage
         intense et sauvez la présidente de l...
        </p>
        <p className="prix4">
            le prix de départ :  <span>26,99 $US</span>
        </p>
        <div className="btnAchete4">
            ACHETER MAINTENANT
        </div>
    </div>
   </div></>
}