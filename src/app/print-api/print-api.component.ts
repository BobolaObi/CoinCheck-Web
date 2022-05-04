import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../../Services/data-service.service";
import {Todo} from "../../Interface/todo";
import {Coincodex} from "../../Interface/coincodex";
import {Coincap} from "../../Interface/coincap";
import all_coins from "src/assets/all_coins.json";
import coincap_assests from "src/assets/all_coins.json";
/**
 * Hello
 */

@Component({
  selector: 'app-print-api',
  templateUrl: './print-api.component.html',
  styleUrls: ['./print-api.component.css']
})
export class PrintApiComponent implements OnInit {

  todoData?: Todo[];
  coinCodex? : Coincodex[] = all_coins;
  coinCap? : Coincap[] = coincap_assests;
  localCodex = "src/app/all_coins.json";
  title = "Print Api with Angular Http";

  constructor(public dataService: DataServiceService) {

  }

  ngOnInit(): void {
    this.onGetTodoData();
    this.onGetAllTodoData();

    //Coin Codex
    // this.onGetSingleCoincodex();
    // this.onGetAllCoincodex();

    //Coin Cap
    this.onGetSingleCoincap();
    this.onGetAllCoincap();

  }

  //Getting TodoList API Data
  onGetTodoData() :void{
    this.dataService.getTodoData().subscribe(
      (pulledTodoData) => {
        console.log(pulledTodoData);
        this.todoData = pulledTodoData
      },
      (error:any) => console.log(error),
      () => console.log("Single Data Returned")
    );
  }

  onGetAllTodoData() :void{
    this.dataService.getAllTodoData().subscribe(
      (pulledTodoData) => {
        console.log(pulledTodoData);
        this.todoData = pulledTodoData
      },
      (error:any) => console.log(error),
      () => console.log("All Data Returned")
    );
  }

  // //Getting Coin Codex Data
  // onGetSingleCoincodex(){
  //   this.dataService.getSingleCoincodex().subscribe((codexData)=>{
  //     console.log(codexData);
  //     this.coinCodex = codexData;
  //   },
  //     (error:any) => console.log(error),
  //     () => console.log("All Data Returned")
  //   );
  // }
  // onGetAllCoincodex(){
  //   this.dataService.getSingleCoincodex().subscribe((codexData)=>{
  //       console.log(codexData);
  //       this.coinCodex = codexData;
  //     },
  //     (error:any) => console.log(error),
  //     () => console.log("All Data Returned")
  //   );
  // }


  //Getting Coin Cap Data
  onGetSingleCoincap(){
    this.dataService.getAllCoincap().subscribe((capData)=>{
        console.log(capData);
        this.coinCap = capData;
      },
      (error:any) => console.log(error),
      () => console.log("All Data Returned")
    );
  }
  onGetAllCoincap(){
    this.dataService.getSingleCoincap().subscribe((capData)=>{
        console.log(capData);
        this.coinCap = capData;
      },
      (error:any) => console.log(error),
      () => console.log("All Data Returned")
    );
  }

}
