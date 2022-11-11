import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
})

export class PaginaPrincipalPage implements OnInit {
  u: string = "";
  p: string = "";
  a: boolean = false;
  n: string = "";
  f: string = "";
  r: string = "";
  fe: string = "";

  
  constructor(private menuController: MenuController, private router: Router, private activedRouter: ActivatedRoute, private GeoLocalizacion: Geolocation) {
    this.activedRouter.queryParams.subscribe(params =>{
      if(!this.router.getCurrentNavigation().extras.state.user && this.router.getCurrentNavigation().extras.state.afil){
        this.a = this.router.getCurrentNavigation().extras.state.afil;
      }
      else if(this.router.getCurrentNavigation().extras.state){
        this.u = this.router.getCurrentNavigation().extras.state.user;
        this.p = this.router.getCurrentNavigation().extras.state.pass;
        this.a = this.router.getCurrentNavigation().extras.state.afil;
        this.n = this.router.getCurrentNavigation().extras.state.name;
        this.f = this.router.getCurrentNavigation().extras.state.fono;
        this.r = this.router.getCurrentNavigation().extras.state.rut;
        this.fe = this.router.getCurrentNavigation().extras.state.fech;
      }
    })
   }
  abrirPerfil(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.u,
        pass: this.p,
        afil: this.a,
        name: this.n,
        fono: this.f,
        rut: this.r,
        fech: this.fe
      }
    }
    this.router.navigate(['/perfil'], navigationExtras);
  }
  cardClick(){
    console.log("btn Clicked");
    alert("THE GAME")
  }

  ngOnInit() {
  }

}
