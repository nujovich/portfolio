export function Projects() {

    return(
        <section id="projects">
        <h2 className="project-title">Proyectos</h2>
        <div className="projects-container">
            <h3>Advice Generator Application</h3>
            <img className="project-image" src="../portfolio/assets/images/advice-generator-app.PNG"/>
            <p>Aplicación generadora de consejos. Hecho con Vanilla JS, Vite, CSS y HTML5</p>
            <div className="buttons">
              <button className="code-button" title="Browse GitHub Code" onClick={() => window.location ='https://github.com/nujovich/advice-generator-app'}>
                <iconify-icon icon="fa-solid:code" width="40" height="40"></iconify-icon>
              </button>
              <button className="demo-button" title="See Live Demo" onClick={() => window.location = 'https://advice-generator-app-ebon.vercel.app/'}>
                <iconify-icon icon="ic:baseline-live-tv" width="40" height="40"></iconify-icon>
              </button>
            </div>
        </div>
      </section>
    )
}