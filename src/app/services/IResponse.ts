export interface IResponse  {
    data : Array<any>;
    execute(data:any):IResponse
}