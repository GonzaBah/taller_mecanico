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
    
   }
  cardClick(){
    console.log("btn Clicked");
    alert("THE GAME")
  }

  ngOnInit() {
  }

}
