import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SunilService {

  constructor(private http:HttpClient) { }

  // for posst
  postsunil(data:any){
    return this.http.post<any>('http://localhost:3000/posts/',data)
    .pipe(map((res:any) =>{
      return res;
    }))
  };

  //get data
  getsunil(){
    return this.http.get('http://localhost:3000/posts')
    .pipe(map((res:any) =>{
      return res;
    }))
  };

  //updatedata
  updatesunil(data:any,id:number){
    return this.http.put<any>('http://localhost:3000/posts/'+id,data)
    .pipe(map((res:any) =>{
      return res;
    }))
  };

  //delete data
deletesunil(id:number){
  return this.http.delete('http://localhost:3000/posts/'+id)
  .pipe(map((res:any) =>{
    return res;
  }))
}

}
