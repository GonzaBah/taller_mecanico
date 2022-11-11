import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-empleado',
  templateUrl: './pagina-empleado.page.html',
  styleUrls: ['./pagina-empleado.page.scss'],
})
export class PaginaEmpleadoPage implements OnInit {

  constructor(private router: Router, private activedRouter: ActivatedRoute) {
    
   }

  ngOnInit() {
  }

}
