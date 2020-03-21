import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pallier } from '../model/pallier';
import { Product} from '../model/product';
import { World } from '../model/world';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {

  server = "http://localhost:8080/"
  user = "";

  public getServer() : string
  {
    return this.server;
  }

  public getUser() : string
  {
    return this.server;
  }

  public setServer(server: string)
  {
    this.server = server;
  }

  public setUser(user: string)
  {
    this.user = user;
  }

  constructor(private http: HttpClient) {
  
   }
   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
   }
   getWorld(): Promise<World> {
     console.log("get world");
    return this.http.get(this.server + "demo/generic/world")
    .toPromise().catch(this.handleError);
   };

   private setHeaders(user: string): HttpHeaders {
     var headers = new HttpHeaders();
     headers.append("X-User",user);
     return headers;
   }
  
}
