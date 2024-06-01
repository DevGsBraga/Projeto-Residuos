import ResiduoCard from '../ResiduoCard/ResiduoCard';
import './TiposResiduos.css';


// IMAGENS DOS ICONES
import hospitalar from '../../assets/icons/Residuos/hospitalar-icon.svg'

const TiposResiduos = () => {
  return (
    <>
        <div id='container-residuos'>

            {/* CONTAINER DE TITULOS */}
            <div className='residuos-title'>
               <span>
                    Quais <b style={{color: '#006D2E'}}>Resíduos</b>?
               </span>

                <p>
                    A <b style={{color: '#006D2E'}}>Serquip</b> é especializada no tratamento de diversos resíduos, passando pelos sólidos, líquidos, perigosos, químicos, eletrônicos, lâmpadas, pilhas e baterias, aerossóis e produtos inservíveis. Isto é, conosco, a sua empresa tem todas as soluções em único lugar.
                </p>
            </div>
            {/* FIM */}


            {/* CONTAINER DE TIPOS DE RESIDUOS */}
                <div className='residuos-types'>

                    <ResiduoCard title={'Hospitalar'} img={hospitalar} />
                    <ResiduoCard title={'Industrial'} img={hospitalar} />
                    <ResiduoCard title={'Clinica'} img={hospitalar} />
                    <ResiduoCard title={'Home Care'} img={hospitalar} />

                    <ResiduoCard title={'Unidade Básica de Saúde'} img={hospitalar} />
                    <ResiduoCard title={'Veterinário'} img={hospitalar} />
                    <ResiduoCard title={'Zoonoses'} img={hospitalar} />
                    <ResiduoCard title={'Clinica'} img={hospitalar} />


                </div>















        </div>
    </>
  )
}

export default TiposResiduos
