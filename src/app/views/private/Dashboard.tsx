import React, {useEffect,useState} from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ApiBack from '../../utilities/domains/ApiBack';
import Properties from '../../models/Properties';
import ServicePrivate from 'app/server/ServerPrivate';

export const Dashboard: React.FC = () => {
  const [properties, setProperties] = useState<Properties[]>([]);
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();

  const headerStyle: React.CSSProperties = {
    borderBottom: '5px solid #eec52a',
    paddingBottom: '10px',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#1e316f'
  };

  const cardHeaderStyle: React.CSSProperties = {
    backgroundColor: '#1e316f',
    color: 'white',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`${ApiBack.URL}${ApiBack.PROPERTY_VIEW_ALL}?page=${page}`);
        const data = await response.json();
        setProperties(data); 
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [page]);

  const handleCreateItem = () => {
    navigate('/propertyForm');
  };

  const updateItem = (id: number) => {
    navigate(`/propertyFormUpdate/${id}`);
  };

  const deleteItem = async (id: number) => {
    try {
      await fetch(`${ApiBack.URL}${ApiBack.PROPERTY_DELETE}/${id}`, {
        method: 'DELETE',
      });
      setProperties(properties.filter(property => property.propertyId !== id));
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-4" style={headerStyle}>DASHBOARD</h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header" style={cardHeaderStyle}>
              <h2 className="h4 mb-0">Propiedades</h2>
              <button className="btn btn-light" onClick={handleCreateItem}>
                <FaPlus /> Crear
              </button>
            </div>
            <div className="card-body">
              <div className="table-responsive-md">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre de la Propiedad</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map(property => (
                      <tr key={property.propertyId}>
                        <td>{property.propertyId}</td>
                        <td>{property.title}</td>
                        <td>
                          <button
                            className="btn btn-warning mr-2 mb-2 mb-md-0"
                            onClick={() => updateItem(property.propertyId)}
                          >
                            <FaEdit /> Actualizar
                          </button>
                          <button
                            className="btn btn-danger mb-2 mb-md-0"
                            onClick={() => deleteItem(property.propertyId)}
                          >
                            <FaTrash /> Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={() => setPage(page => Math.max(page - 1, 1))}>
                  Anterior
                </button>
                <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
