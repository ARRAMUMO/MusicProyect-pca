import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides = [
    {
      title:" titulo de slide 1",
      icon: "caret-forward-circle-outline",
      avatar: "https://thumbs.dreamstime.com/z/avatar-de-dj-que-juega-la-m%C3%BAsica-gr%C3%A1fico-73243163.jpg",
      image:"assets/imagenes/burro con gafas 1.jpg",
      description: "Texto del slide 1"

    },
    {
      title:" titulo de slide 2",
      icon: "caret-forward-circle-outline",
      avatar: "https://thumbs.dreamstime.com/z/avatar-de-dj-que-juega-la-m%C3%BAsica-gr%C3%A1fico-73243163.jpg",
      image:"assets/imagenes/burro con gafas 1.jpg",
      description: "Texto del slide 1"

    }, {
      title:" titulo de slide 3",
      icon: "caret-forward-circle-outline",
      avatar: "https://thumbs.dreamstime.com/z/avatar-de-dj-que-juega-la-m%C3%BAsica-gr%C3%A1fico-73243163.jpg",
      image:"assets/imagenes/burro con gafas 1.jpg",
      description: "Texto del slide 1"

    },{
      title:" MUSIC-IN ",
      icon: "caret-forward-circle-outline",
      avatar: "https://thumbs.dreamstime.com/z/avatar-de-dj-que-juega-la-m%C3%BAsica-gr%C3%A1fico-73243163.jpg ",
      image:"assets/imagenes/burromusical.jpg",
      description: "MUSIC-IN. Musica mas sonada actual"

    }
  ]

  constructor() {}

}
