import './NavBarStyle.css';  // CSS DO COMPONENT

import { Link } from 'react-router-dom';

// IMAGEM DA LOGO DO SITE
import imgLogo from '../../assets/imgs/logoSite.svg';
import { useEffect } from 'react';




const NavBar = () => {




    useEffect(() => {
        
        // Adiciona classe ao body quando a barra de navegação atinge o topo da página para deixar ela fixa
        const handleScroll = () => {
            const navBar = document.querySelector('.container-navBar');
            if (window.scrollY > 0) {
                navBar.classList.add('navBar-fixed');
            } else {
                navBar.classList.remove('navBar-fixed');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);







  return (
    <div className='container-navBar navBar-fixed'>

        <div className='navBar-logo-container'>
            <img src={imgLogo} alt="" />
        </div>

                <div className='navBar-list-link'>
                        <ul className='link-container'>

                            <li>
                                <Link className='gp-navBar-link' to={'/'}>
                                    Sobre
                                </Link>
                            </li>

                            <li>
                                <Link className='gp-navBar-link' to={'/'}>
                                    Nossas soluções
                                </Link>
                            </li>

                            <li>
                                <Link className='gp-navBar-link' to={'/'}>
                                    Contato
                                </Link>
                            </li>

                            <li>
                                <Link className='gp-navBar-link' to={'/'}>
                                    Orçamento
                                </Link>
                            </li>

                            <li>
                            <Link className='gp-navBar-link' to={'/'}>
                                Política ambiental
                            </Link>
                            </li>
                        </ul>
                </div>
    </div>
  )
}

export default NavBar;

