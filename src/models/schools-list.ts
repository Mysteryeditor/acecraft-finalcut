export interface SchoolsList {
    id:number,
    name:string,
    image:string
}

// for the actual products display
export interface Products {
    title: string;
    productCode: string;
    brand: string;
    soldBy: string;
    price: number;
    originalPrice: number;
    offerPercent: number;
    gender: string;
    size: number[];
    description: string[];
    imgSrc: string;
  }


//   for the cart description
  export interface cartDesc{
    id:number,
    name:string,
    imgUrl:string,
    quantity:number,
    price:number,
    size:number | string,
    originalPrice:number,
    discount:number,
    totalAmount:number,
    subtotal:number
  }
