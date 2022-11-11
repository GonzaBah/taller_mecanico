import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {  AnimationController, AlertController, Platform, ToastController } from '@ionic/angular';
import { SqliteService } from '../services/sqlite.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
password:string;
correo:string;

  varProg: boolean = false;
  users: any = [
    {
      id_usuario: '',
      correo: '',
      clave: '',

      rut: '',
      rol_id: ''
    }
  ]

  constructor(public toastController: ToastController, private router: Router, private animationCtrl: AnimationController, private dbService: SqliteService, private alertController: AlertController,) {
    
  }

  ngOnInit(){
   this.dbService.dbState().subscribe(res => {
      if (res) {
        this.dbService.fetchUsers().subscribe(item => {
          this.users = item;
        }
        )

      }
    })

  }
  
  async inicioToast(var1: string){
    const toast = await this.toastController.create({
      message: 'Bienvenido '+var1,
      duration: 1500
    });
    toast.present();
  }
 sendData() {
    let counter: number = 0;
    this.users.forEach(count);
    function count() {
      counter += 1;
    }
    for (let u in this.users) {
      if (this.users[u].correo == this.correo && this.users[u].clave == this.password) {
        if (this.users[u].rol_id == 1) {

        this.presentToast("empleados no implementados!");
        }
        else if (this.users[u].rol_id == 2) {

          this.router.navigate(['/pagina-principal']);
        }
      } else {
        counter -= 1;
      }
      if (counter == 0) {
        this.presentToast("Usuario o contraseña incorrectos.");
      }
    }

  }
  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      icon: 'globe'
    });

    await toast.present();
  }
  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
