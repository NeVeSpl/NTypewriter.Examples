
module App { 
    export class WeatherForecastController {
        constructor(private $http: ng.IHttpService) {
        } 
    
        public get = () => {
            return this.$http({ url: `WeatherForecast`, method: "get", data: null });
        }
    }
}