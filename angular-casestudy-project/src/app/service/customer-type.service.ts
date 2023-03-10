import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customerType";
import {Customer} from "../model/customer";

 const CUSTOMER_TYPE_URL = `${environment.apiUrlCustomerType}`

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private  httpClient: HttpClient) { }

  getAllCustomeType(): Observable<CustomerType[]>{
      return this.httpClient.get<CustomerType[]>(CUSTOMER_TYPE_URL)
  }



}
