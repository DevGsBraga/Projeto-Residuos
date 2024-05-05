import './NavBarStyle.css';  // CSS DO COMPONENT

import { Link } from 'react-router-dom';

// IMAGEM DA LOGO DO SITE
import imgLogo from '../../assets/imgs/logoSite.svg';




const NavBar = () => {
  return (
    <div className='container-navBar'>

        <div className='navBar-logo-container'>
            <img src={imgLogo} alt="" />
        </div>

                <div className='navBar-list-link'>
                        <ul className='link-container'>

                            <Link className='gp-navBar-link' to={'/'}>
                                Sobre
                            </Link>

                            <Link className='gp-navBar-link' to={'/'}>
                                Nossas soluções
                            </Link>

                            <Link className='gp-navBar-link' to={'/'}>
                                Contato
                            </Link>

                            <Link className='gp-navBar-link' to={'/'}>
                                Orçamento
                            </Link>

                            <Link className='gp-navBar-link' to={'/'}>
                                Política ambiental
                            </Link>
                        </ul>
                </div>
    </div>
  )
}

export default NavBar;

