import { Component, Injectable } from '@angular/core';

import { ComponentPool } from './into-pipes/injectables/component.pool';
import { PipeServiceComponent } from './into-pipes/interfaces/pipe.component';

class myService implements PipeServiceComponent {
  
  getDataFor(name, id, data) {
    return [
      'abc@gmail.com',
      'csd@gmail.com',
      'ddd@gmail.com',
      'krg@gmail.com',
      'xyz@gmail.com'
    ];
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'In To Pipes';

  threeFive = 3.5;
  events = [];
  myJson= {q:3,w:43,dw:6565};
  myDate = "2018-03-10T01:01:20Z";
  myDateList = ["2018-03-10T01:01:20Z", "2011-02-12T01:01:20Z"];
  myDateFormat="date:\"MM/dd/yyyy hh:ss\"";
  theURL = "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?h=350&auto=compress&cs=tinysrgb";
  videoURL = "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_5mb.mp4";

  myConditionalLogic = "if:=:masoud:\"font:fa fa-check:left:*\":\"font:fa fa-bell:left:*\"";
  myConditionalThreeFive = "if:>:3:\"font:fa fa-check:replace\":\"font:fa fa-bell:replace\"";

  myLastUpdatedDate = new Date(Date.now() - 640000);

  dataSet = {
    id: 3453453453,
    likes: 10,
    dislikes: 5
  }
  myaddress = {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  };

  constructor(private pool: ComponentPool) {
    this.pool.registerServiceForComponent("select", new myService());
  }

  onComponentChange(event) {
    this.events.push(event);
  }

}
