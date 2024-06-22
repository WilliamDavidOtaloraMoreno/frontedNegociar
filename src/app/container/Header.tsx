import { optionAdmin } from "../utilities/domains/OptionSistem";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();


  const logout = () => {
    localStorage.removeItem("miToken");
    navigate("/login");
  };


  let opciones: any[] = optionAdmin;

  return (
    <>
      <section className="w3l-top-menu-1 fixed-top">
        <div className="top-hd">
          <div className="container">
            <header className="row">
              <div className="social-top col-lg-5 col-4">
                <li>Síguenos!</li>
                <li>
                  <a href="https://www.facebook.com/negociar.puntocom.79">
                    <span className="fa fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/negociarpuntocom/">
                    <span className="fa fa-instagram"></span>
                  </a>
                </li>
              </div>
              <div className="accounts col-lg-7 col-8">
                <li className="top_li">
                    {localStorage.getItem("miToken") ? (
                    <ul className="sidebar-nav" id="sidebar-nav">
                      <li className="top_li1">
                        <Link to="/" onClick={logout}>
                          Cerrar Sesión
                        </Link>
                      </li>
                      {opciones.map((opcion, indice) => (
                        <li className="nav-item" key={"li" + indice}>
                          <a
                            className="nav-link collapsed"
                            data-bs-target={"#menu" + indice}
                            data-bs-toggle="collapse"
                            href="/#"
                          >
                            <i className={opcion.icono}></i>
                            <span>{opcion.nombre}</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                          </a>
                          <ul
                            id={"menu" + indice}
                            className="nav-content collapse "
                            data-bs-parent="#sidebar-nav"
                          >
                            {opcion.hijos.map(
                              (subMenu: any, otroIndice: number) => (
                                <li key={"sub" + otroIndice}>
                                  <Link to={subMenu.ruta}>
                                    <i className={subMenu.icono}></i>
                                    <span>{subMenu.nombre}</span>
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <li className="top_li1">
                      <Link to="/login">Iniciar Sesión</Link>
                    </li>
                  )}
                </li>
              </div>
            </header>
          </div>
        </div>
        <div className="linea-color"></div>
      </section>
      <section className="w3l-bootstrap-header">
        <nav className="navbar navbar-expand-lg navbar-light py-lg-2 py-2 fixed-top navbar-fixed">
          <div className="container">
            <a className="navbar-brand" href="/">
              <span className="fa fa-home"></span> Negociar.com
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa fa-bars"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutUs" title="Nosotros">
                    Nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/real-states"
                    title="Bienes Raíces"
                    replace={false}
                  >
                    Bienes Raíces
                  </Link>
                </li>
                <li className="nav-item mr-0">
                  <Link className="nav-link" to="/contact">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
