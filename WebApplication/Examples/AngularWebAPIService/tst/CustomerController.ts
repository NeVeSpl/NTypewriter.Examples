
module App { 

    export class CustomerController {

        constructor(private $http: ng.IHttpService) { 
        } 
        
        public createCustomer = (customer: CustomerModel) : ng.IHttpPromise<ActionResult<number>> => {
            
            return this.$http<ActionResult<number>>({
                url: `Customer`, 
                method: "post", 
                data: customer
            });
        };
    }
    
    angular.module("App").service("CustomerService", ["$http", CustomerController]);
}