import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lines-animation',
  templateUrl: './lines-animation.component.html',
  styleUrls: ['./lines-animation.component.css']
})
export class LinesAnimationComponent {
  @Input() numberOfLines: number = 100;
  lines: any[] = [];

  ngOnInit() {
    this.generateLines();
  }

  generateLines() {
    for (let i = 0; i < this.numberOfLines; i++) {
      const line = {
        id: i,
        top: Math.floor(Math.random() * 100) + '%',
        height: Math.floor(Math.random() * 2) + 'px',
        animationDuration: Math.floor(Math.random() * 10 + 5) + 's'
      };
      this.lines.push(line);
    }
  }
}
