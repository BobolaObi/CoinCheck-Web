// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  todoApi: "https://jsonplaceholder.typicode.com/todos",
  coinCodex: "https://coincodex.com/apps/coincodex/cache/all_coins.json",
  coinCap : "api.coincap.io/v2/assets",

  //Real APIS
  coinGecko : "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&sparkline=false",
  geckoTrending : "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
