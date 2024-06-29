import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";

// eslint-disable-next-line react/prop-types
export const FlipEsquerda = ({children, time}) => {

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
        data-aos="flip-left" data-aos-easing="linear" data-aos-delay={time}  // animação
    >
        {children}
    </div>
  )
}
