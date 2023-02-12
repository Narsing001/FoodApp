import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent implements OnInit {
 searchItem:string=''
  constructor(private rouetr:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.rouetr.params.subscribe(params=>{
      if(params['searchItem'])
      this.searchItem=params['serchItem'];
    })
  }

  search():void{
    if(this.searchItem)
    this.route.navigateByUrl('/search/'+this.searchItem)
  }

}
