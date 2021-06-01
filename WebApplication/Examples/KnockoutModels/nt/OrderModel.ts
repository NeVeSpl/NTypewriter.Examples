
module App { 

    export class OrderModel { 
    
        public date: KnockoutObservable<Date> = ko.observable<Date>({});

        constructor(data: any = null) {

            if (data !== null) {
                this.date(new Date(data.date));
            }
        }
    }
}