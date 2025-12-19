import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import type { IconDefinition } from '@ant-design/icons-angular';
import { MailOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [MailOutline];

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})

export class ContactComponent implements AfterViewInit {
  @ViewChild('contactSection') contactSection!: ElementRef;

  ngAfterViewInit() {
    const el = this.contactSection.nativeElement;
    
    // Animación de entrada
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 80%', // Inicia cuando el 20% del componente es visible
      }
    });

    tl.from(el.querySelector('.section-title'), {
      y: 30, opacity: 0, duration: 0.6, ease: 'power2.out'
    })
    .from(el.querySelectorAll('.social-btn'), {
      scale: 0, 
      opacity: 0, 
      duration: 0.5, 
      stagger: 0.1, // Efecto cascada en los iconos
      ease: 'back.out(1.7)'
    }, '-=0.2');
  }
}
