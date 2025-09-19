import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'nz-card-basic',
  imports: [NzCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class NzCardBasicComponent {

  names: string[] = ['Dashboard en Excel Osiptel', 'Análisis de Datos de Ventas Amazon', 'Core Banking System en Java'];
  
  descriptions: string[] = [''

  ]

}


