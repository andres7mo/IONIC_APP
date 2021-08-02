import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Usuario = {

    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
  };
  mostrarusuario: any;
  constructor() { }
  ngOnInit() {
  }
  async guardardato(){
    const {value}: any= await Storage.get({key: 'usuarios'});
    const listausuario= JSON.parse(value);
    listausuario.push(this.Usuario);
    Storage.set({key: 'usuarios', value: JSON.stringify(listausuario)});
    this.recuperar();
  }

  async recuperar(){
    const {value}: any= await Storage.get({key: 'usuarios'});
     this.mostrarusuario= JSON.parse(value);
  }
}
