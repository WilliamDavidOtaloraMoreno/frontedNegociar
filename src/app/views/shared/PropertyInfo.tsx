import c1 from '../../../assets/img/c1.jpg'
import c2 from '../../../assets/img/c2.jpg'
import c3 from '../../../assets/img/c3.jpg'
import React, { useState } from 'react';

import g3 from '../../../assets/img/g3.jpg'
import g8 from '../../../assets/img/g8.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const PropertyInfo = () =>{

    const images = [g3, g8]; // Agrega más imágenes si es necesario
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return(
        <>
        <section id="aa-properties">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="aa-properties-content"> 
            <div className="aa-properties-details">
            <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>&#10094;</button>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>&#10095;</button>
    </div>
             <div className="aa-properties-info">
               <h2>Casa en Arriendo</h2>
               <span className="aa-price">$35.000.000</span>
               <p>Negociar Inmobiliaria ofrece una excelente opción de inversión en el norte de la ciudad de Tunja,
                 junto a la estación de servicio Terpel, en sentido sur-norte. Estos locales para estrenar en el barrio
                  Santa Helena son una excelente opción debido a su ubicación estratégica. El uso de suelo permite oficinas, 
                  comercio I y II, e instituciones, lo que amplía las posibilidades de negocio. La entrega estimada será para 
                  el mes de agosto, y el edificio cuenta con un ascensor con capacidad para 12 personas. Disponibles en los pisos 
                  3 y 4, estos locales ofrecen áreas desde 86 m². Si deseas arrendar un piso completo, el área sería de 580.79 m², 
                  con un valor del canon de $35,000,000 más administración. Esta oportunidad es ideal para empresas o negocios que 
                  buscan un espacio moderno y bien ubicado en una zona de alto tráfico y crecimiento. No dejes pasar esta oportunidad
                   de establecer tu negocio en un lugar privilegiado. Contáctanos para más información y para agendar una visit</p>
               <h4>Propery Features</h4>
               <ul className="horizontal-list">
                 <li>4 Bedroom</li>
                 <li>3 Baths</li>
                 <li>Kitchen</li>
                 <li>Air Condition</li>
                 <li>Belcony</li>
                 <li>Gym</li>
                 <li>Garden</li>
                 <li>CCTV</li>
                 <li>Children Play Ground</li>
                 <li>Comunity Center</li>
                 <li>Security System</li>
               </ul>
             </div>

            </div>           
          </div>
        </div>
        <div className="col-md-4">
          <aside className="aa-properties-sidebar">
            <div className="aa-properties-single-sidebar">
              <h3>Properties Search</h3>
              <form action="">
                <div className="aa-single-advance-search">
                  <input type="text" placeholder="Type Your Location"/>
                </div>
                <div className="aa-single-advance-search">
                  <select id="" name="">
                   <option defaultValue="0">Estado de la Propiedad</option>
                  </select>
                </div>
                <div className="aa-single-advance-search">
                  <select id="" name="">
                   <option defaultValue="0">Tipo de Propiedad</option>
                  </select>
                </div>
                <div className="aa-single-advance-search">
                  <select id="" name="">
                    <option defaultValue="0">Estrato</option>
                  </select>
                </div>
                <div className="aa-single-advance-search">
                  <input type="text" placeholder="Precio"/>
                </div>
                <div className="aa-single-advance-search">
                  <input type="submit" value="Search" className="aa-search-btn"/>
                </div>
              </form>
            </div> 
          </aside>
        </div>
      </div>
    </div>
  </section>

  
        </>
    )
}
