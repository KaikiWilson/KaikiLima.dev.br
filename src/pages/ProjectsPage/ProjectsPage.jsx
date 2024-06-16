import Cards from '../../Components/ProjectsPage/Cards';
import './ProjectsPage.css';
import { Link } from 'react-router-dom';
import folderIcon from './img/folder-svg.svg' 
import homeIcon from './img/home-svg.svg'
import reportIcon from './img/report-svg.svg'
import trophyIcon from './img/trophy-svg.svg'
import aplicationIcon from './img/application-svg.svg'




const ProjectsPage = () => {
    return (
        <>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <main className='main-projects-page'>
                
                <aside className='sidebar-projects-page'>
                    <Link to="/" className="active-projects-page">
                        <span className="material-symbols-outlined home-icon">
                            home
                        </span>
                    </Link>
                </aside>

                <section className='section-box'>
                    <div className='box-my-projects'>
                        <h1 className='my-projects'>Meus projetos</h1>
                    </div>

                    <div className='grid-projects'>
                        <Cards 
                            Url={folderIcon}
                            Title={'Card 1'}
                            ProjectDate={'14/06/2024'}
                            Skills={'lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you '}
                        />

                        <Cards 
                            Url={homeIcon}
                            Title={'Card 2'}
                            ProjectDate={'05/04/2023'}
                            Skills={'lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you '}
                        />
                        
                        <Cards 
                            Url={reportIcon}
                            Title={'Card 3'}
                            ProjectDate={'22/01/2024'}
                            Skills={'lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you '}
                        />
                        
                        <Cards 
                            Url={trophyIcon}
                            Title={'Card 4'}
                            ProjectDate={'03/03/2024'}
                            Skills={'lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you '}
                        />
                        
                        <Cards 
                            Url={aplicationIcon}
                            Title={'Card 5'}
                            ProjectDate={'30/09/2021'}
                            Skills={'lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you '}
                        />
                        
                        <Cards 
                            Url={folderIcon}
                            Title={'Card 6'}
                            ProjectDate={'27/07/2022'}
                            Skills={'lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you '}
                        />
                        
                        <Cards 
                            Url={homeIcon}
                            Title={'Card 7'}
                            ProjectDate={'14/06/2024'}
                            Skills={'lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you '}
                        />
                        
                        <Cards 
                            Url={reportIcon}
                            Title={'Card 8'}
                            ProjectDate={'14/06/2024'}
                            Skills={'lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you '}
                        />
                        
                        <Cards 
                            Url={trophyIcon}
                            Title={'Card 9'}
                            ProjectDate={'14/06/2024'}
                            Skills={'lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you lorem ipsum dolor meet you '}
                        />
                        
                    </div>
                </section>
            </main>
        </>
    );
};

export default ProjectsPage;