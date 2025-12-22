import { Component, AfterViewInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardBasicComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NzButtonModule, NzCardBasicComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {
  @ViewChild('portfolioRoot', { static: true }) portfolioRoot!: ElementRef<HTMLElement>;
  private ctx?: gsap.Context;

  ngAfterViewInit(): void {
    const root = this.portfolioRoot.nativeElement;

    this.ctx = gsap.context(() => {
      const tween = gsap.from('.section-title', {
        y: 50,
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
        immediateRender: false
      });

      ScrollTrigger.create({
        id: 'portfolio-title',
        trigger: '.presentation',
        start: 'top 80%',
        once: true,
        animation: tween
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, root);
  }

  ngOnDestroy(): void {
    ScrollTrigger.getById('portfolio-title')?.kill();
    this.ctx?.revert();
  }
}

