import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You Selected 
    department with id ={{departmentId}}</h3>
    <p>
      <button (click) = "ShowOverview()"> Overview</button>
      <button (click) = "ShowContact()"> Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
    <button (click)="goPrevious()">Previous </button>
    <button (click)= "goNext()">Next </button>
    </p>
    <div>
      <button (click)= "gotoDepartments()">Back</button>
    </div>
    `,
  styles: [`
  
  a {
    cursor: pointer;
    cursor: hand;
  }
  ` ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId= id;
    this.route.paramMap.subscribe((params: ParamMap) =>
    {
      let id = parseInt(params.get('id'));
      this.departmentId=id;

    }
    )
  }

  goPrevious(){
    let previousId = this.departmentId-1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentId+1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments(){
    //selected Id is equal to current ID
    let selectedId = this.departmentId ? this.departmentId : null;
   // this.router.navigate(['/departments',{id: selectedId, test: 'testvalue'}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo:this.route});
  }

  ShowOverview(){
    this.router.navigate(['overview'], {relativeTo:this.route});
  }

  ShowContact(){
    this.router.navigate(['contact'], {relativeTo:this.route});
  }


}
