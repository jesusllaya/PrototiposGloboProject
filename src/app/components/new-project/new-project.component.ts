import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  projectForm = new FormGroup({
    nameProject: new FormControl(''),
    description: new FormControl(''),
    projectType: new FormControl(''),
    client: new FormControl(''),
    projectLeader: new FormControl(''),
    estimatedStartDate: new FormControl(''),
    estimatedFinishDate: new FormControl(''),
    sitio: new FormControl(''),
    location: this.fb.group({
      street: ['',Validators.required],
      nro: [''],
      city: [''],
      state: ['']
    }),
    alias: this.fb.array([
      this.fb.control('')
    ])
  });


  ngOnInit() {
  }

  updateName(){
    //this.name.setValue('Coloque un nombre');
  }

  onSubmit(){
    console.warn(this.projectForm.value);
  }

  get alias(){
    return this.projectForm.get('alias') as FormArray;
  }

  addAlias(){
    this.alias.push(this.fb.control(''));
  }
}
