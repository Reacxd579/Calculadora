import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeItem: string = 'calculadora'; // Elemento activo inicial
  iconColor: string = '#ffffff'; // Color de iconos inicial
  queztalesIconColor: string = '#ffffff'; // Color de iconos de "Queztales" inicial
  queztalesSelected: string = 'Seleccione moneda'; // Texto inicial en "Queztales"

  // Método para cambiar el elemento activo y el color de los iconos
  setActiveItem(item: string) {
    this.activeItem = item;
    this.iconColor = '#000000'; // Cambiar el color de los iconos a negro
  }

  // Método para cambiar el color de los iconos de "Queztales" y su texto
  setQueztales(iconColor: string, selected: string) {
    this.queztalesIconColor = iconColor;
    this.queztalesSelected = selected;
  }
}
