import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http:HttpClient) { }

  getAllBrands(){
    return this.http.get<any[]>('http://localhost:3001/brands');
  }

  getBrandById(id:number){
    return this.http.get<any>('http://localhost:3001/brands/'+id);
  }
}
