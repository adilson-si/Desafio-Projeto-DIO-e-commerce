import { ApplicationInitStatus, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from  "@angular/common/http";
import { Book } from "./model/book";

@Injectable()

export class BooksServices{

private url ="/62ee9727f5521ecad5785338.mockapi.io/api/bookstore/livros";

httpOptions = {
    Headers: new HttpHeaders({'content-type':'Application/json'})
}

getBook(){

    return this.http.get(this.url)
}

constructor(private http:HttpClient){}

}
