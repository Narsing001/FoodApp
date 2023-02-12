export class Foods{
    id!:number;
    price!:number;
    name!:string;
    fav:boolean=false;
    star:number=0;
    tags?:string[];
    imgurl!:string;
    cookTime!:string;
    origins!:string[];
}