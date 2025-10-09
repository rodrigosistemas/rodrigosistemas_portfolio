import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardBasicComponent } from "../../components/card/card.component";
import { ButtonsDisplayComponent } from "../../components/buttons-display/buttons-display.component";

@Component({
  selector: 'app-portfolio',
  imports: [NzButtonModule, NzCardBasicComponent, ButtonsDisplayComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
