export const Header = () => {
    return(
        <>
       <section className="w3l-top-menu-1 fixed-top">
	<div className="top-hd">
		<div className="container">
	<header className="row">
		<div className="social-top col-lg-3 col-6">
			<li>Siguenos!</li>
			<li><a href="#"><span className="fa fa-facebook"></span></a></li>
			<li><a href="#"><span className="fa fa-instagram"></span></a> </li>
				<li><a href="#"><span className="fa fa-twitter"></span></a></li>
				<li><a href="#"><span className="fa fa-vimeo"></span></a> </li>
		</div>
		<div className="accounts col-lg-9 col-6">
				<li className="top_li"><span className="fa fa-mobile"></span><a href="tel:+142 5897555">+142 5897555</a> </li>
				<li className="top_li1"><a href="#">Iniciar Sesion</a></li>
				<li className="top_li2"><a href="#">Registrarse</a></li>
		</div>
		
	</header>
  
</div>
</div>
<div className="linea-color"></div>
</section>
<section className="w3l-bootstrap-header">
  <nav className="navbar navbar-expand-lg navbar-light py-lg-2 py-2 fixed-top navbar-fixed">
    <div className="container">
      <a className="navbar-brand" href="index.html"><span className="fa fa-home"></span> Negociar.com</a>
     
    {/* <a className="navbar-brand" href="#index.html">
        <img src="image-path" alt="Your logo" title="Your logo" style={{height:'35px'}} />
    </a>  */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon fa fa-bars"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="index.html">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">Nosotros</a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="services.html">Bienes Raíces</a>
          </li>
        
          <li className="nav-item mr-0">
            <a className="nav-link" href="contact.html">Contacto</a>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
</section>

        </>
    )
}