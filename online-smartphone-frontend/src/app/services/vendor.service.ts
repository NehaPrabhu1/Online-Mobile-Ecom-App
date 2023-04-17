import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }

  getAllVendors(){
    return this.http.get<any[]>('http://localhost:3001/vendors');
  }

  getVendorById(id:number){
    return this.http.get<any>('http://localhost:3001/vendors/'+id);
  }

  addNewVendor(vendor:any){
    return this.http.post('http://localhost:3001/vendors/addVendor',vendor);
  }
}
