import t1 from "../../../assets/img/t1.jpg";
import t2 from "../../../assets/img/t2.jpg";
import t3 from "../../../assets/img/t3.jpg";
import t4 from "../../../assets/img/t4.jpg";

export const AboutUs = () => {
  return (
    <>
      <section className="w3l-content-with-photo-4" id="about">
        <div id="content-with-photo4-block" className="py-5">
          <div className="container py-md-3">
            <div className="cwp4-two row">
              <div className="cwp4-text col-lg-6">
                <h3>Descripción general de la empresa</h3>
                <p>
                  Negociar.com.co es una empresa dedicada a la intermediación y
                  venta de vehículos e inmuebles en la ciudad de Tunja y la
                  región de Boyacá, Colombia. Nos especializamos en ofrecer una
                  plataforma integral y confiable que conecta a compradores y
                  vendedores, facilitando transacciones eficientes y seguras.
                </p>
                <a className="btn btn-secondary btn-theme3 mt-3" href="#team">
                  {" "}
                  Acerca de nuestro equipo
                </a>
              </div>
              <div className="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                <img src="assets/images/g4.jpg" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3-about-2" id="features">
        <div className="w3-services-ab py-5">
          <div className="container py-lg-3">
            <div className="title-section">
              <div className="title-line"></div>
            </div>
            <div className="row w3-services-grids py-lg-5">
              <div className="col-lg-3 w3-services-left-grid"></div>
              <div className="col-lg-9 w3-services-right-grid pl-lg-5">
                <h4>Somos Socios Inmobiliarios con Experiencia</h4>
                <p className="mt-3">
                </p>
                <div className="fea-gd-vv row mt-5 pt-lg-3">
                  <div className="col-sm-6">
                    <div className="float-lt feature-gd">
                      <div className="icon">
                        {" "}
                        <span
                          className="fa fa-file-text-o"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div className="icon-info">
                        <h5>Valoración de inmuebles</h5>
                        <p>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-sm-0 mt-5">
                    <div className="float-mid feature-gd">
                      <div className="icon">
                        {" "}
                        <span
                          className="fa fa-trophy"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div className="icon-info">
                        <h5>Propiedades favoritas</h5>
                        <p>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-5">
                    <div className="float-rt feature-gd">
                      <div className="icon">
                        {" "}
                        <span className="fa fa-clone" aria-hidden="true"></span>
                      </div>
                      <div className="icon-info">
                        <h5>Calidad premium</h5>
                        <p>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-5">
                    <div className="float-lt feature-gd">
                      <div className="icon">
                        {" "}
                        <span
                          className="fa fa-bullseye"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div className="icon-info">
                        <h5>Finanzas Bienes Raíces</h5>
                        <p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-team-main-6">
        <div className="team-content" id="team">
          <div className="container">
            <div className="heading text-center mx-auto">
              <h3 className="head">Nuestro Equipo</h3>
              <p className="my-3 head ">
                {" "}
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. Integer sit amet mattis quam.
              </p>
            </div>

            <div className="d-grid grid-col-4 text-center mt-5 pt-3">
              <div className="team-main-6">
                <div className="column-6">
                  <a href="#">
                    <img className="img-responsive" src={t1} alt=" " />
                  </a>
                  <div className="buttons-teams">
                    <a href="#facebook" className="facebook">
                      <span className="fa fa-facebook"></span>
                    </a>
                    <a href="#twitter" className="twitter mr-2 ml-2">
                      <span className="fa fa-twitter"></span>
                    </a>
                    <a href="#instagram" className="instagram">
                      <span className="fa fa-instagram"></span>
                    </a>
                  </div>
                </div>
                <div className="right-team-9">
                  <h6>
                    <a href="#" className="title-team-32">
                      Adam Ster
                    </a>
                  </h6>
                  <p className="sm-text-32">House Broker</p>
                </div>
              </div>
              <div className="team-main-6">
                <div className="column-6">
                  <a href="#">
                    <img className="img-responsive" src={t2} alt=" " />
                  </a>
                  <div className="buttons-teams">
                    <a href="#facebook" className="facebook">
                      <span className="fa fa-facebook"></span>
                    </a>
                    <a href="#twitter" className="twitter mr-2 ml-2">
                      <span className="fa fa-twitter"></span>
                    </a>
                    <a href="#instagram" className="instagram">
                      <span className="fa fa-instagram"></span>
                    </a>
                  </div>
                </div>
                <div className="right-team-9">
                  <h6>
                    <a href="#" className="title-team-32">
                      John doe
                    </a>
                  </h6>
                  <p className="sm-text-32">Senior Agent</p>
                </div>
              </div>
              <div className="team-main-6">
                <div className="column-6">
                  <a href="#">
                    <img className="img-responsive" src={t3} alt=" " />
                  </a>
                  <div className="buttons-teams">
                    <a href="#facebook" className="facebook">
                      <span className="fa fa-facebook"></span>
                    </a>
                    <a href="#twitter" className="twitter mr-2 ml-2">
                      <span className="fa fa-twitter"></span>
                    </a>
                    <a href="#instagram" className="instagram">
                      <span className="fa fa-instagram"></span>
                    </a>
                  </div>
                </div>
                <div className="right-team-9">
                  <h6>
                    <a href="#" className="title-team-32">
                      Dane Walker
                    </a>
                  </h6>
                  <p className="sm-text-32">Project Manager</p>
                </div>
              </div>
              <div className="team-main-6">
                <div className="column-6">
                  <a href="#">
                    <img className="img-responsive" src={t4} alt=" " />
                  </a>
                  <div className="buttons-teams">
                    <a href="#facebook" className="facebook">
                      <span className="fa fa-facebook"></span>
                    </a>
                    <a href="#twitter" className="twitter mr-2 ml-2">
                      <span className="fa fa-twitter"></span>
                    </a>
                    <a href="#instagram" className="instagram">
                      <span className="fa fa-instagram"></span>
                    </a>
                  </div>
                </div>
                <div className="right-team-9">
                  <h6>
                    <a href="#" className="title-team-32">
                      Elijah
                    </a>
                  </h6>
                  <p className="sm-text-32">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
