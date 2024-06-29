import { useState } from 'react';
import './ResiduoCard.css';



// eslint-disable-next-line no-empty-pattern, react/prop-types
const ResiduoCard = ({title, img}) => {
  const [sobreporDiv, setSobrepoDiv] = useState(false);

      function mudarDivResiduos() {
        setSobrepoDiv(true)
      }










  return (



    <div id='container-card-residuos' onClick={mudarDivResiduos}>

        <span>
            {title}
        </span>
            <img className='residuo-img' src={img} alt="Icone que mostra o tipo de residuos coletados!" />

            {sobreporDiv && (
              <div id='container-sobreposto'>
                <h1>Texto explicando de forma breve cada residuo</h1>
              </div>
            )}
    </div>



  )
}

export default ResiduoCard
