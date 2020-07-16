import { Component, OnInit, Input } from '@angular/core';
import {ArchivosService} from '../archivos.service';
import {DatePipe} from '@angular/common';
import {ModalController} from '@ionic/angular'
  
@Component({
  selector: 'app-memos',
  templateUrl: './memos.page.html',
  styleUrls: ['./memos.page.scss'],
})
export class MemosPage implements OnInit {
@Input() informacion:Array<any>;
@Input() index:number;
@Input()  body:any;


update:boolean=false;
 origen:String;
 destinatario:String;
 asunto:String;
 lugar:String;
 fecha:Date;
 cuerpo:String;
 despedida:String;
  
  constructor(private post:ArchivosService,private date:DatePipe,private modal:ModalController) { }

home(){
this.modal.dismiss();
}
  actualizar(){

  this.update=true;


}
  save(){
   
    var arreglo=JSON.parse(localStorage.getItem('informacion'));
 console.log("memo info "+arreglo);
  
  if(this.index==null){
    var creado=this.date.transform(new Date());
  }

console.log("arreglo: "+this.informacion);
  

if(this.index==null){
this.body.origen=this.origen;
this.body.destinatario=this.destinatario;
this.body.asunto=this.asunto;
this.body.lugar=this.lugar;
this.body.fecha=this.fecha;
this.body.cuerpo=this.cuerpo;
this.body.despedida=this.despedida;
this.body.creado=creado;
 this.informacion.push(this.body)
}else{
  console.log("solo si se actualiza")
  this.body.origen=this.origen;
  this.body.destinatario=this.destinatario;
  this.body.asunto=this.asunto;
  this.body.lugar=this.lugar;
  this.body.fecha=this.fecha;
  this.body.cuerpo=this.cuerpo;
  this.body.despedida=this.despedida;
  this.informacion[this.index]=this.body;
}
console.log(this.informacion)

  



  
  
  localStorage.setItem('informacion',JSON.stringify(this.informacion));
this.modal.dismiss({informacion:this.informacion});
}
  ngOnInit() {
   if(this.index!= null){

    this.origen=this.body.origen;
    this.destinatario=this.body.destinatario;
    this.asunto=this.body.asunto;
    this.lugar=this.body.lugar;
    this.fecha=this.body.fecha;
    this.cuerpo=this.body.cuerpo;
    this.despedida=this.body.despedida;
   }
  }

}
