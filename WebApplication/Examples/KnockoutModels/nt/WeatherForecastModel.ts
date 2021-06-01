
module App { 

    export class WeatherForecastModel { 
    
        public date: KnockoutObservable<Date> = ko.observable<Date>({});
        public temperatureC: KnockoutObservable<number> = ko.observable<number>(0);
        public temperatureF: KnockoutObservable<number> = ko.observable<number>(0);
        public summary: KnockoutObservable<string> = ko.observable<string>("");

        constructor(data: any = null) {

            if (data !== null) {
                this.date(new Date(data.date));
                this.temperatureC(data.temperatureC);
                this.temperatureF(data.temperatureF);
                this.summary(data.summary);
            }
        }
    }
}