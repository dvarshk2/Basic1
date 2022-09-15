import { Component, OnInit } from "@angular/core";



@Component({
    selector:'app-product',
    templateUrl:'./product.component.html',
    // styleUrls: ['./product.component.scss']
    styles : [`
            p{
                font-size: 24px;
            }
    `]
})
export class ProductComponent implements OnInit{
    productName:string = "Mobile";
    productId:number = 10;
    isProductAvailable!: boolean;

    ngOnInit(): void {
    //   if(Math.random() > 0.5){
    //     this.isProductAvailable = true;
    //   }else{
    //     this.isProductAvailable = false;
    //   }
    this.isProductAvailable = (Math.random() > 0.5) ? true : false;
    }
    // private getProductId(){
    //     this.productId;
    // }
    // angular can't access private properties 
    getProductId(){
        return this.productId ;
    }
    getBgColor(){
        // return 'orange';
        return this.isProductAvailable === true ? 'orange' : '#ccc' ;// different color for available and not available products
    }
}