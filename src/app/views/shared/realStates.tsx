import React from 'react';
import { Button, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles'; // Solo si necesitas un efecto ripple específico
import c3 from '../../../assets/img/c3.jpg'

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
        <div className="col-md-4">
      <div className="card card-product" data-count="1">
        <div data-header-animation="true" className="card-header card-header-image">
          <a href="#pablo">
            <img src={c3} className="img" alt="Card" />
          </a>
        </div>
        <div className="card-body">
          <div className="card-actions text-center">
            <Tooltip title="Fix Header!">
              <Button variant="contained" color="error" className="btn btn-danger btn-link">
                <i className="material-icons">build</i> Fix Header!
              </Button>
            </Tooltip>
            <Tooltip title="View">
              <Button variant="contained" className="btn btn-default btn-link">
                <i className="material-icons">art_track</i>
              </Button>
            </Tooltip>
            <Tooltip title="Edit">
              <Button variant="contained" color="success" className="btn btn-success btn-link">
                <i className="material-icons">edit</i>
              </Button>
            </Tooltip>
            <Tooltip title="Remove">
              <Button variant="contained" color="error" className="btn btn-danger btn-link">
                <i className="material-icons">close</i>
              </Button>
            </Tooltip>
          </div>
          <h4 className="card-title">
            <a href="#pablo">Cozy 5 Stars Apartment</a>
          </h4>
          <div className="card-description">
            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
          </div>
        </div>
        <div className="card-footer">
          <div className="price">
            <h4>$899/night</h4>
          </div>
          <div className="stats">
            <p className="card-category">
              <i className="material-icons">place</i> Barcelona, Spain
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
<section className="w3-about-2">
<div className="w3-services py-5">
    <div className="container py-lg-3">
        
        <div className="row w3-services-grids py-lg-5">
          
            <div className="col-lg-7 w3-services-right-grid mt-lg-0">
                <h4>Are you planning to buy a House?</h4>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. On the other hand we denounce with righteous indignation.</p>
                <a className="btn btn-secondary btn-theme3 mt-3" href="contact.html"> Contact Us</a>
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
            <h3 className="head">Our Best Features</h3>
            <p className="my-3 head "> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Nulla mollis dapibus nunc, ut rhoncus
              turpis sodales quis. Integer sit amet mattis quam.</p>
          </div>
        <div className="row mt-5 pt-3">
            <div className="col-lg-4 col-md-6">
                <div className="card">
                    
                    <h4 className="mission">Search Property from Anywhere</h4>
                    <div className="icon-holder">
                        <span className="fa fa-certificate service-icon" aria-hidden="true"></span>
                    </div>
                    <div className="open-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima. It is a long established fact that a reader will be distracted by the readable.</p>
                     
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-5 pt-md-0 pt-3">
                <div className="card">
                   
                    <h4 className="mission">Professional & Friendly Agents</h4>
                    <div className="icon-holder">
                        <span className="fa fa-user service-icon" aria-hidden="true"></span>
                    </div>
                    <div className="open-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima. It is a long established fact that a reader will be distracted by the readable.</p>
                        
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-5 pt-lg-0 pt-3">
                <div className="card">
                   
                    <h4 className="mission">Buy and Sell Awesome Property</h4>
                    <div className="icon-holder">
                        <span className="fa fa-home service-icon" aria-hidden="true"></span>
                    </div>
                    <div className="open-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima. It is a long established fact that a reader will be distracted by the readable.</p>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>


        </>
    )
}