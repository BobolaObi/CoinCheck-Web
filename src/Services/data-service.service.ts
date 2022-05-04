import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../Interface/todo";
import {Coincap} from "../Interface/coincap";
import {Coincodex} from "../Interface/coincodex";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})


export class DataServiceService {
//Injecting this allows us to use the Http Request form the API.
//Properties of the class and variables
  private todoApi = environment.todoApi;
  coinCodexApi = environment.coinCodex;
  coinCapApi = environment.coinCap;

  constructor(private http: HttpClient) { }

  //Passing the get request
  getAllTodoData(): Observable<Todo[]> {
    return this.http.get<Todo[]> (`${this.todoApi}`);
  }

  getTodoData(): Observable<Todo[]> {
    return this.http.get<Todo[]> (`${this.todoApi}/1`);
  }

  //Implement for CoinCodex

  getSingleCoincodex(): Observable<Coincodex[]>{
    return this.http.get<Coincodex[]>(`${this.coinCodexApi}`)
  }

  getAllCoincodex() : Observable<Coincodex[]>{
    return this.http.get<Coincodex[]>(`${this.coinCodexApi}`)
  }

  //Implement for CoinCap
  getSingleCoincap():Observable<Coincap[]> {
    return this.http.get<Coincap[]>(`${this.coinCapApi}`)

  }

  getAllCoincap():Observable<Coincap[]> {
    return this.http.get<Coincap[]>(`${this.coinCapApi}`)

  }
}
