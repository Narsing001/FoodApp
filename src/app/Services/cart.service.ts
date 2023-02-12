import { Injectable } from '@angular/core';
import { Cart } from '../Shared/models/Cart';
import { Foods } from '../Shared/models/food';


@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart=new Cart();



  addToCart(food:Foods):void{
       let cartitem=this.cart.item.find(item=>item.food.id===food.id);
       if(cartitem){
         this.changeQuantity(food.id , cartitem.Qunantity+1);
         return;
       }
       this.cart.item.push(new cartitem(food) );
  }
  removeFromCart(foodid:number):void{
    this.cart.item=this.cart.item.filter(item=>item.food.id!=foodid)
  }
  changeQuantity(Qunantity:number,foodid:number){
    let cartitem=this.cart.item.find(item=>item.food.id===foodid)
    if(!cartitem)return;
    cartitem.Qunantity=Qunantity;
  }
  getCart():Cart{
 return this.cart;
  }
  
}
