import { Component } from '@angular/core';

import { ComponentPool } from '@sedeh/into-pipes';
import { PipeServiceComponentInterface } from '@sedeh/into-pipes';

class myService implements PipeServiceComponentInterface {
  getDataFor(name: string, id: string, data: any) {
    return [
      'abc@gmail.com',
      'csd@gmail.com',
      'ddd@gmail.com',
      'krg@gmail.com',
      'xyz@gmail.com',
    ];
  }
}

class GroupService implements PipeServiceComponentInterface {
  getDataFor(name: string, id: string, data: any) {
    return [
      { label: 'orange', value: 'orange' },
      { label: 'red', value: 'red' },
      { label: 'green', value: 'green' },
      { label: 'blue', value: 'blue' },
    ];
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'In To Pipes';
  shouldValidaste = true;
  activate = true;
  disabled = false;

  threeFive = 3.5;
  events: any[] = [];
  myJson = { q: 3, w: 43, dw: 6565 };
  myPickDate = new Date();
  myDate = '2018-03-10T01:01:20Z';
  myDateList = ['2018-03-10T01:01:20Z', '2011-02-12T01:01:20Z'];
  myDateFormat = 'date:"MM/dd/yyyy hh:ss"';
  theURL =
    'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?h=350&auto=compress&cs=tinysrgb';
  videoURL =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';
  audioURL =
    'https://google.github.io/tacotron/publications/tacotron2/demos/gan_or_vae.wav';

  myConditionalLogic =
    'if:=:masoud:"font:fa fa-check:left:*":"font:fa fa-bell:left:*"';
  myConditionalThreeFive =
    'if:>:3:"font:fa fa-check:replace":"font:fa fa-bell:replace"';

  myLastUpdatedDate = new Date(Date.now() - 640000);
  myComboUpdatedDate = new Date(Date.parse('02/02/2000') - 640000);

  dataSet = {
    id: 3453453453,
    likes: 10,
    dislikes: 5,
  };
  myaddress = {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  };

  constructor(private pool: ComponentPool) {
    this.pool.registerServiceForComponent('select', new myService());
    this.pool.registerServiceForComponent('inputgroup', new GroupService());
  }

  isChecked(event: any, key: string) {
    if (key === 'disabled') {
      this.disabled = !this.disabled;
    }
    if (key === 'activate') {
      this.activate = !this.activate;
    }
    if (key === 'shouldValidaste') {
      this.shouldValidaste = !this.shouldValidaste;
    }
  }
  keyup(event: any) {
    const code = event.which;
    if (code === 13) {
      event.target.click();
    }
  }
  performValidation(item: any, value: any) {
    if (!this.shouldValidaste) {
      alert('not going to happen!');
    }
    return this.shouldValidaste;
  }
  onComponentChange(event: any) {
    this.events.push(event);
  }
  onComboChange(event: any) {
    this.myComboUpdatedDate = event.value[0];
    this.events.push(event);
  }
}
