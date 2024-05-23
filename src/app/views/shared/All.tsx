import React from 'react';

export const All = () => {
  return (
    <>
      <section className="form-12" id="home">
        <div className="form-12-content">
          <div className="container ">
            <div className="grid grid-column-2 ">
              <div className="column2">
              </div>
              <div className="column1">
                <form action="/" method="Get">
                  <div className="blog-search form d-flex search-form">
                    <input type="search" className="form-control" placeholder="Sector" name="search" />
                    <button type="submit" className="btn search-btn"><span className="fa fa-search"></span></button>
                  </div>
                  <div className="form-top">
                    <select id="sel1">
                      <option>Estado de la Propiedad</option>
                    </select>
                    <select id="sel2">
                      <option>Tipo de Propiedad</option>
                    </select>
                  </div>
                  <div className="form-top">
                    <select id="sel4">
                      <option>Estrato</option>
                    </select>
                    <input type="search" className="form-control" placeholder="Precio" name="search" style={{ width: '217px', height: '45px', borderRadius: '0', marginTop: '15px' }} />
                  </div>
                  <button type="submit" className="btn">Buscar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="locations-1" id="locations">
        <section className="grids-4" id="properties">
          <div className="container py-md-3 mt-5">
            <div className="heading text-center mx-auto">
              <h3 className="head">Propiedades en venta</h3>
              <p className="my-3 head" style={{ textAlign: 'justify' }}> Bienvenido a nuestra exclusiva colección de propiedades en venta. Si estás buscando tu hogar ideal, una oportunidad de inversión o un lugar especial para construir recuerdos, has llegado al sitio indicado. Nuestra amplia gama de propiedades incluye desde acogedores apartamentos urbanos hasta encantadoras casas familiares.</p>
            </div>
            <div className="row mt-5 pt-3">
              <div className="grids4-info  col-lg-4 col-md-6">
                <a href="#"><img src="/src/assets/img/g3.jpg" className="img-fluid" alt="" /></a>
                <ul className="location-top">
                  <li className="rent">Para Renta</li>
                </ul>
                <div className="info-bg">
                  <h5><a href="#">Luxury Apartment In chelsea</a></h5>
                  <p>$ 450,000 $777 / sqft</p>
                  <ul>
                    <p>Descripcion</p>
                  </ul>
                </div>
              </div>
              <div className="grids4-info col-lg-4 col-md-6 mt-md-0 mt-5">
                <a href="#"><img src="assets/images/g8.jpg" className="img-fluid" alt="" /></a>
                <ul className="location-top">
                  <li className="sale">Para Venta</li>
                </ul>
                <div className="info-bg">
                  <h5><a href="#">Nature-Friendly Family Houses</a></h5>
                  <p>$ 1,350 / per month</p>
                  <ul>
                    <p>Descripcion</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="w3l-testimonials" id="testimonials">
        <div className="customers-6-content py-5">
          <div className="container py-lg-3">
            <div className="heading text-center mx-auto">
              <h3 className="head">Clientes Felices</h3>
              <p className="my-3 head" style={{ textAlign: 'justify' }}>En nuestra inmobiliaria, la satisfacción de nuestros clientes es nuestra mayor prioridad. Nos enorgullece haber ayudado a numerosas personas y familias a encontrar el hogar de sus sueños y a realizar inversiones inmobiliarias exitosas. Aquí te presentamos algunas de las experiencias de nuestros clientes felices que han confiado en nosotros para sus necesidades inmobiliarias.</p>
            </div>
            <div id="customerhnyCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#customerhnyCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#customerhnyCarousel" data-slide-to="1"></li>
                <li data-target="#customerhnyCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner pb-5">
                <div className="carousel-item active">
                  <div className="customer row py-5 mt-3">
                    <div className="col-lg-4 col-md-6">
                      <div className="card">
                        <img className="card-img-top img-responsive" src="assets/images/c1.jpg" alt="" />
                        <div className="card-body">
                          <span className="fa fa-quote-left" aria-hidden="true"></span>
                          <h3 className="card-title">Henry Nicholas</h3>
                          <p className="sub-title mb-3">Engineer</p>
                          <p className="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                          </p>
                          <div className="text-right">
                            <span className="fa fa-quote-right" aria-hidden="true"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 off-testi-2">
                      <div className="card">
                        <img className="card-img-top img-responsive" src="assets/images/c2.jpg" alt="" />
                        <div className="card-body">
                          <span className="fa fa-quote-left" aria-hidden="true"></span>
                          <h3 className="card-title">Mark Waugh</h3>
                          <p className="sub-title mb-3">Engineer</p>
                          <p className="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                          </p>
                          <div className="text-right">
                            <span className="fa fa-quote-right" aria-hidden="true"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 offset-md-3 offset-lg-0 col-md-6 off-testi">
                      <div className="card">
                        <img className="card-img-top img-responsive" src="assets/images/c3.jpg" alt="" />
                        <div className="card-body">
                          <span className="fa fa-quote-left" aria-hidden="true"></span>
                          <h3 className="card-title">Sarina Willams</h3>
                          <p className="sub-title mb-3">Engineer</p>
                          <p className="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                          </p>
                          <div className="text-right">
                            <span className="fa fa-quote-right" aria-hidden="true"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="customer row py-5 mt-3">
                    <div className="col-lg-4 col-md-6">
                      <div className="card">
                        <img className="card-img-top img-responsive" src="assets/images/c2.jpg" alt="" />
                        <div className="card-body">
                          <span className="fa fa-quote-left" aria-hidden="true"></span>
                          <h3 className="card-title">Mark Waugh</h3>
                          <p className="sub-title mb-3">Engineer</p>
                          <p className="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                          </p>
                          <div className="text-right">
                            <span className="fa fa-quote-right" aria-hidden="true"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 off-testi-2">
                      <div className="card">
                        <img className="card-img-top img-responsive" src="assets/images/c3.jpg" alt="" />
                        <div className="card-body">
                          <span className="fa fa-quote-left" aria-hidden="true"></span>
                          <h3 className="card-title">Sarina Willams</h3>
                          <p className="sub-title mb-3">Engineer</p>
                          <p className="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                          </p>
                          <div className="text-right">
                            <span className="fa fa-quote-right" aria-hidden="true"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 offset-md-3 offset-lg-0 col-md-6 off-testi">
                      <div className="card">
                        <img className="card-img-top img-responsive" src="assets/images/c1.jpg" alt="" />
                        <div className="card-body">
                          <span className="fa fa-quote-left" aria-hidden="true"></span>
                          <h3 className="card-title">Henry Nicholas</h3>
                          <p className="sub-title mb-3">Engineer</p>
                          <p className="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                          </p>
                          <div className="text-right">
                            <span className="fa fa-quote-right" aria-hidden="true"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="customer row py-5 mt-3">
                    <div className="col-lg-4 col-md-6">
                      <div className="card">
                        <img className="card-img-top img-responsive" src="assets/images/c3.jpg" alt="" />
                        <div className="card-body">
                          <span className="fa fa-quote-left" aria-hidden="true"></span>
                          <h3 className="card-title">Sarina Willams</h3>
                          <p className="sub-title mb-3">Engineer</p>
                          <p className="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                          </p>
                          <div className="text-right">
                            <span className="fa fa-quote-right" aria-hidden="true"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 off-testi-2">
                      <div className="card">
                        <img className="card-img-top img-responsive" src="assets/images/c2.jpg" alt="" />
                        <div className="card-body">
                          <span className="fa fa-quote-left" aria-hidden="true"></span>
                          <h3 className="card-title">Mark Waugh</h3>
                          <p className="sub-title mb-3">Engineer</p>
                          <p className="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                          </p>
                          <div className="text-right">
                            <span className="fa fa-quote-right" aria-hidden="true"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 offset-md-3 offset-lg-0 col-md-6 off-testi">
                      <div className="card">
                        <img className="card-img-top img-responsive" src="assets/images/c1.jpg" alt="" />
                        <div className="card-body">
                          <span className="fa fa-quote-left" aria-hidden="true"></span>
                          <h3 className="card-title">Henry Nicholas</h3>
                          <p className="sub-title mb-3">Engineer</p>
                          <p className="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                          </p>
                          <div className="text-right">
                            <span className="fa fa-quote-right" aria-hidden="true"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-specifications-9">
        <div className="main-w3 py-5" id="stats">
          <div className="container py-md-3">
            <div className="heading text-center mx-auto">
              <h3 className="head" >Nosotros Estamos Para Ti</h3>
              <p className="my-3 head " style={{ textAlign: 'justify' }}> En nuestra inmobiliaria, estamos aquí para acompañarte en cada paso del camino. Entendemos que encontrar la propiedad perfecta puede ser un proceso desafiante, por eso nuestro equipo de expertos está dedicado a ofrecerte el mejor servicio y asesoramiento personalizado.</p>
            </div>
            <div className="main-cont-wthree-fea row pt-3 mt-5">
              <div className="grids-speci1 col-lg-3 col-6">
                <div className="spec-2 text-center">
                  <span className="fa fa-map-marker"></span>
                  <h3 className="title-spe">180+</h3>
                  <p>Locaciones</p>
                </div>
              </div>
              <div className="grids-speci1 midd-eff-spe col-lg-3 col-6">
                <div className="spec-2 text-center">
                  <span className="fa fa-users"></span>
                  <h3 className="title-spe">100+</h3>
                  <p>Agentes Inmobiliarios</p>
                </div>
              </div>
              <div className="grids-speci1 las-but col-lg-3 col-6  mt-lg-0 mt-4">
                <div className="spec-2 text-center">
                  <span className="fa fa-building"></span>
                  <h3 className="title-spe">250+</h3>
                  <p>Propiedades Para La Venta</p>
                </div>
              </div>
              <div className="grids-speci1 las-t col-lg-3 col-6  mt-lg-0 mt-4">
                <div className="spec-2 text-center">
                  <span className="fa fa-home"></span>
                  <h3 className="title-spe">3200+ </h3>
                  <p>Propiedades Para Rentar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
