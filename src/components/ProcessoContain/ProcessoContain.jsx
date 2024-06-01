import './ProcessoContain.css';

import CardRight from '../ProcessoCardRight/CardRight';

const ProcessoContain = () => {
  return (
<>
       <div id="processo_contain">
            <div className='processo-title'>
                <span className='title-span'>Conheça nosso Processo</span>
            </div>
            <CardRight
            texto={
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto.'
            }
            imgRef={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_od2-fFDC6l1qiorA9QoqoWeJ8eXnqlLneQ&usqp=CAU'
                } />

       </div>



</>
  )
}

export default ProcessoContain
