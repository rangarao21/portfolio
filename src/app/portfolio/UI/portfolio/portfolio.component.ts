import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ButtonModule, ToolbarModule, CommonModule, CardModule, ProgressBarModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  animationTriggered: boolean = false;
  animationTriggered1: boolean = false;
  animationTriggered2: boolean = false;
  loading: boolean = false;
  animationTriggered3: boolean = false;
  animationTriggered4: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const element = document.querySelector('.text');
    const elementPosition = element?.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementPosition) {
      if (elementPosition < windowHeight) {
        this.animationTriggered = true;
      }
      else {
        this.animationTriggered = false;
      }
    }

    const element1 = document.querySelector('.experience');
    const elementPosition1 = element1?.getBoundingClientRect().top;
    const windowHeight1= window.innerHeight;
    if (elementPosition1) 
    {
      if(elementPosition1 < windowHeight1)
      {
      this.animationTriggered1 = true;
      }
      else{
        this.animationTriggered1= false;
      }
    }

    const element2 = document.querySelector('.skills');
    const elementPosition2 = element2?.getBoundingClientRect().top;
    const windowHeight2 = window.innerHeight;
    if (elementPosition2) {
      if (elementPosition2 < windowHeight2) {
        this.animationTriggered2 = true;
      }
      else {
        this.animationTriggered2 = false;
      }
    }


    const element3 = document.querySelector('.skills1');
    const elementPosition3 = element3?.getBoundingClientRect().top;
    const windowHeight3 = window.innerHeight;
    if (elementPosition3) {
      if (elementPosition3 < windowHeight3) {
        this.animationTriggered3 = true;
      }
      else {
        this.animationTriggered3 = false;
      }
    }

    const element4 = document.querySelector('.skills1');
    const elementPosition4 = element4?.getBoundingClientRect().top;
    const windowHeight4 = window.innerHeight;
    if (elementPosition4) {
      if (elementPosition4 < windowHeight4) {
        this.animationTriggered4 = true;
      }
      else {
        this.animationTriggered4 = false;
      }
    }

  }

  

  aboutme() {
    document.getElementById("aboutme")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
  experience() {
    document.getElementById("experience")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
    download() {
        this.loading = true;
        let link = document.createElement('a');
        link.download = 'Rangarao G.pdf';
        link.href = '../../../../assets/Rangarao.pdf';
        link.click();
        setTimeout(() => {
            this.loading = false
        }, 2000);
    }
}
