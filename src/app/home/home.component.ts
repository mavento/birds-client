import {Component, OnInit} from '@angular/core';
import {BirdService} from "../_services/bird.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading: boolean;
  birds: Array<any>;
  featuredCarrot: any;

  constructor(private bs: BirdService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.bs.getBirds().subscribe(data => {
      this.birds = data;
      console.log('data:',data);
    })
  }

}
