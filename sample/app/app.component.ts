import { Component } from '@angular/core';

import { ComponentPool, PipeServiceComponent } from '@sedeh/into-pipes';

class myService implements PipeServiceComponent {
  
  getDataFor(name: string, id: string, data: any) {
    return [
      'abc@gmail.com',
      'csd@gmail.com',
      'ddd@gmail.com',
      'krg@gmail.com',
      'xyz@gmail.com'
    ];
  }
}

class GroupService implements PipeServiceComponent {
  
  getDataFor(name: string, id: string, data: any) {
    return [
      {label: 'orange', value: 'orange'},
      {label: 'red', value: 'red'},
      {label: 'green', value: 'green'},
      {label: 'blue', value: 'blue'}
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
  events: any[] = [];
  myJson= {q:3,w:43,dw:6565};
  myPickDate = new Date();
  myDate = "2018-03-10T01:01:20Z";
  myDateList = ["2018-03-10T01:01:20Z", "2011-02-12T01:01:20Z"];
  myDateFormat="date:\"MM/dd/yyyy hh:ss\"";
  theURL = "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?h=350&auto=compress&cs=tinysrgb";
  videoURL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";
  audioURL = "https://google.github.io/tacotron/publications/tacotron2/demos/gan_or_vae.wav";

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
    this.pool.registerServiceForComponent("inputgroup", new GroupService());
  }

  onComponentChange(event:  any) {
    this.events.push(event);
  }

}
