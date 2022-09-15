import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products', 
  // selector: '[app-products]', //selector as attribute
  // selector: '.app-products', // selector as class
  templateUrl: './products.component.html',
  // template: "<p>Hello Template</p>",
  // for one or two line code will not create separate File, instead write html here 
  // template:`
  //     <app-product></app-product>
  //     <app-product></app-product>
  // `,
  styleUrls: ['./products.component.scss']
 
})
export class ProductsComponent implements OnInit {
  isDisabled:boolean = false;
  productStatus :string ="No Product added yet!";
  productName:string ='';
  isProductAdded:boolean =false;
  // productName:string ='Samsung Mobile';
  constructor() { }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.isDisabled = false;
    }, 5000);
  }
//  onInit will execute as soon as component initialised, 
// add product button will be active after 5 second
  getNewProductStatus(){
    this.productStatus = `New Product Added and product is ${this.productName}`;
    this.isProductAdded = true;
  }
  // onProductUpdate(event:any){
  //   console.log(event.target.value);
  // }
  onProductUpdate(event:Event){ //typeOf argument is event
    let targetValue = (<HTMLInputElement>(event.target))?.value; //type casting done here
    console.log(targetValue);
    this.productName = targetValue;
  }
}
