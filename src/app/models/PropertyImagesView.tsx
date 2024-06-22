class PropertyImages {
    imageId: number;
    propertyId: number;
    imageBase64: string;
    nameImg: string;
  
    constructor(
      imageId: number,
      propertyId: number,
      imageBase64: string,
      nameImg: string
    ) {
      this.imageId = imageId;
      this.propertyId = propertyId;
      this.imageBase64 = imageBase64;
      this.nameImg = nameImg;
    }
  }
  export default PropertyImages;
  