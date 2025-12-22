import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { AccordionComponent } from "../../components/accordion/accordion.component";
import { NzCarouselAutoplayComponent } from "../../components/carousel/carousel.component";

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [AccordionComponent, NzCarouselAutoplayComponent],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('aboutSection', { static: true }) aboutSection!: ElementRef<HTMLElement>;
  private ctx?: gsap.Context;

  ngAfterViewInit(): void {
    const root = this.aboutSection.nativeElement;

    this.ctx = gsap.context(() => {
      // Helper inline: crea una animación + trigger por cada título
      const animateTitle = (titleSelector: string, triggerSelector: string, id: string) => {
        const titleEl = document.querySelector(titleSelector);
        const triggerEl = document.querySelector(triggerSelector);

        if (!titleEl || !triggerEl) return;

        const tween = gsap.from(titleEl, {
          y: 50,
          opacity: 0,
          duration: 2,
          ease: 'power2.out',
          immediateRender: false
        });

        ScrollTrigger.create({
          id,
          trigger: triggerEl,
          start: 'top 80%',
          once: true,
          animation: tween
        });
      };

      // 1) ACERCA DE MI
      animateTitle('.about-me .section-title', '.about-me', 'title-about');

      // 2) MIS VALORES
      animateTitle('.personal-values h4', '.personal-values', 'title-values');

      // 3) ÁREAS DE ESPECIALIZACIÓN
      animateTitle('.skills .expertise h4', '.skills .expertise', 'title-expertise');

      // 4) FORMACIÓN COMPLEMENTARIA
      animateTitle('.skills .additional-education h4', '.skills .additional-education', 'title-edu');

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, root);
  }

  ngOnDestroy(): void {
    // Mata triggers por id (opcional, pero queda pro)
    ScrollTrigger.getById('title-about')?.kill();
    ScrollTrigger.getById('title-values')?.kill();
    ScrollTrigger.getById('title-expertise')?.kill();
    ScrollTrigger.getById('title-edu')?.kill();

    this.ctx?.revert();
  }
}


