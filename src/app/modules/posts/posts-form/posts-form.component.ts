import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../../../shared/models/post';
import { LocationOptions } from '../../../shared/lists/location';
import { AtLeast1UpperCase } from '../../../shared/helpers/at-least-1-uppercase.validator';
import { LocationEnum } from 'src/app/shared/models/enums';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.scss']
})
export class PostsFormComponent implements OnInit {

  @Input()
  initialState: BehaviorSubject<Post> = new BehaviorSubject({});
  
  @Output()
  formValuesChanged = new EventEmitter<Post>();
  
  @Output()
  formSubmitted = new EventEmitter<Post>();

  locationOptions = LocationOptions;
  locationEnum = LocationEnum;
  postForm: FormGroup = new FormGroup({});
  buttonLabel = 'Add';
  
  constructor(private fb: FormBuilder) { }

  get name() { return this.postForm.get('name')!; }
  get email() { return this.postForm.get('email')!; }
  get phoneNumber() { return this.postForm.get('phoneNumber')!; }
  get subject() { return this.postForm.get('subject')!; }
  get content() { return this.postForm.get('content')!; }
  get location() { return this.postForm.get('location')!; }
  get sublocation() { return this.postForm.get('sublocation')!; }
  get cost() { return this.postForm.get('cost')!; }
  
  ngOnInit() {
    
    this.initialState.subscribe(post => {
      this.buttonLabel = post.name ? 'Edit' : 'Add';
      this.postForm = this.fb.group({
        name: [ post.name, [Validators.required] ],
        email: [ post.email, [Validators.required, Validators.email] ],
        phoneNumber: [ post.phoneNumber, [Validators.required] ],
        subject: [ post.subject, [Validators.required] ],
        content: [ post.content, [ Validators.required, Validators.minLength(5), AtLeast1UpperCase() ] ],
        location: [ post.location, [Validators.required] ],
        sublocation: [ post.sublocation, [Validators.required] ],
        cost: [ post.cost ]
      });
    });
  
    this.postForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }
  
  submitForm() {
    this.formSubmitted.emit(this.postForm.value);
  }

}
