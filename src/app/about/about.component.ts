import { Component } from '@angular/core';
import { Skill } from '../models/skill.model';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity:0, height: '0px' })),
      state('enter', style({ opacity:1, height: '*' })),
      state('leave', style({ opacity:0, height: '0px' })),
      transition('* <=> *', animate(250)),
    ]),
  ]
})
export class AboutComponent {
  activeTab: string = 'introduction';
  nextTab: string | null = null;

  tabs: { [key: string]: 'enter' | 'leave' | 'void' } = {
    'introduction': 'enter',
    'background': 'void',
    'skills': 'void'
  };

  skills: Skill[] = [
    {language: "C#", experience: 4, category: 'Programming Languages', description: 'Received education in C# during my MCSD and also worked with it during my years at BBSoftware Development.'},
    {language: "Java", experience: 4, category: 'Programming Languages', description: 'Received education in Java during my MCSD and also worked with it during my years at BBSoftware Development and Dimagi.'},
    {language: "Python", experience: 2, category: 'Programming Languages', description: 'Started working on Python when working for Dimagi.'},
    {language: "JavaScript", experience: 4, category: 'Programming Languages', description: 'Received education in Javascript during my MCSD and also worked with it during my years at BBSoftware Development and Dimagi'},
    {language: ".NET", experience: 4, category: 'Frameworks', description: 'Received education in .NET during my MCSD and also worked with it during my years at BBSoftware Development. This includes .NET Core and .NET 4.0.'},
    {language: "Django", experience: 2, category: 'Frameworks', description: 'Started working on Django when working for Dimagi.'},
    {language: "Angular", experience: 1, category: 'Frameworks', description: 'Only used Angular for personal projects, including this website.'},
    {language: "SQL", experience: 4, category: 'Datebases', description: 'Received education in SQL during my MCSD and also worked with it during my years at BBSoftware Development and Dimagi. This includes PostgreSQL and MySQL.'},
    {language: "CouchDB", experience: 2, category: 'Datebases', description: 'Started working on couchDB when working for dimagi'},
  ];

  skillCategories: string[] = [...new Set(this.skills.map(skill => skill.category))];

  changeTab(tab: string): void {
    if (this.activeTab !== tab) {
      this.tabs[this.activeTab] = 'leave';
      this.nextTab = tab;
    }
  }

  onAnimationDone(event: any, tab: string): void {
    if (this.tabs[tab] === 'leave') {
      this.tabs[tab] = 'void';
      if (this.nextTab) {
        this.activeTab = this.nextTab!;
        this.tabs[this.activeTab] = 'enter';
        this.nextTab = null;
      }
    }
  }

  shouldDisplay(tab: string): boolean {
    return this.tabs[tab] !== 'void' || this.activeTab === tab;
  }
}