import { Component } from "@angular/core";
import { Istudent } from "../modal/data";



@Component({
    selector: "app-admin",
    templateUrl: "./admin.component.html",
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
    skills:string[] = ['HTML5','CSS3', 'TypeScript', 'javaScript', 'Angular'];

    // stdInfo:any[] = [   // it will like javaScript
    stdInfo:Istudent[] = [
        {
            fname:'Varshketu',
            lname:'Dadhale',
            email:'dvarsh@gmail',
            contact:12345,
        },
        {
            fname:'hari',
            lname:'Raut',
            email:'hari@raut',
            contact:54123
        },
        {
            fname:'Akshay',
            lname:'Titarmare',
            email:'akki@gmail',
            contact:987456,
        },
        {
            fname:'Deepti',
            lname:'Jawlekar',
            email:'deepti@gmail',
            contact:741233
        }
    ]
}