import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";

// eslint-disable-next-line react/prop-types
export const FlipDireita = ({children}) => {

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
        data-aos="flip-right" data-aos-easing="linear" data-aos-delay='250'  // animação
    >
        {children}
    </div>
  )
}
