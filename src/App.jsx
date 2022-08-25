import './App.css'

function App() {

  return (
    <div className="App">
      <header>
        <img class="logo" src="/logo.svg" />
        <input type="checkbox" id="check"/>
        <label for="check" class="show-menu">
          &#8801
        </label>
        <nav class="menu">
          <ul class="menu-items">
            <li>
              <a href="#avatar" class="menu-link">Sobre mi</a>
            </li>
            <li>
              <a href="#projects" class="menu-link">Proyectos</a>
            </li>
            <li>
              <a href="#skills" class="menu-link">Skills</a>
            </li>
            <li>
              <a href="#contact" class="menu-link">Contacto</a>
            </li>
          </ul>
          <label for="check" class="hide-menu">
            &#215
          </label>
        </nav>
      </header>
      <section id="banner">
        <div class="banner-container">
          <h3>Nadia Ivana Ujovich</h3>
          <h2>Fullstack Developer</h2>
          <a href="#avatar" class="about-me-button">Sobre mi</a>
        </div>
      </section>
      <section id="avatar">
          <img alt="" src="./src/assets/images/nadia.jpg"/>
          <p>Soy ingeniera en sistemas de información recibida en 2017. Tengo más de 12 años de experiencia trabajando con tecnologías backend como Java y Python, pero de a poco empecé a transicionar al desarrollo web. Además, soy profesora de Informática Aplicada en una Licenciatura orientada a Deportes. Aficionada al Data Science y a la Inteligencia Artificial.</p>
      </section>
      <section id="skills">
          <h2 class="skills-title">Skills</h2>
          <div class="icons-container">
            <div class="icon"><iconify-icon icon="logos:java" width="90" height="90" title="Java"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="logos:python" width="90" height="90" title="Python"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="logos:nodejs" width="90" height="90" title="Node js"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="logos:javascript" width="90" height="90" title="Javascript"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="vscode-icons:file-type-css" width="90" height="90" title="CSS3"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="vscode-icons:file-type-html" width="90" height="90" title="HTML5"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="logos:react" width="90" height="90" title="React"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="icon-park:github" width="90" height="90" title="GitHub"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="vscode-icons:file-type-bitbucketpipeline" width="90" height="90" title="Bitbucket"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="logos:spring" width="90" height="90" title="Spring"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="logos:flask" width="90" height="90" title="Flask"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="logos:mysql" width="90" height="90" title="MySQL"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="logos:mongodb" width="90" height="90" title="MongoDB"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="logos:maven" width="90" height="90" title="Maven"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="logos:webpack" width="90" height="90" title="Webpack"></iconify-icon></div>
            <div class="icon"><iconify-icon icon="vscode-icons:file-type-vite" width="90" height="90" title="Vite"></iconify-icon></div>
          </div>
      </section>
      <section id="projects">
        <h2 class="project-title">Proyectos</h2>
        <div class="projects-container">
          <div class="project-container--project1">
            <h3>Lorem.</h3>
            <img class="project-image" src="/src/assets/images/banner_3.jpg"/>
            <div class="buttons">
              <button class="code-button" title="Browse GitHub Code">
                <iconify-icon icon="fa-solid:code" width="40" height="40"></iconify-icon>
              </button>
              <button class="demo-button" title="See Live Demo">
                <iconify-icon icon="ic:baseline-live-tv" width="40" height="40"></iconify-icon>
              </button>
            </div>
          </div>
          <div class="project-container--project2">
            <h3>Lorem.</h3>
            <img class="project-image" src="/src/assets/images/banner_3.jpg"/>
            <div class="buttons">
              <button class="code-button" title="Browse GitHub Code">
                <iconify-icon icon="fa-solid:code" width="40" height="40"></iconify-icon>
              </button>
              <button class="demo-button" title="See Live Demo">
                <iconify-icon icon="ic:baseline-live-tv" width="40" height="40"></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <form class="form" action="https://formspree.io/f/xnqrndee" method="POST">
          <div class="form-container">
            <h2 class="form-title">Contacto</h2>
            <input type="text" class="form-input" placeholder="Nombre:" name="name" required/>
            <input type="email" class="form-input" placeholder="Email:" name="email" required/>
            <textarea class="form-input form-input--message" placeholder="Mensaje:" name="message" required></textarea>
            <input type="submit" class="form-button"/>
          </div>
        </form>
      </section>
    </div>
  )
}

export default App
