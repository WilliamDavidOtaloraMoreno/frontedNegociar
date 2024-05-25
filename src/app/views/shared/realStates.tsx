import React from 'react';
import { Button, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles'; // Solo si necesitas un efecto ripple específico
import g3 from '../../../assets/img/g3.jpg'

export const realStates = () =>{
  
    return(
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
        <div className="col-md-4 mt-4">
                <div className="card profile-card-5">
                    <div className="card-img-block">
                        <img className="card-img-top" src={g3} alt="Card image cap"/>
                    </div>
                    <div className="card-body pt-0">
                        <h5 className="card-title">Florence Pink</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mt-4">
                <div className="card profile-card-5">
                    <div className="card-img-block">
                        <img className="card-img-top" src={g3} alt="Card image cap"/>
                    </div>
                    <div className="card-body pt-0">
                        <h5 className="card-title">Florence Pink</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
      </div>
    
  
</section>
<section className="w3-about-2">
<div className="w3-services py-5">
    <div className="container py-lg-3">
        
        <div className="row w3-services-grids py-lg-5">
          
            <div className="col-lg-7 w3-services-right-grid mt-lg-0">
                <h4>¿Estás pensando en comprar una propiedad?</h4>
                <p className="mt-3" style={{ textAlign: 'justify' }}>En nuestra página inmobiliaria, 
                te ofrecemos una amplia gama de opciones para que encuentres la propiedad perfecta para ti. Ya sea que estés buscando tu 
                primera casa, un lugar más grande para tu familia o una inversión lucrativa, estamos aquí para ayudarte a alcanzar tus metas. </p>
                <a className="btn btn-secondary btn-theme3 mt-3" href="contact.html"> Contactanos</a>
            </div>
            <div className="col-lg-5 w3-services-left-grid">
             
            </div>
        </div>
    </div>
</div>
</section>
<section className="w3l-service-3">
<div className="w3l-open-block-services py-5">
    <div className="container py-lg-3">
      
        <div className="heading text-center mx-auto">
            <h3 className="head">Nuestras Mejores Propiedades</h3>
            <p className="my-3 head "style={{ textAlign: 'justify' }}> En nuestra exclusiva selección de propiedades, encontrarás verdaderas joyas 
            que encarnan el lujo, la comodidad y el estilo de vida que deseas.
            Cada una de estas residencias ha sido cuidadosamente seleccionada
             por su calidad, diseño y ubicación privilegiada. Prepárate para ser
            cautivado por la belleza y el encanto
             de nuestras mejores propiedades. ¡Descubre tu próxima residencia de ensueño con nosotros!</p>
          </div>
      
           
      
        
    </div>
</div>
</section>


        </>
    )
}