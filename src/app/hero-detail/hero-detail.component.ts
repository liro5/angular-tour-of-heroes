import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
[x: string]: any;
@Input() hero?: Hero = {
  id: 1,
  name: 'Windstorm'
}

  constructor() { }

  ngOnInit(): void {
  }

}
