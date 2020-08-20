
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'restaurant-directory',
  templateUrl: './restaurantDirectory.component.html',
  styleUrls: ['./restaurantDirectory.component.scss']
})
export class RestaurantDirectory implements OnInit {
  data:any[]=[]
  name:string
  city:string
  ngOnInit() {
    //this.myFunction()
  }

  myFunction(f){
  //  if(name=='' || name == null || city =='' || city ==null){

   
      console.log(f.value)
  // //this.data.push({name:name,city:city})
   this.data.push(f.value)
   this.data=this.data.slice()
     console.log(this.data)
    f.reset()

//    const restaurantList = getByTestId('restaurant-list');

  }
}
