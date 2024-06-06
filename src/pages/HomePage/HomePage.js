import React from 'react';
import myphoto from './KaikiLima.png';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import './HomePage.css'



const HomePage = () => {
    
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
      }, []);
    
    return(
        <>
            
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            
            
            <main className='body-Welcome'>

                <header className="header">
                    <a target='_blank' rel = "noopener noreferrer"  href="https://github.com/KaikiWilson" className="logo">@Kaikilima.Dev</a>

                    <nav className="navbar">
                    
                        <span className='material-symbols-outlined none'>menu</span>

                        <Link to="/" className="active">Home</Link>
                        <Link to="/About">About me</Link>
                        <Link to="/">Soft/Hard Skills</Link>
                        <Link to="/">Projects</Link>
                        <Link to="/">Contact</Link>
                    </nav>
                </header>

                <section className="home">

                    <div className="home-img">
                        <img src={myphoto} alt='KaikiLima'/>
                    </div>

                    <div className="home-content">
                        <h3>Olá! Eu sou o</h3>
                        <h1>Kaiki Wilson</h1>
                        <h3>Apenas um <span ref={el}></span></h3>
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