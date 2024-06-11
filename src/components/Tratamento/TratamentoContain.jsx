import { useState } from 'react';
import './TratamentoStyle.css';


// FOTOS
import coleta from '../../assets/imgs/TratamentoImgs/Coleta.gif'
import truck from '../../assets/imgs/TratamentoImgs/truck.gif'
import recicle from '../../assets/imgs/TratamentoImgs/recicle.gif'
import planta from '../../assets/imgs/TratamentoImgs/planta.gif'

const TratamentoContain = () => {

const [alturaDescription, setAlturaDescription] = useState(false);
const [transporte, settransporte] = useState(false);
const [tratamento, setTratamento] = useState(false);
const [final, setFinal] = useState(false);


// FUNÇÕES DE CLICKS PARA AUMENTAR A ALTURA DAS DIVS
const funcaoDeClick = () => {
  setAlturaDescription(!alturaDescription)
}

const transporteAltura = () => {
  settransporte(!transporte)

}

const tratamentoAltura = () => {
  setTratamento(!tratamento)

}

const finalAltura = () => {
  setFinal(!final)
}








  return (
<>

<div className="container__tratamento">



    <div className='title-residuos'>

      <div className="residuos__gestao">
        <span>Gestão de <b style={{ color: '#006D2E' }}>Resíduos</b></span>
      </div>


        <span>
          O tratamento de resíduos é essencial na gestão ambiental, buscando reduzir impactos negativos da produção de lixo. Envolve coleta seletiva, compostagem, incineração e reciclagem. Esses processos visam minimizar resíduos em aterros sanitários, promover a sustentabilidade e preservar o meio ambiente.
        </span>
    </div>



        <div className="tratamento__processo">

            <div className="processo__title" >
              <h3 onClick={funcaoDeClick}>Coleta</h3>

              <div className={alturaDescription ? "processo__description expanded" : "processo__description"}>
                  <div>
                    <img src={coleta} alt="" />
                  </div>

                      A coleta de resíduos é o primeiro passo crucial no processo de gestão de resíduos. <br /> Nossa empresa se dedica a oferecer serviços de coleta eficientes e confiáveis para garantir que os resíduos sejam removidos de forma adequada e segura. <br /> Utilizamos técnicas e equipamentos modernos para coletar uma ampla variedade de resíduos, desde resíduos domésticos até resíduos industriais, sempre com o compromisso de preservar o meio ambiente e a saúde pública.

              </div>

            </div>



      {/* DIV TRANSPORTE */}

                  <div className="processo__title__transporte" >
                    <h3 onClick={transporteAltura}>Transporte</h3>
                    <div className={transporte ? "processo__description expanded" : "processo__description"}>
                      <div>
                          <img src={truck} alt="" />
                      </div>
                      Após a coleta, é essencial garantir o transporte seguro e adequado dos resíduos para suas destinações finais. Nosso serviço de transporte de resíduos é realizado por profissionais qualificados e equipados com veículos especializados, seguindo rigorosos padrões de segurança e regulamentações ambientais. Priorizamos a eficiência logística e a pontualidade para garantir que os resíduos sejam entregues de forma rápida e responsável.
                    </div>

                  </div>

      {/* FIM */}


      {/* DIV TRATAMENTO */}

      <div className="processo__title__tratamento" >

          <h3 onClick={tratamentoAltura}>Tratamento</h3>
              <div className={tratamento ? "processo__description expanded" : "processo__description"} >

                  <div>
                    <img src={recicle} alt="" />
                  </div>
               O tratamento de resíduos é uma etapa fundamental no processo de gestão de resíduos, visando minimizar seu impacto ambiental e maximizar sua recuperação e reciclagem. <br /> <br /> Nossa empresa emprega tecnologias avançadas de tratamento de resíduos, incluindo processos físicos, químicos e biológicos, para transformar os resíduos de forma segura e sustentável.
              </div>

      </div>


      {/* FIM */}


      {/* DIV DESTINAÇÃO FINAL */}

          <div className="processo__title__destinacao" >

              <h3 onClick={finalAltura}>Destinação Final</h3>
                  <div className={final ? "processo__description expanded" : "processo__description"}>

                  <div>
                    <img src={planta} alt="" />
                  </div>

                    Quando os resíduos não podem ser reciclados ou tratados de outras maneiras, a destinação final em aterros sanitários é uma opção segura e regulamentada.
                    Nossa empresa opera aterros modernos e ambientalmente responsáveis, projetados para minimizar os impactos negativos no solo, na água e no ar. Seguimos todas as normas e regulamentações locais e nacionais para garantir a segurança e a integridade dos aterros, protegendo assim o meio ambiente e a saúde pública a longo prazo.
                  </div>

          </div>




      {/* FIM */}






        </div>





















</div>
</>
  )
}

export default TratamentoContain
