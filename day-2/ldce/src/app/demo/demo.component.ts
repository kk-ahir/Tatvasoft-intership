import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  standalone: true, // this marks it as standalone
  imports: [FormsModule], // ✅ import FormsModule here
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  name: string = '';
  count: number = 0;

  increment() {
    this.count++;
  }

  reset() {
    this.name = '';
    this.count = 0;
  }
}
