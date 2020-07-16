import { Component } from '@angular/core';
import {PopoverController,ModalController} from '@ionic/angular'
import {PopoverComponent} from '../popover/popover.component';
import {ArchivosService} from '../archivos.service'
import {MemosPage} from '../memos/memos.page';
import {NotasPage} from '../notas/notas.page';
import{Router}  from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
respuesta:any;
index:number
info:Array<any>;
resp:any;
  constructor(private router:Router,public popoverController: PopoverController,private server:ArchivosService,private modal:ModalController ) {
   
  }
  cerrarSession(){
localStorage.clear();
this.router.navigate(['/login'])

  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        'informacion': this.info,
        'index': null
      }
    });
     await popover.present();
      
    const { data }=await popover.onDidDismiss();
  
  console.log("data "+ data)
    
    this.update(localStorage.getItem('informacion'));
  popover.dismiss();
  }
  async ModalNota(i:number){
    const modal = await this.modal.create({
      component: NotasPage,
       componentProps: {
        'informacion':this.info ,
        'index': i,
        'body':this.info[i]
      }
    });
    
     await modal.present();
    const { data }=await modal.onDidDismiss();
    
    this.update(localStorage.getItem('informacion'));
    
  }
  async ModalMemo(i:number){
    const modal = await this.modal.create({
      component: MemosPage,
      componentProps: {
        'informacion':this.info ,
        'index': i,
        'body':this.info[i]
      }
    
    });
    await modal.present();
    const { data }=await modal.onDidDismiss();
    
    this.update(localStorage.getItem('informacion'));
    
  }
  update(act:any){
    this.server.updateNotas({email:localStorage.getItem('user'),informacion:act}).then(res=>{
 
      
   this.info=JSON.parse(act)
   
   
   
   })
   
  }
  remove(i:number){
    this.info.splice(i,1);
    this.update(JSON.stringify(this.info));
    localStorage.setItem('informacion',JSON.stringify(this.info))
  }
  pincho(i:number){
    this.info[i].pincho=!this.info[i].pincho;
    this.update(JSON.stringify(this.info));
    localStorage.setItem('informacion',JSON.stringify(this.info))
  }
  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('informacion')));
this.info=JSON.parse(localStorage.getItem('informacion'));
console.log(this.info.length);
this.server.updateNotas({email:localStorage.getItem('user'),informacion:localStorage.getItem('informacion')}).then(res=>{
 
   console.log("res: "+this.respuesta);




})

  }
}
