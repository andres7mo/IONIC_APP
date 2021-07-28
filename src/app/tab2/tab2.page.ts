import { Component } from '@angular/core';
import { Producto } from '../models/Producto';
import { ProductoServicesService } from '../services/producto-services.service';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  producto: Producto = new Producto();
  listaProductos: Producto[] = [];

  constructor(private productoService: ProductoServicesService) {}

  ionViewDidEnter(){
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productoService.listarProductos().subscribe((data: any) =>{
      this.listaProductos = data;
    });
  }

  agregarProducto() {

    this.productoService.guardarProducto(this.producto).subscribe((res: any) =>{
      this.producto = new Producto();
      this.obtenerProductos();
    });

  }


}
