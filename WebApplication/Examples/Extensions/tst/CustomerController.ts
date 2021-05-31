
module App { 
    export class CustomerController {
        constructor(private $http: ng.IHttpService) {
        } 
    
        public createCustomer = (customer: CustomerModel) => {
            return this.$http({ url: `Customer`, method: "post", data: customer });
        }
    }
}