import { Component, OnInit } from '@angular/core';
import * as copy from 'copy-to-clipboard';
import * as faker_useragent from 'random-useragent';
import * as faker from 'faker/locale/id_ID';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  title = 'nguyenhungtuan';
  randomName: any;
  listName: any =[];
  ngOnInit(): void {
    for (let i = 0; i < 5000; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const email = faker.internet.email();
      const findName = faker.name.findName();
      const xxx = faker_useragent.getRandom((ua) => {
        const temp = ua.browserName === 'Chrome' && parseFloat(ua.browserVersion) >= 20;
        return ua.browserName === 'Firefox' && parseFloat(ua.browserVersion) >= 20;
      });
      this.listName.push(`${firstName} ${lastName}`);
    }
  }
}
