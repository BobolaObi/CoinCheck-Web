import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../../Services/data-service.service";
import {Coingecko} from "../../Interface/Coingecko";


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  //Store Trending Data
  trendingData?: Coingecko[];

  constructor(public dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getTrendingData();
  }

  getTrendingData() {
    this.dataService.getTrendingCurrency().subscribe(res => {
        console.log(res);
        this.trendingData = res;
      })
  }
}
