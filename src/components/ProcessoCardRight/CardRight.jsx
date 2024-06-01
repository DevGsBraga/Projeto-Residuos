import './CardRight.css';



// eslint-disable-next-line react/prop-types
const CardRight = ({texto, imgRef}) => {
  return (
    <div id='container-card-right'>
        <div className='card-right-description'>
          <h2>Processo de Coleta</h2>
            <p>
                {texto}
            </p>
        </div>



        <div>
            <img className='card-right-img' src={imgRef} alt="" />
        </div>
    </div>
  )
}

export default CardRight
