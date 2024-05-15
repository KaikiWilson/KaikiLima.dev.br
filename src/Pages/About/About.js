


const About = () => {
    return(
        <main>
            <div id="box-h1-princ-id" class="box-h1-princ">
                <div id="box-first-h1-id" class="box-first-h1">
                    <h1 class="first-h1">In the end...</h1>
                </div>

                <div id="box-who-i-am-id" class="box-who-i-am">
                    <h1 class="who-i-am">Who am I??</h1>
                </div>
            </div>

            <div id="box-bottom-content-id" class="box-bottom-content">
                <button onclick="explorer()" id="btn-explorer" type="button">Discover...</button>
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


export default About;