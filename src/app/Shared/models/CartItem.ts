import { Foods } from "./food";

export class cartitem{
    constructor(food:Foods){
        this.food=food;
    
    } 
    
    food:Foods;
     Qunantity:number=1;
     get Price():number{
        return  this.food.price * this.Qunantity;
     }
}