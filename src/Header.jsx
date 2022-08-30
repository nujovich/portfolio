import { useEffect, useState } from "react"


export function Header () {

  const[rightProp, setRightProp] = useState({right: "-100%"})
  const[sticky, setPositionSticky] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        setPositionSticky(window.scrollY >= 100)
    }
      window.addEventListener('scroll', handleScroll);
    }, [])
    return (
        <header className={sticky ? "header header-sticky" : "header"}>
        <img className="logo" src="./logo.svg" />
        <input type="checkbox" id="check" onClick={() => rightProp['right'] === "0" 
        ? setRightProp({right: "-100%"}) : setRightProp({right: "0"})}/>
        <label htmlFor="check" className="show-menu">
          <iconify-icon icon="eva:menu-outline" width="40" height="40"></iconify-icon>
        </label>
        <nav className="menu" style={rightProp}>
          <ul className="menu-items">
            <li>
              <a href="#avatar" className="menu-link" onClick={() => setRightProp({right: "-100%"})}>Sobre mi</a>
            </li>
            <li>
              <a href="#projects" className="menu-link" onClick={() => setRightProp({right: "-100%"})}>Proyectos</a>
            </li>
            <li>
              <a href="#skills" className="menu-link" onClick={() => setRightProp({right: "-100%"})}>Skills</a>
            </li>
            <li>
              <a href="#contact" className="menu-link" onClick={() => setRightProp({right: "-100%"})}>Contacto</a>
            </li>
          </ul>
          <label htmlFor="check" className="hide-menu">
            <iconify-icon icon="codicon:chrome-close" width="40" height="40"></iconify-icon>
          </label>
        </nav>
      </header>
    )
}