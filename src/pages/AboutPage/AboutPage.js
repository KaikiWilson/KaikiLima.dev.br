import './About.css'
import htmlimg from './img/html.png'
import cssimg from './img/css.png'
import javascriptimg from './img/javascript.png'
import nodejsimg from './img/nodejs.png'
import reactimg from './img/react.png'
import sqlimg from './img/sql.png'


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
            box_first_h1.style.animation = '1.5s left-slide-out'
            box_who_i_am.style.animation = '1.5s right-slide-out'
            box_bottom_content.style.animation = '1.75s top-slide-out'
            btn.style.animation = '1.25s fade-out'
    
            setTimeout(set_display, 1740)
        }
    
        animations();
    
        setTimeout(show_content, 1750)
    };

    return(
        <main className='Main-About' id='mainheight'>
            <div id="box-h1-princ-id" className="box-h1-princ">
                <div id="box-first-h1-id" className="box-first-h1">
                    <h1 className="first-h1">Afinal...</h1>
                </div>

                <div id="box-who-i-am-id" className="box-who-i-am">
                    <h1 className="who-i-am">Quem sou eu?</h1>
                </div>
            </div>

            <div id="box-bottom-content-id" className="box-bottom-content">
                <button onClick={explorer} id="btn-explorer" type="button">Descubra...</button>
            </div>

            <h1 id="about-me-title-id" className="about-me-title">Sobre mim</h1>

            <h2 id="about-me-subtitle-id" className="about-me-subtitle"> Como dito anteriormente, meu nome é <span className="span-subtitle">Kaiki Wilson</span> e eu sou um <span className="span-subtitle">Desenvolvedor Front-End</span>.</h2>
            
            <div id="box-about-me-content-id" className="box-about-me-content">
                <span className="about-me-content">Além do conhecimento <span className="span-content">Back-end</span>, tenho dominio e habilidades sólidas em desenvolvimento web <span className="span-content">Fron-End</span>,
                sempre focando em desenvolver com todas as <span className="span-content">boas práticas</span>, bem como os métodos de <span className="span-content">SEO </span>
                obtendo o melhores resultados na sua aplicação. Como também, não deixando de lado a <span className="span-content">acessibilidade</span> da página para os todos os usuários visitantes.</span>
            </div>

            <section id="title-cards-id" className="title-cards">Tecnologias que tenho conhecimento</section>

            <div id="container-id" className="container">
                
                <div className="cards">
                    <div className="box-img">
                        <img src={htmlimg} />
                    </div>
                    <h1>Html5</h1>
                </div>

                <div className="cards">
                    <div className="box-img">
                        <img src={cssimg} />
                    </div>
                    <h1>Css3</h1>
                </div>

                <div className="cards">
                    <div className="box-img">
                        <img src={javascriptimg} />
                    </div>
                    <h1>Javascript</h1>
                </div>

            </div>

            <div id="container-2-id" className="container">
                
                <div className="cards">
                    <div className="box-img">
                        <img src={reactimg} />
                    </div>
                    <h1>React</h1>
                </div>

                <div className="cards">
                    <div className="box-img">
                        <img src={nodejsimg} />
                    </div>
                    <h1>NodeJS</h1>
                </div>

                <div className="cards">
                    <div className="box-img">
                        <img src={sqlimg} />
                    </div>
                    <h1>SQL</h1>
                </div>

            </div>

        </main>
    )
}

export default AboutPage;