export function Projects() {
    return(
        <section id="projects">
        <h2 className="project-title">Proyectos</h2>
        <div className="projects-container">
          <div className="project-container--project1">
            <h3>Lorem.</h3>
            <img className="project-image" src="/src/assets/images/banner_3.jpg"/>
            <div className="buttons">
              <button className="code-button" title="Browse GitHub Code">
                <iconify-icon icon="fa-solid:code" width="40" height="40"></iconify-icon>
              </button>
              <button className="demo-button" title="See Live Demo">
                <iconify-icon icon="ic:baseline-live-tv" width="40" height="40"></iconify-icon>
              </button>
            </div>
          </div>
          <div className="project-container--project2">
            <h3>Lorem.</h3>
            <img className="project-image" src="/src/assets/images/banner_3.jpg"/>
            <div className="buttons">
              <button className="code-button" title="Browse GitHub Code">
                <iconify-icon icon="fa-solid:code" width="40" height="40"></iconify-icon>
              </button>
              <button className="demo-button" title="See Live Demo">
                <iconify-icon icon="ic:baseline-live-tv" width="40" height="40"></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}