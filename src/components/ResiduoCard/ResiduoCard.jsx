import './ResiduoCard.css';

// eslint-disable-next-line no-empty-pattern, react/prop-types
const ResiduoCard = ({title, img}) => {
  return (
    <div id='container-card-residuos'>

        <span>
            {title}
        </span>
            <img className='residuo-img' src={img} alt="Icone que mostra o tipo de residuos coletados!" />
    </div>
  )
}

export default ResiduoCard
