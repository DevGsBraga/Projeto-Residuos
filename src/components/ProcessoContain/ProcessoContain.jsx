import './ProcessoContain.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';

import CardRight from '../ProcessoCardRight/CardRight';
import CardLeft from '../ProcessoCardLeft/CardLeft';
import DeslizaEsquerda from '../../Animacoes/DeslizaEsquerda';
import { DeslizaDireita } from '../../Animacoes/DeslizaDireita';
import { DeslizaBaixo } from '../../Animacoes/DeslizaBaixo';


const ProcessoContain = () => {

// ANIMAÇÃO DE SCROLL
    useEffect(() => {
        Aos.init()
    },[])

  return (
<>
       <div id="processo_contain" >
        <DeslizaBaixo>
            
            <div className='processo-title'>
                <span className='title-span'>Conheça nosso Processo</span>
            </div>

        </DeslizaBaixo>






            <DeslizaEsquerda> {/* ANIMAÇÃO    */}


            <CardRight
                texto={
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto.'
                }
                imgRef={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_od2-fFDC6l1qiorA9QoqoWeJ8eXnqlLneQ&usqp=CAU'
                    } />


            </DeslizaEsquerda>




            <DeslizaDireita>

                <CardLeft title={'Processo de Tratamento'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto.'} imgRef={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA04dudgwb63uQlmyTpmJr92nyMRSHin01Tg&s'} />

            </DeslizaDireita>




            <DeslizaEsquerda>

            <CardRight
                    texto={
                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto.'
                    }
                    imgRef={
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_od2-fFDC6l1qiorA9QoqoWeJ8eXnqlLneQ&usqp=CAU'
                        } />

            </DeslizaEsquerda>



            {/* CARDS TEMPORARIOS */}
            <DeslizaDireita>

                <CardLeft title={'Processo de Tratamento'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est quas! Mollitia id veritatis cupiditate a corporis maxime velit, aliquid quas ducimus nobis incidunt optio blanditiis cum quos consectetur architecto.'} imgRef={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA04dudgwb63uQlmyTpmJr92nyMRSHin01Tg&s'} />

            </DeslizaDireita>




            {/* FIM */}
       </div>

</>
  )
}

export default ProcessoContain
