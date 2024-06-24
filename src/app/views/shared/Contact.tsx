import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";


export const Contact = () => {

	const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
	
	
	useEffect(() => emailjs.init("Uj-U9erat__tICQk5"), []);
	
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const serviceId = "YOUR-SERVICE-ID-HERE";
		const templateId = "YOUR-TEMPLATE-ID-HERE";
	
		try {
		  setLoading(true);
		  if (nameRef.current && emailRef.current) {
			await emailjs.send(serviceId, templateId, {
			  name: nameRef.current.value,
			  recipient: emailRef.current.value
			});
			alert("Email successfully sent. Check your inbox.");
		  } else {
			console.error("Input elements are not yet initialized.");
		  }
		} catch (error) {
		  console.log(error);
		} finally {
		  setLoading(false);
		}
	  };
	
    return (
        <>
        <section className="w3l-contacts-2" id="contact">
	<div className="contacts-main"/>
		
		<div className="form-41-mian py-5">
			<div className="container py-md-3">
				<h3 className="cont-head">Contactanos</h3>
				<div className="d-grid align-form-map">
					<div className="form-inner-cont">
						
						<form action="https://sendmail.w3layouts.com/submitForm" method="post" className="main-input">
							<div className="top-inputs d-grid">
								<input type="text" placeholder="Nombre" name="w3lName" id="w3lName" required/>
								<input id="name" ref={nameRef} type="text" placeholder="Enter your name" required />
							</div>
							<input id="email" ref={emailRef} type="email" placeholder="Enter your email" required />
							<textarea placeholder="Mensaje" name="w3lMessage" id="w3lMessage" required></textarea>
							<div className="text-right">
								<button type="submit" className="btn btn-theme3">Enviar</button>
							</div>
						</form>
					</div>
					
					<div className="contact-right">
						<img src="assets/images/ab-2.jpg" className="img-fluid" alt=""/>
					</div>
				</div>
			</div>
		</div>
		<div className="contant11-top-bg py-5">
			<div className="container py-md-3">
				<div className="d-grid contact section-gap">
					<div className="contact-info-left d-grid text-center">
						<div className="contact-info">
							<span className="fa fa-location-arrow" aria-hidden="true"></span>
							<h4>Dirección</h4>
							<p>485 Pretty View Lane, Lorem ipsum, London, England</p>
						</div>
						<div className="contact-info">
							<span className="fa fa-phone" aria-hidden="true"></span>
							<h4>Telefono</h4>
							<p><a href="tel:+44 7834 857829">+44 7834 857829</a></p>
							<p><a href="tel:+44 987 654 321">+44 987 654 321</a></p>
						</div>
						<div className="contact-info">
							<span className="fa fa-envelope-open-o" aria-hidden="true"></span>
							<h4>Correo</h4>
							<p><a href="mailto:mail@example.com" className="email">mail@example.com</a></p>
							<p><a href="mailto:mail@example.com" className="email">mail@example.com</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section>
      <aside></aside>
      <form className="for" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="name">Name</label>
          <input id="name" ref={nameRef} type="text" placeholder="Enter your name" required />
        </div>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          
        </div>
        <button className="btn" disabled={loading}>
          Subscribe
        </button>
      </form>
    </section>
		<div className="map-container">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d590.3204384837959!2d-73.35132923217218!3d5.539304594990761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a7c36bee9b755%3A0xcc0593a854880673!2sEdifico%20In%20Altezza!5e0!3m2!1ses!2sco!4v1716958048735!5m2!1ses!2sco"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
</section>
        </>
    )
}