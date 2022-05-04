import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../../Services/data-service.service";
import {Todo} from "../../Interface/todo";
import {Coincodex} from "../../Interface/coincodex";
import {Coincap} from "../../Interface/coincap";

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
  coinCodex? : Coincodex[];
  coinCap? : Coincap[];

  title = "Print Api with Angular Http";

  constructor(public dataService: DataServiceService) {

  }

  ngOnInit(): void {
    this.onGetTodoData();
    this.onGetAllTodoData();

    //Coin Codex
    this.onGetSingleCoincodex();
    this.onGetAllCoincodex();

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

  //Getting Coin Codex Data
  onGetSingleCoincodex(){
    this.dataService.getSingleCoincodex().subscribe((codexData)=>{
      console.log(codexData);
      this.coinCodex = codexData;
    },
      (error:any) => console.log(error),
      () => console.log("All Data Returned")
    );
  }
  onGetAllCoincodex(){
    this.dataService.getSingleCoincodex().subscribe((codexData)=>{
        console.log(codexData);
        this.coinCodex = codexData;
      },
      (error:any) => console.log(error),
      () => console.log("All Data Returned")
    );
  }


  //Getting Coin Cap Data
  onGetSingleCoincap(){
    this.dataService.getSingleCoincodex().subscribe((capData)=>{
        console.log(capData);
        this.coinCodex = capData;
      },
      (error:any) => console.log(error),
      () => console.log("All Data Returned")
    );
  }
  onGetAllCoincap(){
    this.dataService.getSingleCoincodex().subscribe((capData)=>{
        console.log(capData);
        this.coinCodex = capData;
      },
      (error:any) => console.log(error),
      () => console.log("All Data Returned")
    );
  }

}
