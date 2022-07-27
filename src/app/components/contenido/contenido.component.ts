import { Component, Input, OnInit } from '@angular/core';

export interface Alumno {
  nombre: string;
  nota: number;
  estado: string;
}
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
})
export class ContenidoComponent implements OnInit {
  public claseA: Alumno[] = [
    { nombre: 'Gaston', nota: 10, estado: 'Aprobado' },
    { nombre: 'Lara', nota: 9, estado: 'Aprobado' },
    { nombre: 'Daniela', nota: 10, estado: 'Aprobado' },
    { nombre: 'Pepe', nota: 4, estado: 'Reprobado' },
    { nombre: 'Oscar', nota: 5, estado: 'Reprobado' },
    { nombre: 'Emmanuel', nota: 10, estado: 'Aprobado' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
