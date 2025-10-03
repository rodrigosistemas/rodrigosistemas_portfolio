import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'nz-buttons-display',
  imports: [NzButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonsDisplayComponent {

  constructor(private showedCard:SharingDataService) {

  }

  showProjects(): void {
    
  }

}
