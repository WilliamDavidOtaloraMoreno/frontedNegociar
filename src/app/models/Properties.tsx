import Neighborhoods from "./Neighborhoods";
import PropertyImages from "./PropertyImages";

class Properties {
  public propertyId: number;
  public title: string;
  public description: string;
  public price: number;
  public address: string;
  public city: string;
  public state: string;
  public propertyType: string;
  public images: PropertyImages[];
  public neighborhoodId: number;
  public estratoSocial: string;
  public areaConstruida: string;
  public bannos: string;
  public habitaciones: string;
  public parqueadero: string;

  constructor(
    properId: number,
    title: string,
    description: string,
    price: number,
    address: string,
    city: string,
    state: string,
    propertyType: string,
    images: PropertyImages[],
    neig: number,
    estratoSocial: string,
    areaConstruida: string,
    bannos: string,
    habitaciones: string,
    parqueadero: string
  ) {
    this.propertyId = properId;
    this.title = title;
    this.description = description;
    this.price = price;
    this.address = address;
    this.city = city;
    this.state = state;
    this.propertyType = propertyType;
    this.images = images;
    this.neighborhoodId = neig;
    this.estratoSocial = estratoSocial;
    this.areaConstruida = areaConstruida;
    this.bannos = bannos;
    this.habitaciones = habitaciones;
    this.parqueadero = parqueadero;
  }
}
export default Properties;
