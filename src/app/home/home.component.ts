import { Component, OnInit } from '@angular/core';
import { FoodService } from '../Services/food.service';
import { Foods } from '../Shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[]=[];
  constructor(private fs:FoodService,private Aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Aroute.params.subscribe(params=>{ 
      if(params['searchItem'])
      {
        this.foods=this.fs.getAll().filter(food=>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      }
      else if(params['tag']){
        this.foods=this.fs.getAllFoodByTag(params['tag'])
      }
      else{
        this.foods=this.fs.getAll();
      }
    })
   }
  }
