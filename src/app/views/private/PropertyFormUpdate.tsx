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
import Neighborhoods from "../../models/Neighborhoods";
import PropertyImages from "../../models/PropertyImages";

interface FormEvent extends React.FormEvent<HTMLFormElement> {}


export const PropertyFormUpdate = () => {
  type formaHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso] = useState<boolean>(false);
  const [fileBase64List, setFileBase64List] = useState<string[]>([]);
  const [neighborhood, setNeighborhood] = useState<Neighborhoods[]>([]);

  let {
    title,
    description,
    price,
    address,
    city,
    state,
    propertyType,
    images,
    neighborhoodId,
    estratoSocial,
    areaConstruida,
    bannos,
    habitaciones,
    parqueadero,
    doubleLink,
    myObject,
  } = useForm<Properties>(
    new Properties(0, "", "", 0, "", "", "", "", [], 0, "", "", "", "", "")
  );

  const getNeig = async () => {
    const result = await ServicePrivate.petitionGET(ApiBack.NEIGHBOR_VIEW);
    setNeighborhood(result);
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const fileReaders: FileReader[] = [];
      const base64List: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        fileReaders.push(reader);
        reader.onloadend = () => {
          const base64String = reader.result?.toString() || "";
          base64List.push(base64String);
          if (base64List.length === files.length) {
            setFileBase64List(base64List);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const cleanBoxs = (formulario: HTMLFormElement) => {
    formulario.reset();
    myObject.title = "";
    myObject.description = "";
    myObject.price = 0;
    myObject.address = "";
    myObject.city = "";
    myObject.state = "";
    myObject.propertyType = "";
    myObject.images = [];
    myObject.neighborhoodId = 0;
    myObject.estratoSocial = "";
    myObject.areaConstruida = "";
    myObject.bannos = "";
    myObject.habitaciones = "";
    myObject.parqueadero = "";

    formulario.classList.remove("was-validated");
  };

  const sendForm = async (fh: FormEvent) => {
    fh.preventDefault();
    setEnProceso(true);
    const formulario = fh.currentTarget;
    formulario.classList.add("was-validated");

    if (formulario.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
    } else {
      myObject.images = fileBase64List.map(
        (base64, index) =>
          new PropertyImages(0, 0, base64, `image${index}`)
      );

      const resultado = await ServicePrivate.peticionPUT(
        `${ApiBack.PROPERTY_VIEW_UPDATE}/${myObject.propertyId}`,
        myObject
      );

      if (resultado) {
        setEnProceso(false);
        MessageToastify("info", "Propiedad actualizada con éxito", 7000);
      } else {
        MessageToastify(
          "error",
          "La propiedad no se actualizó con éxito",
          7000
        );
      }
    }
  };

  useEffect(() => {
    getNeig();
  }, []);

  return (
    <main id="main" className="main">
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
                  Formulario de Actualizacion de Propiedades
                </h3>
              </div>

              <Form noValidate validated={enProceso} onSubmit={sendForm}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="title">
                      <Form.Label className="custom-form-label">
                        Título de la Propiedad:
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="title"
                        placeholder="Título de la Propiedad"
                        className="custom-form-control"
                        value={title}
                        onChange={doubleLink}
                      />
                      <Form.Control.Feedback type="invalid">
                        El título de la propiedad es obligatorio
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
                        Área construida:
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="areaConstruida"
                        placeholder="Área construida en metros"
                        className="custom-form-control"
                        value={areaConstruida}
                        onChange={doubleLink}
                      />
                      <Form.Control.Feedback type="invalid">
                        El área construida es obligatoria
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
                        El número de baños es obligatorio
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
                        <option value="">Seleccionar barrio</option>
                        {neighborhood.map((neig) => (
                          <option key={neig.neighborhoodId} value={neig.neighborhoodId}>
                            {neig.name}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        El barrio de la propiedad es obligatorio
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
                        <option value="">Seleccionar estrato social</option>
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
                        El parqueadero es obligatorio
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
                        placeholder="Número de habitaciones"
                        className="custom-form-control"
                        value={habitaciones}
                        onChange={doubleLink}
                      />
                      <Form.Control.Feedback type="invalid">
                        Las habitaciones son obligatorias
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
                        multiple
                        onChange={handleFileInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group as={Row} className="mb-3">
                  <Col className="d-flex justify-content-center">
                    <Button type="submit" className="bi bi-node-plus-fill">
                      Actualizar propiedad
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};
