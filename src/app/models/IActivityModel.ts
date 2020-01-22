export class IActivityModel {
    private IActivityData:Array<any>;
    constructor(){}

    set interactivity(item){
        this.IActivityData = item
    }
    
    get interactivity() {
        return this.IActivityData
    }
}