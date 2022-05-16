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
  //Real Api
  coinGecko = environment.coinGecko;
  geckoTrending = environment.geckoTrending;



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

  //Coin Gecko
  getAllCoinGeckos(){
      return this.http.get<any>(`${this.coinGecko}`);
  }

  getTrendingCurrency(){
    return this.http.get<any>(`${this.geckoTrending}`)
  }

  // getCurrency(currency:string){
  //   return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  // }
  // getTrendingCurrency(currency:string){
  //   return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
  // }
  // getGrpahicalCurrencyData(coinId:string, currency:string, days: number){
  //   return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`)
  // }
  // getCurrencyById(coinId:string){
  //   return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  // }
}
