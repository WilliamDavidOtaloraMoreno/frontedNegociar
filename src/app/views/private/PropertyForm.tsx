import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ToastContainer } from "react-toastify";

import { useEffect, useState } from "react";

import ServicePrivate from "../../server/ServerPrivate";
import ApiBack from "../../utilities/domains/ApiBack";
import { useForm } from "../../utilities/hooks/useForm";
import { MessageToastify } from "../../utilities/funtions/MessageToastify";
import Properties from "../../models/Properties";
import neighborhoods from "../../models/Neighborhoods";
import Neighborhoods from "../../models/Neighborhoods";

export const PropertyForm = () => {
  // Variables
  type formaHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso] = useState<boolean>(false);
  const [fileBase64, setFileBase64] = useState("");
  const [neighborhood, setNeighborhood] = useState<Neighborhoods[]>([]);

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
    neighborhoodId,
    estratoSocial,
    areaConstruida,
    bannos,
    habitaciones,
    parqueadero,
    doubleLink,
    myObject,
  } = useForm<Properties>(
    new Properties(0, "", "", 0, "", "", "", "", "", "", 0, "", "", "", "", "")
  );

  // *******************************************************************

  const getNeig = async () => {
    const result = await ServicePrivate.petitionGET(ApiBack.NEIGHBOR_VIEW);
    setNeighborhood(result);
  };

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
    myObject.neighborhoodId = 0;
    myObject.estratoSocial = "";
    myObject.areaConstruida = "";
    myObject.bannos = "";
    myObject.habitaciones = "";
    myObject.parqueadero = "";

    formulario.title = "";
    formulario.description = "";
    formulario.price = 0;
    formulario.adsress = "";
    formulario.city = "";
    formulario.state = "";
    formulario.propertyType = "";
    formulario.nameImg = "";
    formulario.imgBase64 = "";
    formulario.neignborhoodName = "";
    formulario.estratoSocial = "";
    formulario.areaConstruida = "";
    formulario.bannos = "";
    formulario.habitaciones = "";
    formulario.parqueadero = "";

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
        MessageToastify("info", "Propiedad creada con exito", 7000);
      } else {
        MessageToastify("error", "La propiedad no se creo con exito", 7000);
      }
      // cleanBoxs(formulario);
    }
  };

  useEffect(() => {
    getNeig();
  }, []);

  //crear
  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}

      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de formulario: Inicio */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f0f0f0",
        }}
      >
        <div className="col-lg-12">
          <div
            className="card"
            style={{ width: "100%", maxWidth: "1500px", margin: "0 auto" }}
          >
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

                    <Form.Group className="mb-3" controlId="areaConstruida">
                      <Form.Label className="custom-form-label">
                        Area construida:
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="areaConstruida"
                        placeholder="Area construida en metros"
                        className="custom-form-control"
                        value={areaConstruida}
                        onChange={doubleLink}
                      />
                      <Form.Control.Feedback type="invalid">
                        La Area construida es obligatoria
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="bannos">
                      <Form.Label className="custom-form-label">
                        Número de baños:
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="bannos"
                        placeholder="Número de baños"
                        className="custom-form-control"
                        value={bannos}
                        onChange={doubleLink}
                      />
                      <Form.Control.Feedback type="invalid">
                        Número de baños es obligatorio
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
                    <Form.Group className="mb-3" controlId="neighborhoodId">
                      <Form.Label className="custom-form-label">
                        Barrio:
                      </Form.Label>
                      <Form.Select
                        required
                        name="neighborhoodId"
                        className="custom-form-control"
                        value={neighborhoodId}
                        onChange={doubleLink}
                      >
                        <option value="">Seleccionar estado</option>
                        {neighborhood.map((neig) => (
                          <option value={neig.neighborhoodId}>{neig.name}</option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        El estado de la propiedad es obligatorio
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="state">
                      <Form.Label className="custom-form-label">
                        Estado de la Propiedad:
                      </Form.Label>
                      <Form.Select
                        required
                        name="state"
                        className="custom-form-control"
                        value={state}
                        onChange={doubleLink}
                      >
                        <option value="">Seleccionar estado</option>
                        <option value="1">Nueva</option>
                        <option value="2">Usada</option>
                        <option value="3">Renovación</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        El estado de la propiedad es obligatorio
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="propertyType">
                      <Form.Label className="custom-form-label">
                        Tipo de Propiedad:
                      </Form.Label>
                      <Form.Select
                        required
                        name="propertyType"
                        className="custom-form-control"
                        value={propertyType}
                        onChange={doubleLink}
                      >
                        <option value="">Seleccionar Tipo de Propiedad</option>
                        <option value="1">Apartamento</option>
                        <option value="2">Casa</option>
                        <option value="3">Finca</option>
                      </Form.Select>
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

                    <Form.Group className="mb-3" controlId="estratoSocial">
                      <Form.Label className="custom-form-label">
                        Estrato Social:
                      </Form.Label>
                      <Form.Select
                        required
                        name="estratoSocial"
                        className="custom-form-control"
                        value={estratoSocial}
                        onChange={doubleLink}
                      >
                        <option value="">Seleccionar estado</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="parqueadero">
                      <Form.Label className="custom-form-label">
                        Parqueadero:
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="parqueadero"
                        placeholder="Parqueadero Si/No"
                        className="custom-form-control"
                        value={parqueadero}
                        onChange={doubleLink}
                      />
                      <Form.Control.Feedback type="invalid">
                        Parqueadero es obligatoria
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="habitaciones">
                      <Form.Label className="custom-form-label">
                        Habitaciones:
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="habitaciones"
                        placeholder="Area construida en metros"
                        className="custom-form-control"
                        value={habitaciones}
                        onChange={doubleLink}
                      />
                      <Form.Control.Feedback type="invalid">
                        La habitaciones es obligatoria
                      </Form.Control.Feedback>
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
