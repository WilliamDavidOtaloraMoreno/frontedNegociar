import Neighborhoods from "./Neighborhoods";

class Properties {
  public propertyId: number;
  public title: string;
  public description: string;
  public price: number;
  public address: string;
  public city: string;
  public state: string;
  public propertyType: string;
  public nameImg: string;
  public imgBase64: string;
  public neighborhoodId: number;
  public estratoSocial: string;
  public areaConstruida: string;
  public bannos: string;
  public habitaciones: string;
  public parqueadero: string;

  constructor(
    properid: number,
    title: string,
    description: string,
    price: number,
    address: string,
    city: string,
    state: string,
    propertyType: string,
    nameImg: string,
    imgBase64: string,
    neig: number,
    estratoSocial: string,
    areaConstruida: string,
    bannos: string,
    habitaciones: string,
    parqueadero: string
  ) {
    this.propertyId = properid;
    this.title = title;
    this.description = description;
    this.price = price;
    this.address = address;
    this.city = city;
    this.state = state;
    this.propertyType = propertyType;
    this.nameImg = nameImg;
    this.imgBase64 = imgBase64;
    this.neighborhoodId = neig;
    this.estratoSocial = estratoSocial;
    this.areaConstruida = areaConstruida;
    this.bannos = bannos;
    this.habitaciones = habitaciones;
    this.parqueadero = parqueadero;
  }
}
export default Properties;
