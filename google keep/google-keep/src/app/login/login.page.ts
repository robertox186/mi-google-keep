import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';
import { NavController } from '@ionic/angular';
import{AuthService} from  '../auth.service';
import {ArchivosService} from '../archivos.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  elForm:FormGroup = this.fb.group({
    
    correo: [, [Validators.required,Validators.email]],

    password: [, [Validators.required]]
   
  });
recuerdame:boolean=false;
respuesta:any;
  constructor(  private info:ArchivosService,private router:Router, public fb: FormBuilder,public navCtrl: NavController,private auth:AuthService) { }
  
 iniciar(){


this.auth.login(JSON.stringify(this.elForm.value)).then(res=>{
this.respuesta=res;
console.log("res: "+this.respuesta);
if(this.respuesta.status==200){
  localStorage.setItem('user',this.respuesta.body.email);

  localStorage.setItem('informacion',this.respuesta.body.informacion); 
  
   this.router.navigate(['/home']);
  }else{
  alert("usuario u/o contrasenia incorrecto");
}
})
}// fin de iniciar

  ngOnInit() {
  }

}
