import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logueado:boolean = true

  alumnos:Array<string> =[
    "juan",
    "pedro",
    "pablo",
    "maria",
    "juana",
    "elena"
  ]

  url = "https://picsum.photos/200/300"

  texto = "Agua"
  constructor() { }

  ngOnInit(): void {
  }

  mostrarAlerta(){
    alert("El usuario ha hecho click")
  }

  agregarAlumno(){
    this.alumnos.push(this.texto)
    this.texto = ""
  }

}
