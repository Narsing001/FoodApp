import { cartitem } from "./CartItem";
export class Cart{
    item:cartitem[]=[];

    get totalPrice():number{
          let totalPrice=0;
          this.item.forEach(item=>{
             totalPrice =+item.Price;
          });
          return totalPrice;
    }
}