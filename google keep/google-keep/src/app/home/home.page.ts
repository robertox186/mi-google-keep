import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
respuesta:any={

  body:[{
type:"nota",
title:"titulo",
content:"este es el contenido"

  },{
    type:"nota",
    title:"titulo",
    content:"este es el contenido"
    
      },{
        type:"nota",
        title:"titulo",
        content:"este es el contenido"
        
          },{
            type:"nota",
            title:"titulo",
            content:"este es el contenido"
            
              }]
}
  constructor() {
   
  }

}
