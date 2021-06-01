
module App { 

    export class CustomerModel { 
    
        public id: KnockoutObservable<number> = ko.observable<number>(0);
        public name: KnockoutObservable<string> = ko.observable<string>("");
        public orders: KnockoutObservableArray<OrderModel> = ko.observableArray<OrderModel>([]);

        constructor(data: any = null) {

            if (data !== null) {
                this.id(data.id);
                this.name(data.name);
                this.orders(data.orders.map(i => new OrderModel(i)));
            }
        }
    }
}