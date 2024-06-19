import React from 'react';
import myphoto from './KaikiLima.png';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import './HomePage.css'



const HomePage = () => {

    const screen = window.screen.width
    console.log(screen)
    
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Desenvolvedor Front-End", "Acadêmico de ADS", "Estudante Full-Stack", "UI/UX Designer", "Profissional de TI"],
            typeSpeed: 50,
            backSpeed: 35,
            backDelay: 1000,
            loop: true
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []
    );


    const action_menu = () => {
        
        if (screen <= '768') {
        
            
            const menu_animation = () => {
                const box_after_click_menu = window.document.getElementById("clickedDiv");
    
            
                box_after_click_menu.style.animation = '1.25s menu_div'
                box_after_click_menu.style.transition = "all 2s"
    
            }
    
            const menu_clicked = () => {
                const box_after_click_menu = window.document.getElementById("clickedDiv");
                const main_id = window.document.getElementById("main-id");
                const header_id = window.document.getElementById("header-id");
    
                console.log(box_after_click_menu)
                box_after_click_menu.style.display = 'flex';
                box_after_click_menu.style.position = 'absolute';
                box_after_click_menu.style.zIndex = '1'
                main_id.style.zIndex = '0'
                header_id.style.zIndex = '0'
                box_after_click_menu.style.transition = "all 2s"
    
                menu_animation()
            }
    
            menu_clicked()
        }
    
    }
    
    return(
        <>
            
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            
            <div id='clickedDiv' className='box-after-menu'>
                <Link to="/" className="active links-menu">Home</Link>
                <Link to="/About" className='links-menu'>About me</Link>
                <Link to="/" className='links-menu'>Soft/Hard Skills</Link>
                <Link to="/Projects" className='links-menu'>Projects</Link>
                <Link to="/Contact" className='links-menu'>Contact</Link>
            </div>
            
            <main id='main-id' className='body-Welcome'>

                <header id='header-id' className="header-home-page">
                    <a target='_blank' rel = "noopener noreferrer"  href="https://github.com/KaikiWilson" className="logo">@Kaikilima.Dev</a>

                    <nav className="navbar">
                    
                        <span onClick={action_menu} id='menu-button' className='material-symbols-outlined menu-home-page'>menu</span>

                        <Link to="/" className="active">Home</Link>
                        <Link to="/About">About me</Link>
                        <Link to="/">Soft/Hard Skills</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/Contact">Contact</Link>
                    </nav>
                </header>

                <section className="home">

                    <div className="home-img">
                        <img src={myphoto} alt='KaikiLima'/>
                    </div>

                    <div className="home-content">
                        <h3 className='hello-i-am-the'>Olá! Eu sou o</h3>
                        <h1>Kaiki Wilson</h1>
                        <h3 className='hello-i-am-the'>Apenas um <span ref={el}></span></h3>
                        <p>Sou apaixonado por desenvolver soluções web utilizando as mais diversas ferramentas atuais do mercado, como em ReactJS/ReactTS e NextJS, além de preservar as boas práticas do processo de construção da aplicação, utilizando-se de Metodologias Ágeis que estão em constante crescimento e que estão também se aperfeiçoando todos os dias.</p>
                                
                                <div className="social-media">
                                    <a target='_blank' rel = "noopener noreferrer" href="https://www.instagram.com/dev_okaijr/"><i className='bx bxl-instagram-alt' ></i></a>
                                    <a target='_blank' rel = "noopener noreferrer" href="https://www.linkedin.com/in/kaikiwilson/"><i className='bx bxl-linkedin-square' ></i></a>
                                    <a target='_blank' rel = "noopener noreferrer" href="https://github.com/KaikiWilson"><i className='bx bxl-github' ></i></a>
                                </div>

                                <button className="btn">
                                    <a target='_blank' rel = "noopener noreferrer" href='/Profile.pdf' download="Kaikiwilson-resume">Meu curriculo digital</a>
                                </button>
                    </div>
                </section>
                

                <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
            </main>
        </>
    );
}


export default HomePage;