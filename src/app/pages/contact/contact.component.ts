import { Component, AfterViewInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import gsap from 'gsap';

import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import type { IconDefinition } from '@ant-design/icons-angular';
import { MailOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [MailOutline];

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  @ViewChild('contactSection', { static: true }) contactSection!: ElementRef<HTMLElement>;
  private ctx?: gsap.Context;

  ngAfterViewInit(): void {
    const el = this.contactSection.nativeElement;

    this.ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from('.section-title', { y: 30, opacity: 0, duration: 0.8, ease: 'power2.out' })
        .from('.social-btn', { scale: 0, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }, '-=0.2');
    }, el);
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }
  
}



