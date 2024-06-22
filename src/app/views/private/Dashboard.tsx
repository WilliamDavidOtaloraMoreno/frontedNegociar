import ApiBack from "../../utilities/domains/ApiBack";
import ServicePrivate from "../../server/ServerPrivate";
import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Properties from "../../models/Properties";
import { MessageToastify } from "../../utilities/funtions/MessageToastify";

export const Dashboard = () => {

  const [arryProperty, setArrayProperty] = useState<Properties[]>([]);

  const headerStyle: React.CSSProperties = {
    borderBottom: "5px solid #eec52a",
    paddingBottom: "10px",
    marginBottom: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#1e316f",
  };

  const cardHeaderStyle: React.CSSProperties = {
    backgroundColor: "#1e316f",
    color: "white",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const navigate = useNavigate();
  const handleCreateItem = () => {
    navigate("/propertyForm");
  };

  const getMePropertyList = async () => {
    const result = await ServicePrivate.petitionGET(ApiBack.PROPETY_VIEW_LIST);
    setArrayProperty(result);
    console.log(result);
  };

  const deleteProperty = async (propertyId: number) => {
    const urlDelete = ApiBack.PROPERTY_DElETE + "/" + propertyId;
    const result = await ServicePrivate.peticionDELETE(urlDelete);

    if (typeof result.OK === "undefined") {
      MessageToastify( "error", "No se puede eliminar el curso. Relacionado con otra tabla", 7000 );
    } else {
      MessageToastify("success", "Curso Eliminado. SUCCESSFULLY", 7000);
    }
    getMePropertyList();
  };

  useEffect(() => {
    getMePropertyList();
  }, []);
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4" style={headerStyle}>
              DASHBOARD
            </h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header " style={cardHeaderStyle}>
                <h2 className="h4 mb-0">Propiedades</h2>
                <button className="btn btn-light" onClick={handleCreateItem}>
                  <FaPlus /> Crear
                </button>
              </div>
              <div className="card-body">
                <div className="table-responsive-md">
                  <table className="table table-hover ">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre de la Propiedad</th>
                        <th>Dirección</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    {arryProperty.map((myProperty, contador) => (
                      <tbody>
                        <tr>
                          <td>{myProperty.propertyId}</td>
                          <td>{myProperty.title}</td>
                          <td>{myProperty.address}</td>
                          <td>{myProperty.price}</td>
                          <td>
                            <button
                              className="btn btn-warning mr-2 mb-2 mb-md-0"
                              onClick={() => alert("Actualizar item 1")}
                            >
                              <FaEdit /> Actualizar
                            </button>
                            <button
                              className="btn btn-danger mb-2 mb-md-0"
                              onClick={(e) => {
                                deleteProperty(myProperty.propertyId);
                              }}
                            >
                              <FaTrash /> Eliminar
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
