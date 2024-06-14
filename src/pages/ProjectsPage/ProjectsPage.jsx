import './ProjectsPage.css';
import { Link } from 'react-router-dom';




const ProjectsPage = () => {
    return (
        <>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <main className='main-projects-page'>
                
                <sidebar className='sidebar-projects-page'>
                    <Link to="/" className="active">
                        <span class="material-symbols-outlined home-icon">
                            home
                        </span>
                    </Link>
                </sidebar>

                <section className='section-box'>
                    <div className='box-my-projects'>
                        <h1 className='my-projects'>Meus projetos</h1>
                    </div>

                    <div className='grid-projects'>
                        <div className='projects-card'></div>
                        <div className='projects-card'></div>
                        <div className='projects-card'></div>
                        <div className='projects-card'></div>
                        <div className='projects-card'></div>
                        <div className='projects-card'></div>
                        <div className='projects-card'></div>
                        <div className='projects-card'></div>
                        <div className='projects-card'></div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ProjectsPage;