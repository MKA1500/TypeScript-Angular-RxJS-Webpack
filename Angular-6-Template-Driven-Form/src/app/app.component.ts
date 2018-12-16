import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female', 'other', 'prefer not to say'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //     gender: 'male'
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'Dora'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value.username);
  //   console.log(form.value.email);
  //   console.log(form.value.secret);
  //   console.log('form object:');
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value.userData.email);
  }
}
