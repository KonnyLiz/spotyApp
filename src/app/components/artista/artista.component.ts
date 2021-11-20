import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  constructor(
    private acrRoute: ActivatedRoute
  ) { 
    this.acrRoute.params.subscribe(params => {
      console.log(params['id']);
    })
  }
}
