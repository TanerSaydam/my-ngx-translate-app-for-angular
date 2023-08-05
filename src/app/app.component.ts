import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ngx-translate-app';
  constructor(
    public translate: TranslateService
  ){
    translate.addLangs(["en","tr","fr"])
    translate.setDefaultLang("tr");

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|tr|fr/) ? browserLang: 'tr');
  }
}
