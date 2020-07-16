import { Component, OnInit, Input } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ArchivosService} from '../archivos.service';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {
title:String;
content:String;
  @Input() body:any;
  @Input() informacion:any;
  @Input() index:number;
  constructor(private modal:ModalController,private server:ArchivosService,private date:DatePipe) { }


  home(){
    this.modal.dismiss();
  }

  save(){
  if(this.index==null){

    var creado=this.date.transform(new Date());
 this.body.title=this.title;
this.body.content=this.content;
this.body.creado=creado;
this.informacion.push(this.body)
  }else{

    this.informacion[this.index]=this.body;
  }
console.log(JSON.stringify(this.informacion))
  localStorage.setItem('informacion',JSON.stringify(this.informacion));
  this.modal.dismiss({informacion:this.informacion});
  }
  ngOnInit() {
    if(this.index!=null){
      this.title=this.body.title;
      this.content=this.body.content
    }
  }

}
