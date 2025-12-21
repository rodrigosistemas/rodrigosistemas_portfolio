import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { AboutmeComponent } from "../aboutme/aboutme.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [AboutmeComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('titular', { static: true }) titular!: ElementRef<HTMLElement>;

  private tl?: gsap.core.Timeline;

  ngAfterViewInit(): void {
    const words = ['Cloud Security', 'DevSecOps'];

    this.tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    words.forEach((word) => {
      this.tl!.to(this.titular.nativeElement, {
        text: word,
        duration: 2,
        delay: 0.6
      });
    });
  }

  ngOnDestroy(): void {
    this.tl?.kill();
  }
}
