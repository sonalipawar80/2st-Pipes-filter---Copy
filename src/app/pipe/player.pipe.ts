import { Pipe, PipeTransform } from "@angular/core";
import { Iplayer } from "../modals/players";

@Pipe({
    name:'playerPipe'
})
export class playerFilterPipe implements PipeTransform{
 transform(value: any[],serchVal:string,searchField:string):Array<Iplayer>{
     if(!serchVal || !searchField){
        return value;
     }

     if(!value){
        return [];
     }


     function handleSearchFieldChange(newSearchField:string) {
        searchField = newSearchField;
        serchVal = ''; 
    }
     console.log(serchVal)
     let filteredArr= value.filter(p =>{
        if(typeof serchVal ==='string'){
            const filteredA=p[searchField]?p[searchField]:'';
            return Object(p)[searchField].toString().toLowerCase().includes(serchVal.toLowerCase())
        }
    });
    
    handleSearchFieldChange('newFieldName')
   
      return filteredArr;                                                                                  
 }
}