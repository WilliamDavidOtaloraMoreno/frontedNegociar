class PropertyImages {
  imageId: number;
  propertyId: number;
  image_base64: string;
  name_img: string;

  constructor(
    imageId: number,
    propertyId: number,
    image_base64: string,
    nameImg: string
  ) {
    this.imageId = imageId;
    this.propertyId = propertyId;
    this.image_base64 = image_base64;
    this.name_img = nameImg;
  }
}
export default PropertyImages;
