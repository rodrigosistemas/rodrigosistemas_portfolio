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
    const el = this.aboutSection.nativeElement;

    this.ctx = gsap.context(() => {
      // Tween del título
      const tween = gsap.from('.section-title', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        immediateRender: false
      });

      // Trigger con id para controlarlo bien
      ScrollTrigger.create({
        id: 'about-title',
        trigger: el,
        start: 'top 80%',
        once: true,
        animation: tween,
      });

      // Recalcular posiciones tras montar/navegar
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, el);
  }

  ngOnDestroy(): void {
    ScrollTrigger.getById('about-title')?.kill();
    this.ctx?.revert();
  }

}

