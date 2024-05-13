import './BannerStyle.css';


// IMAGENS
import PrincipalB from '../../assets/imgs/Banners/principal.svg';

const BannerPrincipal = () => {
  return (
<>

    <div id="container-principal-banner">

        <div className="banner-left-text">

            <div className='text-title'>
                <h1>
                    Protegendo o Ambiente: Confie na Serquip para a Gestão de Resíduos!
                </h1>
            </div>

                <div className='text-description'>
                    <p>
                        Precisa lidar com os resíduos do seu negócio de forma responsável? A Serquip está aqui para ajudar.
                        <br /> <br />
                        Nossa equipe especializada e tecnologia avançada garantem o tratamento adequado dos seus resíduos. Oferecemos soluções personalizadas, desde a coleta até o tratamento avançado, para tornar sua empresa mais sustentável.
                        <br /> <br />
                        Entre em contato conosco hoje mesmo e descubra como podemos fazer a diferença para o seu negócio e para o meio ambiente.
                    </p>
                </div>

                        <div className='banner-btn'>
                            <button>Conheça nossas soluções</button>
                        </div>
        </div>

            <div className="banner-right-img">
                <img src={PrincipalB} alt="" />
            </div>
    </div>


</>
  )
}

export default BannerPrincipal;
