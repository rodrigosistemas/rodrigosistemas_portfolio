import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'nz-carousel-autoplay',
  imports: [NzCarouselModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class NzCarouselAutoplayComponent {
  arrayOfImgUrls = ['images/badges/CCNAv7IntroductiontoNetworks.jpg', 'images/badges/CCNAFundamentosRedes.jpg', 'images/badges/CiscoEthicalHacker.jpg', 'images/badges/CiscoJuniorCybersecurityAnalyst.jpg'];
}



