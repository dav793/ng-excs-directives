import { Component } from '@angular/core';

/**
 * ATTRIBUTE DIRECTIVES:
 *  - Que hacen? Cambian la apariencia o comportamiento de un elemento, componente, u otra directiva.
 *  - Cuales son algunos ejemplos? [hidden], [ngClass], [style]
 *  - Como puedo crear mi propia directiva para resaltar elementos de texto en templates?
 *  - Como puedo extender mi directiva para que resalte el elemento unicamente cuando el mouse le pase por encima?
 *  - Como puedo pasar a mi directiva un color para ser aplicado dinamicamente en el resaltado?
 *  - Como puedo evaluar el color programaticamente mediante una funcion o variable?
 *  - Como puedo eliminar la variable highlightColor y en vez pasar directamente el color usando el mismo nombre de la directiva?
 *  - Como puedo agregar un color por defecto, para ser usado en caso de que no se provea uno?
 *
 * STRUCTURAL DIRECTIVES:
 *  - Que hacen? Cambian la estructura del DOM agregando, removiendo o manipulando elementos.
 *  - Cuales son algunos ejemplos? *ngIf, *ngFor
 *  - Como puedo crear mi propia directiva para lograr un comportamiento opuesto a *ngIf?
 *
 * EXTRA:
 *  - Para que sirve <ng-container>?
 *
 *  Notas:
 *    - Se pueden aplicar muchas directivas de atributo a un solo elemento, pero se puede aplicar solo una directiva estructural por elemento.
 *
 *    - <ng-template> es un concepto de Angular avanzado. Permite construir componentes altamente personalizables y reutilizables.
 *      Una vez que tengamos mejor conocimiento sobre Angular, podemos dedicar una sesion a aprender a usar <ng-template>.
 *
 *    - Si lo desea puede aprender mas sobre <ng-container> y <ng-template> en: https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // condition = false;

}
