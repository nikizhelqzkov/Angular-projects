import { OrderItem } from "./OrderItems";

export class Order{
    public id!:number;
    public customerId!:number;
    public storeId!:number;
    public orderDate!:Date;
    public requiredDate!:Date;
    public shippedDate!:Date;
    public staffId:number = 0;
    public orderStatus!:number;
    public storeName!:string;
    public orderItems:OrderItem[] = [];
}
