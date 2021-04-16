import {Component, OnInit} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  title = 'Template driven forms';

  contactForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contactForm: NgForm) {
    console.log(this.contactForm.value);
  }
}

