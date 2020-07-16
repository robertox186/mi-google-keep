import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

 login(info:any){
let options = {
  headers: {
    'Content-Type': 'application/json',
   
  }

}
console.log("llegue")
var url="https://my-google-keep.herokuapp.com/login";
return new Promise(resolve => {
this.http.post(url,info,options)
   .subscribe(data => {
     console.log(data)
     resolve(data);
    });
});

}
registro(info){
  let options = {
    headers: {
      'Content-Type': 'application/json',
     
    }

}
console.log("llegue")
var url="https://my-google-keep.herokuapp.com/registro";
return new Promise(resolve => {
  this.http.post(url,info,options)
     .subscribe(data => {
       console.log(data)
       resolve(data);
      });
 });


}
}