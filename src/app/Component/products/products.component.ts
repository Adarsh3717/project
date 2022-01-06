import { Component, OnInit } from '@angular/core';
import product from '../../Json_files/product.json';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: any[] = product;
  filterCategory: any;

  constructor( private cartService : CartService) { }

  ngOnInit(): void {
    this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.cost});
    });     
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
function subscribe(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}

