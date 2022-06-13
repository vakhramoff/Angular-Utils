import { Component, OnInit } from '@angular/core';
import { HandleHttpErrors } from '../../projects/angular-utils/src/lib/decorators/http-error-handler.decorator';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'angular-utils-source';

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.test().subscribe();
  }

  @HandleHttpErrors()
  test() {
    return this.http.get('http://ya.ru');
  }
}
