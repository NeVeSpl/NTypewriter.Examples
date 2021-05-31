module Models {  

    export interface CustomerModel {
        id: number;
        name: string;
        orders: OrderModel[];
    }
}