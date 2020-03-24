import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pallier } from '../model/pallier';
import { Product} from '../model/product';
import { World } from '../model/world';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {

  server = "http://localhost:8080/";
  user = "";

  constructor(private http: HttpClient) { }

  public getUser() : string{
    return this.user;
  }
  public setUser(user : string){
    this.user = user;
  }

  public getServer() : string{
    return this.server;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
   }

   getWorld(): Promise<World> {
    return this.http.get(this.server + "generic/world", {
      headers: this.setHeaders(this.user)})
    .toPromise().then(response => response)
    .catch(this.handleError);
   };

   private setHeaders(user : string) : HttpHeaders {
    var headers = new HttpHeaders();
    headers.append("X-User",user);
    return headers;
   };

   putManager(manager : Pallier): Promise<Response> {
    return this.http.put(this.server + "generic/manager",manager,{
      headers: this.setHeaders(this.user)})
    .toPromise().then(response => response)
    .catch(this.handleError);
   };

   putProduit(product : Product): Promise<Response> {
    return this.http.put(this.server + "generic/product",product,{
      headers: this.setHeaders(this.user)})
    .toPromise().then(response => response)
    .catch(this.handleError);
   };

   public putUpgrade(upgrade: Pallier): Promise<Response> {
    console.log(upgrade);
    return this.http
      .put(this.server + "api/upgrade", upgrade, {
        headers: { "X-user": this.getUser() }
      })
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

   
}