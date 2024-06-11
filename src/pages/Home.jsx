import BannerPrincipal from "../components/BannerPrincipal/BannerPrincipal";
import NavBar from "../components/NavBar/NavBar";
import ProcessoContain from "../components/ProcessoContain/ProcessoContain";
import TiposResiduos from "../components/TiposResiduos/TiposResiduos";
import TratamentoContain from "../components/Tratamento/TratamentoContain";
import SobreContain from "../components/Sobre/SobreContain";


const Home = () => {
  return (
    <>
        <NavBar />
          <BannerPrincipal />
            <TratamentoContain />
              <TiposResiduos />
              <ProcessoContain />



        <SobreContain />










    </>
  )
}

export default Home;
