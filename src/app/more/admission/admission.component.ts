import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  addmissionModel: any = {};
  validationForm: any;
  isUpdate: boolean = false;
  selectedSubject: any = null;
  subjectdata: any = [

  ]
  form!: FormGroup;
  submitted = false;
  @ViewChild('parentDiv') parentDiv!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

  constructor(
    private homeService: HomeService,
    private toastrMessage: ToastrService,
    private formBuilder: FormBuilder,
    private renderer: Renderer2
  ) {
    this.getdepDataById()
  }


  ngOnInit(): void {
    this.selectedSubject = 'Select Subject';
    this.form = this.formBuilder.group({
      sname: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mnumber: ['', Validators.required],
      uname: ['', Validators.required],
      cname: ['', Validators.required],
      bsub: ['', Validators.required],
      cgpa: [''] // CGPA validation is not set to required as per your form
    });
  }
  ngAfterViewInit() {
    const parentWidth = this.parentDiv.nativeElement.offsetWidth;
    this.renderer.setStyle(this.dropdownMenu.nativeElement, 'width', parentWidth + 'px');
  }
  getdepDataById() {
    this.homeService.getDepartmentDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.subjectdata = res.sort((a: any, b: any) => a.department.localeCompare(b.department));
    });
  }
  selectSubject(val: any) {
    this.selectedSubject = val;

  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubjectChange(data: any) {
    this.selectedSubject = data.target.value;

  }
  saveContactUSData() {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.addmissionModel.institute_id = localStorage.getItem('InstituteId');

    this.addmissionModel.subject = this.selectedSubject;
    this.homeService.SaveAdmissionDetails(this.addmissionModel).subscribe((res: any) => {
      if (res == 'success') {
        this.submitted = false;
        this.addmissionModel = {};
        this.selectedSubject = 'Select Subject';
        this.form.reset();
        this.toastrMessage.success('Thank you for Inquiry.', 'Success', { timeOut: 3000, });
      }
    })
  }
}
