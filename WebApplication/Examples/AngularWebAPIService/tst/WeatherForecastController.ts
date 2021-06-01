
module App { 

    export class WeatherForecastController {

        constructor(private $http: ng.IHttpService) { 
        } 
        
        public get = () : ng.IHttpPromise<WeatherForecastModel[]> => {
            
            return this.$http<WeatherForecastModel[]>({
                url: `WeatherForecast`, 
                method: "get", 
                data: null
            });
        };
    }
    
    angular.module("App").service("WeatherForecastService", ["$http", WeatherForecastController]);
}