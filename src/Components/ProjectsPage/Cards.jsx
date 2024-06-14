


const Cards = ({Url, Title, ProjectDate, Skills, LinkProject}) => {
    return(
        <div className='projects-card'>

            <img className="props-icons" src={Url} alt="Imagem do projeto"/>

            <div className="content-card">
                <h1>{Title}</h1>
                <h3>{ProjectDate}</h3>
                <p>{Skills}</p>
                <button className="button-card" type="button">
                    <a href={LinkProject} target="_blank" rel="noopener noreferrer">Visitar</a>
                </button>
            </div>
        </div>
    );
};

export default Cards;