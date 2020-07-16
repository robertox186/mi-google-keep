 import { Component, OnInit, Input } from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {MemosPage} from '../memos/memos.page';
import {NotasPage} from '../notas/notas.page';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
@Input() informacion:Array<any>;

  constructor(private modal:ModalController,private pop:PopoverController) { }
  async ModalNota(){
    const modal = await this.modal.create({
      component: NotasPage,
      componentProps:{
        'body':{title:'',content:'',creado:'',type:'nota',pincho:false},
        'informacion':this.informacion,
        'index':null
      }
    });
  
     await modal.present();
    const { data }=await modal.onDidDismiss();
    this.pop.dismiss(data);
  
  }
  async ModalMemo(){
    const modal = await this.modal.create({
      component: MemosPage,
      componentProps: {
        'informacion':this.informacion ,
        'index': null,
        'body':{
          type:"memo",
    origen:'',
     destinatario:'',
     asunto:'',
     lugar:'',
     fecha:'',
     cuerpo:'',
     despedida:'',
     pincho:false,
     creado:''
        }
      }
    });

  
     await modal.present();
  
    const { data }=await modal.onDidDismiss();
    this.pop.dismiss(data);
  }
  ngOnInit() {}

}
