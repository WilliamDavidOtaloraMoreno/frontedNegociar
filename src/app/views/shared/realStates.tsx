import React, { useEffect, useState } from "react";
import { Button, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles"; // Solo si necesitas un efecto ripple específico
import g3 from "../../../assets/img/g3.jpg";
import ApiBack from "../../utilities/domains/ApiBack";
import Properties from "../../models/Properties";

export const RealStates = () => {
  const [properties, setProperties] = useState<Properties[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(1);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          `${ApiBack.URL}${ApiBack.PROPERTY_VIEW_ALL}?page=${page}`
        );
        const data = await response.json();
        setProperties(data);
        setlimit(data.limit);
        
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [page]);

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1); // Ajusta el valor mínimo de la página a 1
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1); // Ajusta el valor máximo de la página al total de páginas
    window.scrollTo(0, 0);
  };
  return (
    <>
      <section className="w3l-service-breadcrum">
        <div className="breadcrum-bg py-sm-5 py-4">
          <div className="container py-lg-3">
            <h2>Propiedades</h2>
          </div>
        </div>
      </section>
      <section className="w3l-index6" id="service">
        <div className="features-with-17_sur py-5">
          <div className="container py-lg-3">
            <div className="features-with-17-top_sur">
              <div className="row">
                {Array.isArray(properties) &&
                  properties.map((myProperty, contador) => (
                    <div
                    className="profile-card-4 text-center"
                    key={myProperty.propertyId}
                  >
                    {Array.isArray(myProperty.images) &&
                    myProperty.images.length > 0 ? (
                      <img
                        src={myProperty.images[0].image_base64}
                        className="img img-responsive"
                        alt={myProperty.images[0].name_img}
                      />
                    ) : (
                      <img
                        src="URL_A_IMAGEN_POR_DEFECTO"
                        className="img img-responsive"
                        alt="Imagen no disponible"
                      />
                    )}
                    <div className="profile-content">
                      <div className="profile-name">{myProperty.title}</div>
                      <div className="profile-description">
                        <h6>PRECIO</h6>
                        {myProperty.price}
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <div className="profile-overview">
                            <p>Area</p>
                            <h4>{myProperty.areaConstruida}m</h4>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="profile-overview">
                            <p>Habitaciones</p>
                            <h4>{myProperty.habitaciones}</h4>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="profile-overview">
                            <p>Baños</p>
                            <h4>{myProperty.bannos}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center m-3">
            <nav className="inline-flex space-x-2.5 justify-content-center">
              <button
                className="flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 dark:text-white bg-white dark:bg-gray-800 transition-colors hover:border-blue-600 hover:bg-blue-400 hover:text-white dark:hover:text-white"
                onClick={handlePreviousPage}
                disabled={page === 1}
              >
                ⪻ Anterior
              </button>
              &nbsp;
              <button
                className="flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 dark:text-white bg-white dark:bg-gray-800 transition-colors hover:border-blue-600 hover:bg-blue-400 hover:text-white dark:hover:text-white"
                onClick={handleNextPage}
                disabled={page === limit}
              >
                Sigiente ⪼
              </button>
            </nav>
          </div>
        </div>
      </section>
      <section className="w3-about-2">
        <div className="w3-services py-5">
          <div className="container py-lg-3">
            <div className="row w3-services-grids py-lg-5">
              <div className="col-lg-7 w3-services-right-grid mt-lg-0">
                <h4>¿Estás pensando en comprar una propiedad?</h4>
                <p className="mt-3" style={{ textAlign: "justify" }}>
                  En nuestra página inmobiliaria, te ofrecemos una amplia gama
                  de opciones para que encuentres la propiedad perfecta para ti.
                  Ya sea que estés buscando tu primera casa, un lugar más grande
                  para tu familia o una inversión lucrativa, estamos aquí para
                  ayudarte a alcanzar tus metas.{" "}
                </p>
                <a
                  className="btn btn-secondary btn-theme3 mt-3"
                  href="contact.html"
                >
                  {" "}
                  Contactanos
                </a>
              </div>
              <div className="col-lg-5 w3-services-left-grid"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-service-3">
        <div className="w3l-open-block-services py-5">
          <div className="container py-lg-3">
            <div className="heading text-center mx-auto">
              <h3 className="head">Nuestras Mejores Propiedades</h3>
              <p className="my-3 head " style={{ textAlign: "justify" }}>
                {" "}
                En nuestra exclusiva selección de propiedades, encontrarás
                verdaderas joyas que encarnan el lujo, la comodidad y el estilo
                de vida que deseas. Cada una de estas residencias ha sido
                cuidadosamente seleccionada por su calidad, diseño y ubicación
                privilegiada. Prepárate para ser cautivado por la belleza y el
                encanto de nuestras mejores propiedades. ¡Descubre tu próxima
                residencia de ensueño con nosotros!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
