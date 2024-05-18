import './About.css'


const AboutPage = () => {

    const explorer = () => {
        const box_h1_princ = window.document.getElementById("box-h1-princ-id");
        const box_first_h1 = window.document.getElementById("box-first-h1-id");
        const box_who_i_am = window.document.getElementById("box-who-i-am-id");
        const box_bottom_content = window.document.getElementById("box-bottom-content-id");
        const btn = window.document.getElementById("btn-explorer");
        const title_cards = window.document.getElementById("title-cards-id");
    
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
        <main class='Main-About'>
            <div id="box-h1-princ-id" class="box-h1-princ">
                <div id="box-first-h1-id" class="box-first-h1">
                    <h1 class="first-h1">In the end...</h1>
                </div>

                <div id="box-who-i-am-id" class="box-who-i-am">
                    <h1 class="who-i-am">Who am I??</h1>
                </div>
            </div>

            <div id="box-bottom-content-id" class="box-bottom-content">
                <button onClick={explorer} id="btn-explorer" type="button">Discover...</button>
            </div>

            <h1 id="about-me-title-id" class="about-me-title">About me</h1>

            <h2 id="about-me-subtitle-id" class="about-me-subtitle"> As previously stated, my name is <span class="span-subtitle">Kaiki Wilson</span> and I'm a developer <span class="span-subtitle">Full-Stack</span>.</h2>
            
            <div id="box-about-me-content-id" class="box-about-me-content">
                <span class="about-me-content">In addition to knowledge of <span class="span-content">Back-end</span> em aplicações Web, tenho dominio da parte de <span class="span-content">Front-End web development</span>,
                always focusing on developing with all <span class="span-content">Good habits</span>, as well as the methods of <span class="span-content">SEO</span>
                obtaining the best result <span class="span-content">accessibility</span> of the page to interested users.</span>
            </div>

            <section id="title-cards-id" class="title-cards">TECNOLOGIAS QUE TENHO CONHECIMENTO</section>

            <div id="container-id" class="container">
                
                <div class="cards">
                    <div class="box-img">
                        <h1>HTML</h1>
                    </div>
                    <h1>Html5</h1>
                </div>

                <div class="cards">
                    <div class="box-img">
                    <h1>CSS3</h1>
                    </div>
                    <h1>Css3</h1>
                </div>

                <div class="cards">
                    <div class="box-img">
                    <h1>JS</h1>
                    </div>
                    <h1>Javascript</h1>
                </div>

            </div>

            <div id="container-2-id" class="container">
                
                <div class="cards">
                    <div class="box-img">
                    <h1>react</h1>
                    </div>
                    <h1>React</h1>
                </div>

                <div class="cards">
                    <div class="box-img">
                    <h1>NodeJS</h1>
                    </div>
                    <h1>NodeJS</h1>
                </div>

                <div class="cards">
                    <div class="box-img">
                    <h1>SQL</h1>
                    </div>
                    <h1>SQL</h1>
                </div>

            </div>

        </main>
    )
}

export default AboutPage;