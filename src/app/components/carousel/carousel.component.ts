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

  imageRoute: string = 'images/badges/';

  arrayOfImgUrls = [ `${this.imageRoute}CCNAv7IntroductiontoNetworks.jpg`, `${this.imageRoute}CCNAFundamentosRedes.jpg`, `${this.imageRoute}CiscoEthicalHacker.jpg`, `${this.imageRoute}CiscoJuniorCybersecurityAnalyst.jpg`, `${this.imageRoute}JiraGestionProyectos.jpg`, `${this.imageRoute}PentestingWeb.jpg`, `${this.imageRoute}AWSCertifiedDeveloperAssociate.jpg`, `${this.imageRoute}AZ900.jpg`];
}



