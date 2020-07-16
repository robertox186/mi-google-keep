import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArchivosService {

  constructor(public http: HttpClient) { }

NewMemo(info:any){

  let options = {
    headers: {
      'Content-Type': 'application/json',
     
    }
  
  }

  console.log("llegue")
  var url="http://localhost:3000/create";
  return new Promise(resolve => {
  this.http.post(url,info,options)
     .subscribe(data => {
       console.log(data)
       resolve(data);
      });
  });


}
selectNota(info:any){

  let options = {
    headers: {
      'Content-Type': 'application/json',
     
    }
  
  }
  
  console.log("llegue")
  var url="http://localhost:3000/select";
  return new Promise(resolve => {
  this.http.post(url,info,options)
     .subscribe(data => {
       console.log(data)
       resolve(data);
      });
  });


}
updateNotas(info:any){

  let options = {
    headers: {
      'Content-Type': 'application/json',
     
    }
  
  }
  
  console.log("llegue")
  var url="https://my-google-keep.herokuapp.com/update";
  return new Promise(resolve => {
  this.http.post(url,info,options)
     .subscribe(data => {
       console.log(data)
       resolve(data);
      });
  });


}

}
