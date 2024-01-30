import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public age: number  = 45;

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    
  }

}
