import '../assets/Welcome.css';
import React from 'react';
import Typed from 'typed.js';
import myphoto from './img/KaikiLima.png';
import { Link } from 'react-router-dom';



const WelcomePage = () => {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Front-End Developer", "Graduating ADS", "Full-Stack Student", "UI/UX Design Student", "Professional of IT"],
            typeSpeed: 75,
            backSpeed: 100,
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
            <head>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
            </head>
            
            <body class='body-Welcome'>

                <header class="header">
                    <a href="https://github.com/KaikiWilson" class="logo">@Kaikilima.Dev</a>

                    <nav class="navbar">
                        <Link to="/" class="active">Home</Link>
                        <Link to="/About">About me</Link>
                        <Link to="/">Soft/Hard Skills</Link>
                        <Link to="/">Projects</Link>
                        <Link to="/">Contact</Link>
                    </nav>
                </header>

                <section class="home">

                    <div class="home-img">
                        <img src={myphoto} alt='KaikiLima'/>
                    </div>

                    <div class="home-content">
                        <h3>Hello! I'm</h3>
                        <h1>Kaiki Wilson</h1>
                        <h3>And i'm <span ref={el}></span></h3>
                        <p>I am passionate about developing web solutions using the most diverse current tools on the market, as well as following Good Practices and Agile Methodologies.</p>
                            <div class="social-media">
                                <a href="https://www.instagram.com/dev_okaijr/"><i class='bx bxl-instagram-alt' ></i></a>
                                <a href="https://www.linkedin.com/in/kaikiwilson/"><i class='bx bxl-linkedin-square' ></i></a>
                                <a href="https://github.com/KaikiWilson"><i class='bx bxl-github' ></i></a>
                            </div>
                            <button class="btn">
                                <a href='/Profile.pdf' rel='noopener noreferrer' download="Kaikiwilson-resume">My resume in PDF</a>
                            </button>
                    </div>
                </section>
                

                <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
            </body>
        </>
    );
}

export default WelcomePage;