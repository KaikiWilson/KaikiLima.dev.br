import './About.css'
import htmlimg from './img/html.png'
import cssimg from './img/css.png'
import javascriptimg from './img/javascript.png'
import nodejsimg from './img/nodejs.png'
import reactimg from './img/react.png'
import sqlimg from './img/sql.png'
import { Link } from 'react-router-dom'


const AboutPage = () => {

    const explorer = () => {
        const box_h1_princ = window.document.getElementById("box-h1-princ-id");
        const box_first_h1 = window.document.getElementById("box-first-h1-id");
        const box_who_i_am = window.document.getElementById("box-who-i-am-id");
        const box_bottom_content = window.document.getElementById("box-bottom-content-id");
        const btn = window.document.getElementById("btn-explorer");
        const title_cards = window.document.getElementById("title-cards-id");
        const mainheight = window.document.getElementById("mainheight");

        const title = window.document.getElementById("about-me-title-id");
        const subtitle = window.document.getElementById("about-me-subtitle-id");
        const box_about_me_content = window.document.getElementById("box-about-me-content-id");
        const container = window.document.getElementById("container-id");
    
        const container2 = window.document.getElementById("container-2-id");
    
        const show_content = () => {
            if (btn.style.display === "none") {
                title.style.display = 'block'
                subtitle.style.display = 'block'
                box_about_me_content.style.display = 'flex'
                container.style.display = 'flex'
                container2.style.display = 'flex'
                title_cards.style.display = 'flex'
                mainheight.style.minHeight = '150vh'
                mainheight.style.overflow = 'auto'
    
                title.style.animation = '1.25s top-slide-in'
                subtitle.style.animation = '1.25s fade-in'
                box_about_me_content.style.animation = '1.25s bottom-slide-in'
                container.style.animation = '2.25s bottom-slide-in'
                container2.style.animation = '6s bottom-slide-in'
                title_cards.style.animation = '2s bottom-slide-in'
            }
    
        }
    
        const set_display = () => {
            box_h1_princ.style.display = 'none'
            box_first_h1.style.display = 'none'
            box_who_i_am.style.display = 'none'
            box_bottom_content.style.display = 'none'
            btn.style.display = 'none'
            
        }
        
        const animations = () => {
            box_h1_princ.style.animation = '1.75s top-slide-out'
            box_first_h1.style.animation = '1.75s top-slide-out'
            box_who_i_am.style.animation = '1.75s top-slide-out'
            box_bottom_content.style.animation = '1.75s top-slide-out'
            btn.style.animation = '1.25s fade-out'
    
            setTimeout(set_display, 1740)
        }
    
        animations();
    
        setTimeout(show_content, 1750)
    };

    return(
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <main className='Main-About' id='mainheight'>
                <div id="box-h1-princ-id" className="box-h1-princ">
  
                </div>

                <div id="box-first-h1-id" className="box-first-h1">
                        <h1 className="first-h1">Afinal...</h1>
                </div>

                <div id="box-who-i-am-id" className="box-who-i-am">
                        <h1 className="who-i-am">Quem sou eu?</h1>
                </div>



                <div id="box-bottom-content-id" className="box-bottom-content">
                    <button onClick={explorer} id="btn-explorer" type="button">Descubra...</button>
                </div>

                <Link to="/" className="active-projects-page">
                    <span id='home-button-to-back-about-page' className="material-symbols-outlined">
                        home
                    </span>
                </Link>

                <h1 id="about-me-title-id" className="about-me-title">Sobre mim</h1>

                <h2 id="about-me-subtitle-id" className="about-me-subtitle"> Como dito anteriormente, meu nome é <span className="span-subtitle">Kaiki Wilson</span> e eu sou um <span className="span-subtitle">Desenvolvedor Front-End</span>.</h2>
                
                <div id="box-about-me-content-id" className="box-about-me-content">
                    <span className="about-me-content">Além do conhecimento em <span className="span-content">Back-end</span>, tenho dominio e habilidades sólidas em desenvolvimento web <span className="span-content">Fron-End</span>,
                    pensando primordialmente em desenvolver utilizando-se de todas as <span className="span-content">boas práticas</span> atuais, como também os métodos de <span className="span-content">SEO </span>
                    com a finalidade de obter os melhores resultados de <span className="span-content">pesquisa</span> e de <span className="span-content">acessos</span> da sua aplicação. Além do mais, não podemos esquecer da grandiosa <span className="span-content">acessibilidade</span> da página para todos os usuários visitantes, fazendo com que seu website se torne um lugar acessivel para <span className="span-content">todos</span>.</span>
                </div>

                <section id="title-cards-id" className="title-cards">Tecnologias que tenho conhecimento</section>

                <div id="container-id" className="container">
                    
                    <div className="cards">
                        <div className="box-img">
                            <img src={htmlimg} alt='imagem do icone html'/>
                        </div>
                        <h1>Html5</h1>
                    </div>

                    <div className="cards">
                        <div className="box-img">
                            <img src={cssimg} alt='imagem do icone css' />
                        </div>
                        <h1>Css3</h1>
                    </div>

                    <div className="cards">
                        <div className="box-img">
                            <img src={javascriptimg} alt='imagem do icone javascript' />
                        </div>
                        <h1>Javascript</h1>
                    </div>

                </div>

                <div id="container-2-id" className="container">
                    
                    <div className="cards">
                        <div className="box-img">
                            <img src={reactimg} alt='imagem do icone React' />
                        </div>
                        <h1>React</h1>
                    </div>

                    <div className="cards">
                        <div className="box-img">
                            <img src={nodejsimg} alt='imagem do icone NodeJs' />
                        </div>
                        <h1>NodeJS</h1>
                    </div>

                    <div className="cards">
                        <div className="box-img">
                            <img src={sqlimg} alt='imagem do icone SQL' />
                        </div>
                        <h1>SQL</h1>
                    </div>

                </div>

            </main>

            <footer className='footer-aboutpage'>
                <h3 className='footer-text-aboutpage'>Development with 💚 by<span className='kaiki-name-footer-aboutpage'>Kaikiwilson.dev</span></h3>
            </footer>
        </>
    )
}

export default AboutPage;