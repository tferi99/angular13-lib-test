import { Component, VERSION } from '@angular/core';
import { MyLibService } from '@my-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multirepo-client3';
  valueFromLib!: number;
  $counter!: Observable<number>;
  version = VERSION;

  constructor(private myLibService: MyLibService) {}

  ngOnInit(): void {
    this.valueFromLib = this.myLibService.getValueFromLib();
    this.$counter = this.myLibService.getCounter();
  }
}
