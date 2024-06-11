import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";

// eslint-disable-next-line react/prop-types
export const DeslizaBaixo = ({children}) => {

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
        data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" // animação
    >
        {children}
    </div>
  )
}
