import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rotations = [];

  ngOnInit() {
    for (let i = 0; i < 180; i++) {
      this.rotations.push(i * 2);
    }
  }
}
