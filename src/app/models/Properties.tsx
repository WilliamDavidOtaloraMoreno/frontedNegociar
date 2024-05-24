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
  public neignborhoodName: Neighborhoods;
  public estratoSocial: string;

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
    neig: Neighborhoods,
    estratoSocial: string
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
    this.neignborhoodName = neig;
    this.estratoSocial = estratoSocial;
  }
}
export default Properties;
