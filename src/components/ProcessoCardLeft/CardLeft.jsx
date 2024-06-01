import './CardLeft.css';

// eslint-disable-next-line react/prop-types, no-unused-vars
const CardLeft = ({imgRef, title, description}) => {
  return (
    <div id='container-card-left'>
    <div>
        <img className='card-left-img' src={imgRef} alt="" />
    </div>


    <div className='card-left-description'>
      <h2>{title}</h2>
        <p>
            {description}
        </p>
    </div>



</div>
  )
}

export default CardLeft
