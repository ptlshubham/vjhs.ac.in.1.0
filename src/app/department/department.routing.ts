import { Routes } from '@angular/router';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

export const DepartmentRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'staff',
            component: StaffDetailsComponent
        },
        {
            path: 'student',
            component: StudentDetailsComponent
        },
    ]
}];
