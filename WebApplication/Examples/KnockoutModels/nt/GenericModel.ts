
module App { 

    export class GenericModel { 
    
        public genericProp: KnockoutObservable<T> = ko.observable<T>({});

        constructor(data: any = null) {

            if (data !== null) {
                this.genericProp(new T(data.genericProp));
            }
        }
    }
}