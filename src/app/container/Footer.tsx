import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <section className="w3l-footer-29-main" id="footer">
        <div className="footer-29">
          <div className="grids-forms-1 pb-5">
            <div className="container">
              <div className="grids-forms">
                <div className="main-midd">
                  <h4 className="title-head">
                    Boletín informativo: Obtenga actualizaciones y últimas
                    noticias
                  </h4>
                </div>
                <div className="main-midd-2">
                  <form action="#" method="post" className="rightside-form">
                    <input
                      type="email"
                      name="email"
                      placeholder="Ingresa tu correo"
                    />
                    <button className="btn" type="submit">
                      Suscribirse
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container pt-5">
            <div className="d-grid grid-col-4 footer-top-29">
              <div className="footer-list-29 footer-1">
                <h6 className="footer-title-29">Sobre Nosotros</h6>
                <ul>
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae
                  </p>
                </ul>
                <div className="main-social-footer-29">
                  <h6 className="footer-title-29">Redes Sociales</h6>
                  <a href="#facebook" className="facebook">
                    <span className="fa fa-facebook"></span>
                  </a>
                  <a href="#instagram" className="instagram">
                    <span className="fa fa-instagram"></span>
                  </a>
                </div>
              </div>
              <div className="footer-list-29 footer-2"></div>
              <div className="footer-list-29 footer-3">
                <div className="properties">
                  <h6 className="footer-title-29">Propiedades Destacadas</h6>
                  <Link to="#">
                    <img
                      src="assets/images/g7.jpg"
                      className="img-responsive"
                      alt=""
                    />
                    <p>We Are Leading International Consultiing Agency</p>
                  </Link>
                  <Link to="#">
                    <img
                      src="assets/images/g8.jpg"
                      className="img-responsive"
                      alt=""
                    />
                    <p>Digital Marketing Agency all the foundational tools</p>
                  </Link>
                  <Link to="#">
                    <img
                      src="assets/images/g9.jpg"
                      className="img-responsive"
                      alt=""
                    />
                    <p>Doloremque velit sapien labore eius itna</p>
                  </Link>
                </div>
              </div>
              <div className="footer-list-29 footer-4">
                <ul>
                  <h6 className="footer-title-29">Enlaces Rapidos</h6>
                  <li>
                    <a href="/">Inicio</a>
                  </li>
                  <li>
                    <Link to="about.html">Nosotros</Link>
                  </li>
                  <li>
                    <Link to="real_states">Bienes Raices</Link>
                  </li>
                  <li>
                    <Link to="contact.html">Contacto</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-copies text-center">
              <p className="copy-footer-29">
                © 2020 Estate Agent. All rights reserved | Designed by{" "}
                <a href="https://w3layouts.com">W3layouts</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
