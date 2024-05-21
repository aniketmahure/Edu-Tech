import { Component } from '@angular/core';
import { masterclass } from '../../model/masterclass';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-masterclass',
  templateUrl: './masterclass.component.html',
  styleUrl: './masterclass.component.css'
})
export class MasterclassComponent {
 constructor(){}
 public currentDateTime = new Date();
 public formattedDateTime = formatDate(this.currentDateTime, 'yyyy-MM-dd hh:mm:ss a', 'en-US', '+0530');
 public masterlist : masterclass []= [
  {id:1,disc:"2Hr",enrolled: 234,name: "Introduction to Data Visualization", time: formatDate(this.currentDateTime, 'yyyy/MM/dd hh:mm a', 'en-US', '+0590'),src:"/../assets/mclass/datavisual.png"},
  {id:2,disc:"1Hr 20mins",enrolled: 583,name: "Introduction to Cloud Computing", time:formatDate(this.currentDateTime, 'yyyy/MM/dd hh:mm a', 'en-US', '+1232'),src:"/../assets/mclass/cloudcomp.jpg"},
  {id:3,disc:"50mins",enrolled: 212,name: "Solid Principles Every Developer should know", time:formatDate(this.currentDateTime, 'yyyy/MM/dd hh:mm a', 'en-US', '+0690'),src:"/../assets/mclass/solid.png"},
  {id:4,disc:"1Hr 20mins",enrolled: 429,name: "How to Prepare for SDE Career for Abroad", time:formatDate(this.currentDateTime, 'yyyy/MM/dd hh:mm a', 'en-US', '+1332'),src:"/../assets/mclass/studyabrd.jpg"},
  {id:5,disc:"2Hr 10mins",enrolled: 571,name: "How to land on Remotes Jobs", time:formatDate(this.currentDateTime, 'yyyy/MM/dd hh:mm a', 'en-US', '+8009'),src:"/../assets/mclass/remotejob.jpg"},
  {id:6,disc:"1Hr",enrolled: 178,name: "Get into Depth: Kafka", time:formatDate(this.currentDateTime, 'yyyy/MM/dd hh:mm a', 'en-US', '+6555'),src:"/../assets/mclass/kafka.png"},
  {id:7,disc:"1Hr",enrolled: 352,name: "Get into Depth: Devops", time:formatDate(this.currentDateTime, 'yyyy/MM/dd hh:mm a', 'en-US', '+4600'),src:"/../assets/mclass/devops.png"},
  {id:8,disc:"1Hr",enrolled: 123,name: "Introduction to Docker", time:formatDate(this.currentDateTime, 'yyyy/MM/dd hh:mm a', 'en-US', '+1450'),src:"/../assets/mclass/docker.png"},
 ];
 
}
