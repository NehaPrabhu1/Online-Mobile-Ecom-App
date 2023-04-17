import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartProduct:any=[];
  singleProduct: any;
  minQuantity:number=1;
  maxQuantity:number=5;
  public updatedCartProduct:any;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getCartProducts().subscribe((product)=>{
      this.cartProduct=product;
      if(this.cartProduct.length>=1)
        this.singleProduct = this.cartProduct[0];
      console.log(this.cartProduct);
     })
  }

  deleteFromCart(id:number){
    if(confirm ('Do you want to remove this product ?'))
     this.cartService.deleteProductFromCart(id).subscribe((response)=>{
      console.log("Data Deleted - ",response);
      alert("Product Deleted Succesfully")
      this.ngOnInit();
    })
}

validateInput(event:any,i:number){
  const q = parseInt(event.target.value);
  console.log(q);
}

increaseQuantity (cartProduct:any){
 if(cartProduct.quantity<this.maxQuantity){
  cartProduct.quantity++;
  this.updatedCartProduct=cartProduct;
  this.cartService.updateCartProduct(this.updatedCartProduct,cartProduct.id).subscribe(res =>
    console.log(cartProduct));
}
}

decreaseQuantity(cartProduct:any){
  console.log(cartProduct);
  if(cartProduct.quantity>this.minQuantity){
    cartProduct.quantity--;
    this.updatedCartProduct=cartProduct;
    this.cartService.updateCartProduct(this.updatedCartProduct,cartProduct.id).subscribe(res =>
      console.log(cartProduct));
  }
}

}
