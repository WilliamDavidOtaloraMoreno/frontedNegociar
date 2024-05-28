import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ToastContainer } from "react-toastify";

import { useState } from "react";

import ServicePrivate from "../../server/ServerPrivate";
import ApiBack from "../../utilities/domains/ApiBack";
import { useForm } from "../../utilities/hooks/useForm";
import { MensajeToastify } from "../../utilities/funtions/MesajesToastufy";
import Properties from "../../models/Properties";
import neighborhoods from "../../models/Neighborhoods";

export const PropertyForm = () => {
  // Variables
  type formaHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso] = useState<boolean>(false);
  const [fileBase64, setFileBase64] = useState("");

  let {
    title,
    description,
    price,
    address,
    city,
    state,
    propertyType,
    nameImg,
    imgBase64,
    neignborhoodName,
    estratoSocial,
    doubleLink,
    myObject,
  } = useForm<Properties>(
    new Properties(
      0,
      "",
      "",
      0,
      "",
      "",
      "",
      "",
      "",
      "",
      new neighborhoods(0, ""),
      ""
    )
  );

  // *******************************************************************

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result?.toString() || "";
        setFileBase64(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  // Función flecha para limpiar cajas
  const cleanBoxs = (formulario: HTMLFormElement) => {
    formulario.reset();

    myObject.title = "";
    myObject.description = "";
    myObject.price = 0;
    myObject.address = "";
    myObject.city = "";
    myObject.state = "";
    myObject.propertyType = "";
    myObject.nameImg = "";
    myObject.imgBase64 = "";
    myObject.neignborhoodName = new neighborhoods(0, "");
    myObject.estratoSocial = "";

    formulario.title = "";
    formulario.description = "";
    formulario.price = 0;
    formulario.adsress = "";
    formulario.city = "";
    formulario.state = "";
    formulario.propertyType = "";
    formulario.nameImg = "";
    formulario.imgBase64 = "";
    formulario.neignborhoodName = new neighborhoods(0, "");
    formulario.estratoSocial = "";

    formulario.classList.remove("was-validated");
  };

  // Crear el perfil
  // *******************************************************************
  const sendForm = async (fh: formaHtml) => {
    fh.preventDefault();
    setEnProceso(true);
    const formulario = fh.currentTarget;
    formulario.classList.add("was-validated");

    if (formulario.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
    } else {
      const restultado = await ServicePrivate.peticionPOST(
        ApiBack.PROPERTY_VIEW_CREATE,
        myObject
      );
      console.log(myObject);

      if (restultado) {
        setEnProceso(false);
        MensajeToastify("info", "Propiedad creada con exito", 7000);
      } else {
        MensajeToastify("error", "La propiedad no se creo con exito", 7000);
      }
      // cleanBoxs(formulario);
    }
  };

  //crear
  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}

      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de formulario: Inicio */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <div className="col-lg-12">
        <div className="card" style={{ width: '100%', maxWidth: '1500px', margin: '0 auto' }}>
          <div className="card-body">
            <div
              style={{
                textAlign: "center",
                backgroundColor: "#fff",
                padding: "10px",
              }}
            >
              <h3 style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
                Formulario de Creación de Propiedades
              </h3>
            </div>

            <Form noValidate validated={enProceso} onSubmit={sendForm}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="title">
                    <Form.Label className="custom-form-label">
                      Titulo de la Propiedad:
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="title"
                      placeholder="Titulo de la Propiedad"
                      className="custom-form-control"
                      value={title}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      El titulo de la propiedad es obligatorio
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="description">
                    <Form.Label className="custom-form-label">
                      Descripción de la Propiedad:
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="description"
                      placeholder="Descripción de la Propiedad"
                      className="custom-form-control"
                      value={description}
                      onChange={doubleLink}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="price">
                    <Form.Label className="custom-form-label">
                      Precio de la Propiedad:
                    </Form.Label>
                    <Form.Control
                      required
                      type="number"
                      name="price"
                      placeholder="Precio de la Propiedad"
                      className="custom-form-control"
                      value={price}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      El precio de la propiedad es obligatorio
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="address">
                    <Form.Label className="custom-form-label">
                      Dirección de la Propiedad:
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="address"
                      placeholder="Dirección de la Propiedad"
                      className="custom-form-control"
                      value={address}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      La dirección es obligatoria
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="city">
                    <Form.Label className="custom-form-label">
                      Ciudad:
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="city"
                      placeholder="Ciudad"
                      className="custom-form-control"
                      value={city}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      La ciudad es obligatoria
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="state">
                    <Form.Label className="custom-form-label">
                      Estado de la Propiedad:
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="state"
                      placeholder="Estado de la Propiedad"
                      className="custom-form-control"
                      value={state}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      El estado de la propiedad es obligatorio
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="propertyType">
                    <Form.Label className="custom-form-label">
                      Tipo de Propiedad:
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="propertyType"
                      placeholder="Tipo de Propiedad"
                      className="custom-form-control"
                      value={propertyType}
                      onChange={doubleLink}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="nameImg">
                    <Form.Label className="custom-form-label">
                      Nombre de la Imagen:
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="nameImg"
                      placeholder="Nombre de la Imagen"
                      className="custom-form-control"
                      value={nameImg}
                      onChange={doubleLink}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="imgBase64">
                    <Form.Label className="custom-form-label">
                      Imagen de la Propiedad:
                    </Form.Label>
                    <Form.Control
                      type="file"
                      
                      className="custom-form-control"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleFileInputChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="estratoSocial">
                    <Form.Label className="custom-form-label">
                      Estrato Social:
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="estratoSocial"
                      placeholder="Estrato Social"
                      className="custom-form-control"
                      value={estratoSocial}
                      onChange={doubleLink}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group as={Row} className="mb-3">
                <Col className="d-flex justify-content-center">
                  <Button type="submit" className="bi bi-node-plus-fill">
                    Crear propiedad
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
      {/* Ejemplo de formulario: Inicio */}

      {/* Requerido para presentar los mensajes Toast: Inicio */}
      <ToastContainer />
      {/* Requerido para presentar los mensajes Toast: Fin */}
    </main>
  );
};
