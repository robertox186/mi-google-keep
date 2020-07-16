import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';
import { NavController } from '@ionic/angular';
import {AuthService} from '../auth.service';
import  {ArchivosService} from '../archivos.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  

  myForm:FormGroup = this.fb.group({
    names: [, [Validators.required]],
    email: [, [Validators.required,Validators.email]],

    password: [, [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/)]],
    pass2: [, [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/)]],
    
    edad: [, [Validators.required,Validators.minLength(15),Validators.maxLength(100)]]
  });
  respuesta:any;
  constructor(public navCtrl: NavController,
    public fb: FormBuilder,private user:AuthService, private routrer:Router,private archivo:ArchivosService) { }
registro(){
 
    if(this.pass(this.myForm.value.password,this.myForm.value.pass2)){

      this.user.registro(JSON.stringify(this.myForm.value)).then(
        (res) => { 
          this.respuesta= res;
          console.log(this.respuesta);
          if(this.respuesta.status==200){
localStorage.setItem('user',this.respuesta.body._id);
localStorage.setItem('informacion', JSON.stringify([]));



this.routrer.navigate(['/home']);
          }
        },
        (error) =>{
          console.error(error);
        }
      );
    
    }else{
      alert("las contrasenas no coinciden")
    }


}
pass(pass,pass2):any{
  if(pass==pass2){
    return true;
  }else{
    return false;
  }
}
ngOnInit() {
  }

}
