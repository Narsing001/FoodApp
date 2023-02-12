import { Injectable } from '@angular/core';
import { Foods } from '../Shared/models/food';
import { Tag } from '../Shared/models/tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag:string):Foods[]{
     if(tag=='All')
     {
       return this.getAll()
     }
     else{
       return this.getAll().filter(food=>food.tags?.includes(tag));
     }
  }
  getAllTag():Tag[]{
    return[
      {name:'All',count:14},
      {name:'FastFood',count:4},
      {name:'Pizza',count:2},
      {name:'Fry',count:0},
      {name:'soup',count:1},
      {name:'Lunch',count:3},
      {name:'Slowfood',count:0},
    ]
  }
  getAll(){
    return[
      {
         id:1,
         name:"chiken role",
         price:10,
         cookTime:"10-20",
         fav:true,
         star:4.5,
         origins:['Canda','India'],
         tags:['FastFood','Lunch'],
         imgurl:'/assets/Images/foodimg-1.jpg'
       },
       {
        id:2,
        name:"pizza",
        price:15,
        cookTime:"20-25",
        fav:true,
        star:3.4,
        origins:['USA'],
        tags:['Lunch','Pizza'],
        imgurl:'/assets/Images/foodimg-2.jpg'
      },
      {
        id:3,
        name:"Burger",
        price:8,
        cookTime:"10-25",
        fav:false,
        star:4,
        origins:['England','India'],
        tags:['Lunch'],
        imgurl:'/assets/Images/foodimg-3.jpg'
      },
      {
        id:4,
        name:"Chess-Pizza",
        price:25,
        cookTime:"30-35",
        fav:false,
        star:3.5,
        origins:['India'],
        tags:['Lunch','Pizza'],
        imgurl:'/assets/Images/foodimg-4.jpg'
      },
      {
        id:5,
        name:"Pavbhaji with chess",
        price:25,
        cookTime:"25-35",
        fav:false,
        star:3.6,
        origins:['India'],
        tags:['Lunch'],
        imgurl:'/assets/Images/foodimg-5.jpg'
      },
      {
        id:6,
        name:"Ice-Cream",
        price:25,
        cookTime:"10-20",
        fav:false,
        star:2.5,
        origins:['India'],
        tags:['FastFood','Lunch'],
        imgurl:'/assets/Images/foodimg-6.jpg'
      },
      {
        id:7,
        name:"Chines-Nodules",
        price:25,
        cookTime:"20-30",
        fav:false,
        star:4.3,
        origins:['India'],
        tags:['FastFood','soup'],
        imgurl:'/assets/Images/foodimg-7.jpg'
      },
      {
        id:8,
        name:"Veg-Role",
        price:25,
        cookTime:"30-40",
        fav:false,
        star:3.5,
        origins:['India'],
        tags:['FastFood'],
        imgurl:'/assets/Images/foodimg-8.jpg'
      }
    ]
  }
}
