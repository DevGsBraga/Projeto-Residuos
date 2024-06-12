import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";

// eslint-disable-next-line react/prop-types
export const DeslizaDireita = ({children}) => {

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
        data-aos="fade-right" data-aos-easing="linear" data-aos-delay="400" // animação
    >
        {children}
    </div>
  )
}
