import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit{

  public editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService
  ){}
  ngOnInit(): void {
    let tripCode = localStorage.getItem('tripCode');
    if(!tripCode){
      alert('Something went wrong, could not find where I stashed tripCode!');
      this.router.navigate(['']);
      return;
    }
    console.log('EditTripComponent',this.ngOnInit);
    console.log('tripCode' + tripCode);

    this.editForm = this.formBuilder.group({
      _id: [],
      code:['',Validators.required],
      name: ['',Validators.required],
      length: ['',Validators.required],
      start: ['',Validators.required],
      resort: ['',Validators.required],
      perPerson: ['',Validators.required],
      image: ['',Validators.required],
      description: ['',Validators.required]
    })

    this.tripDataService.getTrip(tripCode).subscribe({
      next: (value:any) => {
        this.editForm.patchValue(value[0]);
        if (!value) {
          this.message = 'No Trip Retrieved!'
        } else {
          this.message = 'Trip' + tripCode + 'retrieved';
        }
        console.log(this.message);
      },
      error(err) {
          console.log('Error: ' + err);
      },
    })
  }

  

  public onSubmit(){
    this.submitted = true;

    if(this.editForm.valid){
      this.tripDataService.updateTrip(this.editForm.value).subscribe(
        {
          next: (value: any) => {
            console.log(value);
            this.router.navigate(['']);
          },
          error: (err: any) => {
            console.log('Error: ' + err)
          }
        }
      )
    }
  }

  get f(){return this.editForm.controls}

  

}
