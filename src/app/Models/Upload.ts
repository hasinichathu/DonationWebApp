export class Upload {
   
    $key: string;
    file:File;
    name:string;
    url:string;
    progress:number;
    createdAt : Date = new Date();
    //should have same name as database columns
    
    constructor(file:File){
        this.file=file;
    }
}