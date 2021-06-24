import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {

  nuevoProducto:any = {
    nombre:'',
    descripcion:'',
    stock:0,
    precio:0,
    colores:['#eee'],
    fotos:['https://picsum.photo/200']

  }
  constructor(private _sProducto:ProductoService, private router:Router) { }

  ngOnInit(): void {
  }

  createProducto(){
    // console.table(this.nuevoProducto)
    this._sProducto.crearProducto(this.nuevoProducto)
    .subscribe(()=>{
      Swal.fire({
        title:'Producto Creado',
        icon:'success',
        timer:2000,
        showConfirmButton:false
      }).then(()=>{
        // this.router.navigate([URl donde se quiere ir])
        this.router.navigate([''])
      })
    })
  }

}
