import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  Modal,
} from "react-bootstrap";
import {
  FaHome,
  FaBath,
  FaUtensils,
  FaBed,
  FaLayerGroup,
  FaParking,
} from "react-icons/fa";
import g1 from "../../../assets/img/g1.jpg";
import g2 from "../../../assets/img/g2.jpg";
import g3 from "../../../assets/img/g3.jpg";
import Properties from "../../models/Properties";
import { useParams } from "react-router-dom";
import ApiBack from "../../utilities/domains/ApiBack";
import ServicePrivate from "../../server/ServerPrivate";
import PropertyImages from "../../models/PropertyImagesView";

export const PropertyInfo = () => {
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { propertyId } = useParams<{ propertyId: string }>();
  const [property, setProperty] = useState<Properties[]>([]);
  const [propertyImagens, setPropertyImagens] = useState<PropertyImages[]>([]);

  const handleShow = (index: number) => {
    setSelectedIndex(index);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (show) {
      if (e.key === "ArrowLeft") {
        const prevButton = carouselRef.current?.querySelector(
          ".carousel-control-prev"
        );
        if (prevButton) (prevButton as HTMLElement).click();
      } else if (e.key === "ArrowRight") {
        const nextButton = carouselRef.current?.querySelector(
          ".carousel-control-next"
        );
        if (nextButton) (nextButton as HTMLElement).click();
      } else if (e.key === "Escape") {
        handleClose();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [show]);

  const photos = [g1, g2, g3];

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(
          `${ApiBack.URL}${ApiBack.PROPERTY_VIEW_ONE}/${propertyId}`
        );
        const data = await response.json();
        console.log(data);
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };
    const getOneimagesforProperty = async () => {
      const url = ApiBack.PROPERTY_IMAGEN + "/" + propertyId;
      const data = await ServicePrivate.petitionGET(url);
      
      if (data) {
        setPropertyImagens(data);
      }
    };
    getOneimagesforProperty();

    fetchProperty();
  }, [propertyId]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {property.map((myProperty, key) => (
        <Container className="my-4">
          <Row>
            {/* Galería de fotos */}

            <Col>
            
              <Carousel
                interval={200000}
                slide={false}
                fade
                style={{ maxHeight: "calc(80vh - 150px)", overflow: "hidden" }}
              >
                {propertyImagens.map((photo, index) => (
                  <Carousel.Item
                    key={index}
                    onClick={() => handleShow(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      className="d-block w-100 rounded"
                      src={photo.imageBase64}
                      alt={`Propiedad ${index + 1}`}
                      style={{
                        objectFit: "contain",
                        maxHeight: "calc(80vh - 150px)",
                        minHeight: "300px",
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>

          {/* Modal para el carrusel ampliado */}
          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            centered
            className="custom-modal"
          >
            <Modal.Body style={{ padding: 0 }} ref={carouselRef}>
              <Carousel
                activeIndex={selectedIndex}
                onSelect={setSelectedIndex}
                indicators={false}
                controls={true}
                interval={null}
                slide={false}
              >
                {propertyImagens.map((photo, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 modal-image"
                      src={photo.imageBase64}
                      alt={`Propiedad ${index + 1}`}
                      style={{ objectFit: "contain", height: "80vh" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Button
                variant="light"
                onClick={handleClose}
                className="close-button"
              >
                &times;
              </Button>
            </Modal.Body>
          </Modal>

          {/* Precio, descripción y buscador */}
          <Row className="my-4 justify-content-center">
            <Col md={8}>
              <Card className="p-3 shadow-lg rounded">
                <h2 className="text-primary">{myProperty.price}</h2>
                <p className="text-muted mb-4">{myProperty.description}</p>
                <hr className="my-4" />
                <h5 className="mb-3">Características:</h5>
                <Row className="mb-2">
                  <Col xs={6} sm={4}>
                    <p className="text-secondary mb-1">
                      <FaHome size={18} /> Área Construida
                    </p>
                    <p>{myProperty.areaConstruida}</p>
                  </Col>
                  <Col xs={6} sm={4}>
                    <p className="text-secondary mb-1">
                      <FaBath size={18} /> Baños
                    </p>
                    <p>3</p>
                  </Col>
                  <Col xs={6} sm={4}>
                    <p className="text-secondary mb-1">
                      <FaBed size={18} /> Habitaciones
                    </p>
                    <p>{myProperty.habitaciones}</p>
                  </Col>
                  <Col xs={6} sm={4}>
                    <p className="text-secondary mb-1">
                      <FaLayerGroup size={18} /> Estrato
                    </p>
                    <p>{myProperty.estratoSocial}</p>
                  </Col>
                  <Col xs={6} sm={4}>
                    <p className="text-secondary mb-1">
                      <FaParking size={18} /> Parqueadero
                    </p>
                    <p>{myProperty.parqueadero}</p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
};
