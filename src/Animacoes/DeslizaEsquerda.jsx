import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react"


// eslint-disable-next-line react/prop-types
const DeslizaEsquerda = ({children}) => {

    useEffect(() => {
        Aos.init()
    },[])
  return (
    <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }}
        data-aos="fade-left" data-aos-easing="linear" data-aos-delay="450" // animação
    >
        {children}
    </div>
  )
}

export default DeslizaEsquerda
