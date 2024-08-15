import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

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

  constructor(private router: Router,private storage: Storage) { }

  ngOnInit() {
    console.log(" hola intro")
  }

  ionViewWillEnter(){
    console.log(" estoy cargando la pagina")

  }
  ionViewDidEnter(){
    console.log("ya se cargo la pagina")
  }

  close() {

    //console.log("estoy cerrando la intro")
this.storage.set("inIntroShowed",true)

this.router.navigateByUrl("/home");
  }
}
