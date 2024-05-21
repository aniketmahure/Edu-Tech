import { Component } from '@angular/core';
import { courses } from '../../model/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  public courseCpy : courses[] =[];
  public types:any = [];
  public levels:any = [];
  public domains:any = [];
  public course: courses[] = [
  {
    id: 1,
    name: "Javascript",
    modules: "10 modules 5 lessons",
    domain:"Software Engineering",
    type:"Free",
    level:"Beginner"
  },
  {
    id:2,
    name: "Java",
    modules: "13 modules 6 lessons",
    domain:"Software Engineering",
    type:"Free",
    level:"Beginner"
  },
  {
    id:3,
    name: "Python",
    modules: "9 modules 4 lessons",
    domain:"Software Engineering",
    type:"Free",
    level:"Beginner"
  },
  {
    id:4,
    name: "SQL",
    modules: "14 modules 3 lessons",
    domain:"Software Engineering",
    type:"Free",
    level:"Beginner"
  },
  {
    id:5,
    name: "Javascript",
    modules: "8 modules 3 lessons",
    domain:"Software Engineering",
    type:"Paid",
    level:"Intermediate"
  },{
    id:6,
    name:"Python Course for Beginners",
    modules:"8 modules 3 lessons",
    domain:"Data Science",
    type:"Free",
    level:"Beginner"
  },
  {
    id:7,
    name:"Python and SQL",
    modules:"8 modules 3 lessons",
    domain:"Data Science",
    type:"Paid",
    level:"IntermediateIntermediate"
  },
  {
    id:8,
    name:"Data Science Course",
    modules:"8 modules 3 lessons",
    domain:"Data Science",
    type:"Paid",
    level:"Expert"
  },
  {
    id:9,
    name:"Data Science and Machine Learning",
    modules:"8 modules 3 lessons",
    domain:"Data Science",
    type:"Paid",
    level:"Expert"
  },
  {
    id:10,
    name:"Introduction to AI",
    modules:"8 modules 3 lessons",
    domain:"AI",
    type:"Free",
    level:"Beginner"
  },
  {
    id:11,
    name:"Introduction to Generative AI",
    modules:"8 modules 3 lessons",
    domain:"AI",
    type:"Free",
    level:"Intermediate"
  },
  {
    id:12,
    name:"AI Foundation",
    modules:"8 modules 3 lessons",
    domain:"AI",
    type:"Paid",
    level:"Expert"
  }
  
    // Add more courses as needed
];
 constructor(){
  this.courseCpy = this.course;
  console.log(this.courseCpy);  
 }
 ngOnInit(){

  this.types = [];
  this.levels = [];
  this.domains = [];
  this.dataflag = false;
  this.ai = false;
  this.sftwEng = false;
  this.free = false;
  this.paid =  false;
  this.beginner = false;
  this.iter = false;
  this.expert = false;
 }
 dataflag = false;
 ai = false;
 sftwEng = false;
 free = false;
 paid =  false;
 beginner = false;
 iter = false;
 expert = false;

 filter(){
  if(this.dataflag.valueOf() == true){
    this.domains.push("Data Science");
    this.dataflag = true;
  }
  if(this.ai.valueOf() == true){
    this.domains.push("AI");
  }
  if(this.sftwEng.valueOf() == true){
    this.domains.push("Software Engineering");
  }
  if(this.beginner.valueOf() == true){
    this.levels.push("Beginner");
  }
  if(this.iter.valueOf() == true ){
    this.levels.push("Intermediate");
  }
  if(this.expert.valueOf() == true ){
    this.levels.push("Expert");
  }
  if(this.free.valueOf() == true ){
    this.types.push("Free");
  }
  if(this.paid.valueOf() == true){
    this.types.push("Paid");
  }
  console.log(this.domains);
  console.log(this.levels);
  console.log(this.types);

  let filteredCourses = this.course.filter(c =>this.domains.includes(c.domain) || this.types.includes(c.type) || this.levels.includes(c.level));
  console.log("filteredCourses");
  this.courseCpy = filteredCourses;
  console.log(this.courseCpy)
  this.ngOnInit();
 }

 clear(){
  this.dataflag = false;
  this.ai = false;
  this.sftwEng = false;
  this.free = false;
  this.paid =  false;
  this.beginner = false;
  this.iter = false;
  this.expert = false;
  this.courseCpy = this.course;
 }
 
}
