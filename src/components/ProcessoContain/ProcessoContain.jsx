import './ProcessoContain.css';

import CardRight from '../ProcessoCardRight/CardRight';
import CardLeft from '../ProcessoCardLeft/CardLeft';

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



            <CardLeft title={'Processo de Tratamento'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto.'} imgRef={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA04dudgwb63uQlmyTpmJr92nyMRSHin01Tg&s'} />




            {/* CARDS TEMPORARIOS */}
            <CardRight
            texto={
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto.'
            }
            imgRef={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_od2-fFDC6l1qiorA9QoqoWeJ8eXnqlLneQ&usqp=CAU'
                } />


            <CardLeft title={'Processo de Tratamento'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto.'} imgRef={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA04dudgwb63uQlmyTpmJr92nyMRSHin01Tg&s'} />



            {/* FIM */}
       </div>



</>
  )
}

export default ProcessoContain
