import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products=[]
title="";
  constructor(private service: ProductService) { }
  ngOnInit() {
    this.service.getProducts().subscribe(response=>{
      if(response['status']==='success'){
this.products =response['data'] as any[];

for(let m of this.products){


}
      }else{
        console.log('error',response['error'])
      }
    })  }

}
