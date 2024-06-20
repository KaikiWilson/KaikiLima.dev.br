import { Link } from 'react-router-dom';
import './ContactPage.css'

const ContactPage = () => {
    
    
    return(
    <>
        <link href="https://fonts.cdnfonts.com/css/nexa-bold" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                

        <div className="main-contactpage">
            
            <div className='centralize-content'>
                <div className="header-form">
                    <h1 id='title-form'>Entre em contato<br/>com o <strong>Kaiki Lima</strong></h1>
                    <br/>
                    <span id='span-after-title'>Irei responder você o mais rápido possível <br/>para que possamos tratar do que for necessário<br/> estando 24h disponível.
                    </span>
                </div>

                <div className="content-form">
                    <div className='content-contact'>

                        <section id='section-contactpage'>

                            <h2 className='data-content-h2' for="name">Nome</h2>
                                <h3 className='data-content'>Kaiki Lima</h3><br/>

                            <h2 className='data-content-h2' for="email">Email</h2>
                                <h3 className='data-content' type="email" id="email" name="email">kaikiwilson.contato@gmail.com</h3><br/>

                            <h2 className='data-content-h2' for="telefone">Telefone Celular</h2>
                                <h3 className='data-content' type="tel" id="telefone" name="telefone">85 99408-0643</h3><br/>

                            <h2 className='data-content-h2' for="linkedin">Linkedin</h2>
                                <a href='https://www.linkedin.com/in/kaikiwilson' target='_blank' rel = "noopener noreferrer" className='data-content-a' type="text" id="linkedin" name="linkedin">{'<'}Clique para acessar{'>'}</a><br/>

                            <h2 className='data-content-h2' for="instagram">Instagram</h2>
                                <a href='https://www.instagram.com/kaikiwilson.dev/' className='data-content-a' target='_blank' rel = "noopener noreferrer" type="text" id="instagram" name="instagram">{'<'}Clique para acessar{'>'}</a>

                        </section>

                    </div>
                </div>

                <div className="button-to-contact">
                    <a target='_blank' rel = "noopener noreferrer" className='enter-to-contact' href='https://wa.me/+5585994080643'>
                        Entrar em contato <span id='arrow-right' class="material-symbols-outlined">mark_chat_unread</span>
                    </a>
                </div>
            </div>


            <div className='box-absolute-home'>
                <Link to="/" className="active-projects-page">
                        <span id='contact-button-to-back-about-page' className="material-symbols-outlined">
                            home
                        </span>
                </Link>
            </div>

        </div>

        <footer className='footer-contactpage'>
                <h3 className='footer-text'>Development with 💚 by<span className='kaiki-name-footer'>Kaikiwilson.dev</span></h3>
        </footer>
    </>
    );
};

export default ContactPage;