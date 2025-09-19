import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardBasicComponent } from "../../components/card/card.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-portfolio',
  imports: [NzButtonModule, NzCardBasicComponent, ButtonComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
