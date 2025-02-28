import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {
    constructor(
        private http: HttpClient
    ) { }
    getInstituteDetailsById(data: any) {
        return this.http.get(ApiService.getInstituteDetailByUrlURL + data);
    }
    getLastUpdateSiteByIdURL(id: any) {
        return this.http.get(ApiService.getLastUpdateSiteByIdURL + id);
    }
    saveInstituteData(data: any) {
        return this.http.post(ApiService.saveInsituteDetailsURL, data);
    }
    getAllInstituteData() {
        return this.http.get(ApiService.getAllInstituteDetailsURL);
    }
    saveBannersImagesData(data: any) {
        return this.http.post(ApiService.saveGalleryImagesURL, data);
    }
    uploadBannersImage(img: any): Observable<any> {
        return this.http.post<any>(ApiService.uploadGalleryImagesURL, img);
    }
    getBannersImagesById(id: any) {
        let data = {
            institute_id: id
        };
        return this.http.post(ApiService.getImagesByIdDetailsURL, data);
    }
    activeDeavctiveBanners(data: any): Observable<any> {
        return this.http.post<any>(ApiService.updateActiveDeactiveBannersURL, data);
    }
    removeBannersImagesById(id: any) {
        let data = {
            id: id
        };
        return this.http.post(ApiService.removeImagesByIdDetailsURL, data);
    }
    saveDepartmentListData(data: any) {
        return this.http.post(ApiService.saveDepartmentListURL, data);
    }
    getDepartmentDataById(institute_id: any) {
        return this.http.get(ApiService.getDepartmentByIdDetailsURL + institute_id);
    }
    getYearData(institute_id: any) {
        
        return this.http.get(ApiService.getYearbyGroupDetailsURL + institute_id);
    }
    removeDepartmentDataById(institute_id: any) {
        return this.http.get(ApiService.removeDepartmentByIdDetailsURL + institute_id);
    }
    updateDepartmentListData(data: any) {
        return this.http.post(ApiService.updateDepartmentListURL, data);
    }
    uploadBlogImage(img: any): Observable<any> {
        return this.http.post<any>(ApiService.uploadBlogImagesURL, img);
    }
    saveBlogDetails(data: any) {
        return this.http.post(ApiService.saveBlogDetailsURL, data);
    }
    getBlogsById(id: any) {
        return this.http.get(ApiService.getBlogsDetailsByIdURL + id);
    }
    uploadOInfraImage(img: any): Observable<any> {
        return this.http.post<any>(ApiService.uploadInfraImageURL, img);
    }
    saveInfrastructureDetails(data: any) {

        return this.http.post(ApiService.saveInfrastructureDetailsURL, data);
    }
    getInfraDetails(id: any) {
        return this.http.get(ApiService.getInfraDetailsByIdURL + id);
    }
    getInfraMultiImageById(id: any) {
        return this.http.get(ApiService.getInfraMultiImageByIdURL + id);
    }
    saveAlumniDetail(data: any) {
        return this.http.post(ApiService.SaveAlumniDetailsURL, data);
    }
    saveContactUsDetails(data: any) {

        return this.http.post(ApiService.saveContactUsDetailsURL, data);
    }
    getNewsDataById(institute_id: any) {
        return this.http.get(ApiService.getNewsByIdDetailsURL + institute_id);
    }
    getMagazineList() {
        return this.http.get(ApiService.getMagazineListURL);
    }
    getAllNewsDataForInstitute(institute_id: any) {
        return this.http.get(ApiService.getAllNewsDetailsURL + institute_id);
    }
    getNewsOnlyForCESURL(institute_id: any) {
        return this.http.get(ApiService.getNewsOnlyForCESURL + institute_id);
    }
    savecounsellingDetail(data: any) {
        return this.http.post(ApiService.savecounsellingDetailsURL, data);
    }
    getResultDetailsById(id: any) {
        return this.http.get(ApiService.getResultDetailsByIdURL + id);
    }
    getothersDataById(institute_id: any) {
        return this.http.get(ApiService.getOthersByIdDetailsURL + institute_id);
    }
    getScholarshipData(id: any) {
        return this.http.get(ApiService.getScholarshipDetailsURL + id);
    }
    getQuestionData(id: any) {
        return this.http.get(ApiService.getQuestionPapersDetailsURL + id);
    }
    getStudentList(id: any) {
        return this.http.get(ApiService.getStudentListDataURL + id);
    }
    getNAACData() {
        return this.http.get(ApiService.getNaacDataURL);
    }
    getNewNaacDetails(id:any){
        return this.http.get(ApiService.GetNewNaacDetailsByIdURL+id);
    }
    getKeyNoGroup(id: any) {
        let data = {
            criteria: id
        };
        return this.http.post(ApiService.getKeyNoDataGroupByURL, data);
    }
    getCriteriaGroup() {
        return this.http.get(ApiService.getKeyNoDataGroupByURL);
    }
    sendCriteriaDetails(id: any) {
        let data = {
            criteria: id
        };
        return this.http.post(ApiService.sendCriteriaDetailsURL, data);
    }
    getCommeteeDetails(id: any) {
        return this.http.get(ApiService.getCommitteeDetailsByIdURL + id);
    }
    getCommiteeMultiImageById(id: any) {
        return this.http.get(ApiService.getCommitteeMultiImagesByIdURL + id);
    }
    getNaacLinkDetails() {
        return this.http.get(ApiService.getNaacLinkDataURL);
    }
    getPlacementDetails(id: any) {
        return this.http.get(ApiService.getPlacementDetailsByIdURL + id);
    }
    getPlacementMultiImageById(id: any) {
        return this.http.get(ApiService.getPlacementMultiImagesByIdURL + id);
    }
    getResearchDetails(id: any) {
        return this.http.get(ApiService.getResearchDetailsByIdURL + id);
    }
    getCampusDetails(id: any) {
        return this.http.get(ApiService.getCampusDetailsByIdURL + id);
    }
    getCampusMultiImageById(id: any) {
        return this.http.get(ApiService.getCampusMultiImagesByIdURL + id);
    }
    getSyllabusDetails(id: any) {
        return this.http.get(ApiService.getSyllabusDetailsByIdURL + id);
    }
    SaveAdmissionDetails(data: any) {
        return this.http.post(ApiService.saveAdmissionDetailsURL, data);
    }
    getDepMultiImageById(id: any) {
        return this.http.get(ApiService.getDepMultiImageByIdURL + id);
    }
    getAchievementsList(id: any) {
        return this.http.get(ApiService.getAchievementsListDataURL + id);
    }
}
