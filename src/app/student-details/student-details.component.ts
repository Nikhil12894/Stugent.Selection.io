import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
Category = ["General","Muslim","OBC/SC/ST"];
DepartmentChoice = ["A","B","C","D","E"];
Gender = ["Male","Female"];
listOfAllStudent = new Array();
// message = "";
// disable1: boolean = false;
// show: boolean = false;
@Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
// onClick(f:NgForm){
// var c1=f.value.First_Choice;
// var c2=f.value.Second_Choice;
// var c3=f.value.Third_Choice;
// var c4=f.value.Fourth_Choice;
// var c5=f.value.Fifth_Choice;
// if(c1!==c2 || c1!==c3 || c1!==c4 || c1!==c5 || c2!==c1 || c2!==c3 || c2!==c4 || c2!==c5  
// 	c3!==c1 || c3!==c2 || c3!==c4 || c3!==c5 || c4!==c2 || c4!==c3 || c4!==c1 || c4!==c5 &&
// 	c5!==c2 || c5!==c3 || c5!==c4 || c5!==c1){
// this.disable1 = true;
// this.message = "Department choice Must Be Deferent";
// }else{
// this.disable1 = false;
// }
// this.show = true;
// }

onSubmit(f: NgForm) {

  this.listOfAllStudent.push(f.value);
// console.log(this.listOfAllStudent);
this.listOfAllStudent.sort((a,b)=>a.StudentMarks - b.StudentMarks);
this.childEvent.emit(this.listOfAllStudent);

}
}
