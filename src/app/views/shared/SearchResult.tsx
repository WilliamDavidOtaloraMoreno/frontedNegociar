import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Properties from "app/models/Properties";
import ServicePrivate from "../../server/ServerPrivate";
import ApiBack from "../../utilities/domains/ApiBack";

export const SearchResults = () => {
  const [myProperties, setProperties] = useState<Properties[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  const fetchProperties = async (query: string) => {
    const result = await ServicePrivate.petitionGET(
      `${ApiBack.PROPERTY_SORT}?${query}`
    );
    setProperties(result);
  };

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [stratum, setStratum] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [state, setState] = useState("");
  const [neighbors, setNeighbors] = useState("");

  const history = useNavigate();

  const handleCardClick = (propertyId: number) => {
    navigate(`/propertyinfo/${propertyId}`);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);
    if (stratum) params.append("stratum", stratum);
    if (propertyType) params.append("property", propertyType);
    if (state) params.append("state", state);
    if (neighbors) params.append("neighbourhood", neighbors);

    history(`/search-results?${params.toString()}`);
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search).toString();
    fetchProperties(query);
  }, [location.search]);

  return (
    <div>
      <div className="row">
        <div className="col-lg-4 col-sm-12 ">
          <section className="form-20" id="home">
            <div className="">
              <div className="container form-static-lg">
                <div className="grid">
                  <div className="column1 ">
                    <form onSubmit={handleSearch}>
                      <div className="form">
                        <input
                          type="search"
                          className="form-control m-1"
                          onChange={(e) => setNeighbors(e.target.value)}
                          placeholder="Sector"
                          name="neighbourhood"
                        />
                        <div className="form d-flex">
                          <input
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            className="form-control m-1"
                            placeholder="Precio Mínimo"
                            name="minPrice"
                          />
                          <input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="form-control m-1"
                            placeholder="Precio Máximo"
                            name="maxPrice"
                          />
                        </div>
                        <div className="form-top">
                          <select
                            value={stratum}
                            onChange={(e) => setStratum(e.target.value)}
                            className="form-control"
                          >
                            <option value="">Estrato</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                          </select>
                          <select
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className="form-control"
                          >
                            <option value="">Tipo de Propiedad</option>
                            <option value="1">Apartamento</option>
                            <option value="2">Casa</option>
                            <option value="3">finca</option>
                            {/* Agrega más opciones según sea necesario */}
                          </select>
                          <select
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="form-control"
                          >
                            <option value="">Estado</option>
                            <option value="1">Nuevo</option>
                            <option value="2">Usado</option>
                            <option value="3">Renovada</option>
                            {/* Agrega más opciones según sea necesario */}
                          </select>
                          <button type="submit" className="btn form-control">
                            Buscar
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="row mt-5 pt-3">
            {myProperties.map((myProperty, index) => (
                <div
                className="profile-card-4 text-center"
                key={myProperty.propertyId}
                onClick={() => handleCardClick(myProperty.propertyId)}
                style={{ cursor: 'pointer' }}
              >
                {Array.isArray(myProperty.images) &&
                myProperty.images.length > 0 ? (
                  <img
                    src={myProperty.images[0].image_base64}
                    className="img img-responsive"
                    alt={myProperty.images[0].name_img}
                  />
                ) : (
                  <img
                    src="URL_A_IMAGEN_POR_DEFECTO"
                    className="img img-responsive"
                    alt="Imagen no disponible"
                  />
                )}
                <div className="profile-content">
                  <div className="profile-name">{myProperty.title}</div>
                  <div className="profile-description">
                    <h6>PRECIO</h6>
                    {myProperty.price}
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="profile-overview">
                        <p>Area</p>
                        <h4>{myProperty.areaConstruida}m</h4>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="profile-overview">
                        <p>Habitaciones</p>
                        <h4>{myProperty.habitaciones}</h4>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="profile-overview">
                        <p>Baños</p>
                        <h4>{myProperty.bannos}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
