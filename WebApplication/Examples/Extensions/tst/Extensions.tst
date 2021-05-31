${
    using Typewriter.Extensions.WebApi;
}
module App { $Classes(:ControllerBase)[
    export class $Name {
        constructor(private $http: ng.IHttpService) {
        } $Methods[
        
        public $name = ($Parameters[$name: $Type][, ]) => {
            return this.$http({ url: `$Url`, method: "$HttpMethod", data: $RequestData });
        }]
    }]
}