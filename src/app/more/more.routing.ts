import { Routes } from '@angular/router';
import { CampusComponent } from './campus/campus.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsComponent } from './news/news.component';
import { SearchComponent } from './search/search.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { PaperComponent } from './paper/paper.component';
import { ResultComponent } from './result/result.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { AnswerKeyComponent } from './answer-key/answer-key.component';

export const MoreRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'campus',
            component: CampusComponent
        },
        {
            path: 'search/:id',
            component: SearchComponent
        },
        {
            path: 'news',
            component: NewsComponent
        },
        {
            path: 'links/:id',
            component: SyllabusComponent
        },
        {
            path: 'magazine',
            component: MagazineComponent
        },
        {
            path: 'paper',
            component: PaperComponent
        },
        {
            path: 'result',
            component: ResultComponent
        },
        {
            path:'scholarship',
            component:ScholarshipComponent
        },
        {
            path: 'academic-calendar',
            component: AcademicCalendarComponent
        },
        {
            path: 'answer-key',
            component: AnswerKeyComponent
        }
    ]
}];
