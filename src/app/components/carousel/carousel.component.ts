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
  arrayOfImgUrls = ['https://certifications-rodrigosistemas.s3.us-east-2.amazonaws.com/CCNAv7+Introduction+to+Networks.jpg', 'https://certifications-rodrigosistemas.s3.us-east-2.amazonaws.com/CCNA+Fundamentos+de+Conmutaci%C3%B3n+y+Enrutamiento+y+Redes+Inal%C3%A1mbricas.jpg', 'https://certifications-rodrigosistemas.s3.us-east-2.amazonaws.com/Cisco+Junior+Cybersecurity+Analyst.jpg', 'https://certifications-rodrigosistemas.s3.us-east-2.amazonaws.com/Cisco+Ethical+Hacker.jpg' ];
}



