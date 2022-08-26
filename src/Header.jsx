export function Header () {
    return (
        <header>
        <img className="logo" src="/logo.svg" />
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="show-menu">
          <iconify-icon icon="eva:menu-outline" width="40" height="40"></iconify-icon>
        </label>
        <nav className="menu">
          <ul className="menu-items">
            <li>
              <a href="#avatar" className="menu-link">Sobre mi</a>
            </li>
            <li>
              <a href="#projects" className="menu-link">Proyectos</a>
            </li>
            <li>
              <a href="#skills" className="menu-link">Skills</a>
            </li>
            <li>
              <a href="#contact" className="menu-link">Contacto</a>
            </li>
          </ul>
          <label htmlFor="check" className="hide-menu">
            <iconify-icon icon="codicon:chrome-close" width="40" height="40"></iconify-icon>
          </label>
        </nav>
      </header>
    )
}