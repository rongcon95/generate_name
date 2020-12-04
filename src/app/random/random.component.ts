import { Component, OnInit } from '@angular/core';
import * as copy from 'copy-to-clipboard';
import * as faker_useragent from 'random-useragent';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  constructor() {
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.onSuccessLastName = this.onSuccessLastName.bind(this);
    this.onErrorLastName = this.onErrorLastName.bind(this);
    this.onSuccessEmail = this.onSuccessEmail.bind(this);
    this.onErrorEmail = this.onErrorEmail.bind(this);
  }
  firstName: any;
  lastName: any;
  email: any;
  UA: any;
  firstNames: any = [
    'An',
    'Bach',
    'Banh',
    'Bao',
    'Bien',
    'Cam',
    'Canh',
    'Canh',
    'Cao',
    'Cai',
    'Cat',
    'Chan',
    'Chau',
    'Chiem',
    'Chu',
    'Chung',
    'Chu',
    'Co',
    'Cu',
    'Cunh',
    'Cuu',
    'Dich',
    'Diep',
    'Doan',
    'Du',
    'Dung',
    'Duu',
    'Dai',
    'Dam',
    'Dao',
    'Dau',
    'Dien',
    'Dinh',
    'Doan',
    'Do',
    'Dong',
    'Dong',
    'Duong',
    'Gia',
    'Giai',
    'Gia',
    'Gian',
    'Giang',
    'Giap',
    'Ha',
    'Hac',
    'Han',
    'Hau',
    'Hinh',
    'Hoa',
    'Hoac',
    'Hoan',
    'Hong',
    'Hua',
    'Huong',
    'Hy',
    'Kha',
    'Khau',
    'Khuat',
    'Kieu',
    'Kim',
    'Ky',
    'Ky',
    'La',
    'Lac',
    'Lai',
    'Lam',
    'Lang',
    'Lanh',
    'Lam',
    'Lan',
    'Le',
    'Lien',
    'Lieu',
    'Lieu',
    'Long',
    'Loi',
    'Luc',
    'Lu',
    'Luong',
    'Luu',
    'Ma',
    'Mac',
    'Mach',
    'Mai',
    'Manh',
    'Mao',
    'Man',
    'Mieu',
    'Minh',
    'Mong',
    'Ngan',
    'Nghe',
    'Nghiem',
    'Ngu',
    'Nguu',
    'Nhac',
    'Nhan',
    'Nham',
    'Nhiep',
    'Nhieu',
    'Nhung',
    'Ninh',
    'Nong',
    'On',
    'On',
    'Ong',
    'Phi',
    'Pho',
    'Phong',
    'Phong',
    'Phu',
    'Phung',
    'Phuong',
    'Quach',
    'Quan',
    'Quan',
    'Quang',
    'Quang',
    'Que',
    'Quyen',
    'Sai',
    'Sam',
    'Su',
    'Ta',
    'Tao',
    'Tang',
    'Tan',
    'Tan',
    'Tat',
    'Te',
    'Thach',
    'Thai',
    'Thai',
    'Thang',
    'Thanh',
    'Thao',
    'Than',
    'Thi',
    'Thich',
    'Thien',
    'Thieu',
    'Thoi',
    'Thuy',
    'Thu',
    'Thuong',
    'Tien',
    'Tiet',
    'Tieu',
    'Tieu',
    'To',
    'Ton',
    'Ton',
    'Tong',
    'Tong',
    'Trac',
    'Trach',
    'Trai',
    'Trang',
    'Tram',
    'Trau',
    'Tri',
    'Trieu',
    'Trinh',
    'Truong',
    'Tu',
    'Tu',
    'Tuong',
    'Uc',
    'Ung',
    'Van',
    'Van',
    'Van',
    'Vi',
    'Vinh',
    'Vu',
    'Vu',
    'Vuong',
    'Vuu',
    'Xa',
    'Xam',
    'Xe',
    'Yen'];
  lastNames: any = ['Lang Manh',
    'Luong Duc',
    'Lieu Trong',
    'Lam Duc',
    'Trieu Trong',
    'Tat Trong',
    'Cong Huu',
    'Dinh Xuan',
    'Lang Manh',
    'Quyen Duc',
    'Lien Cong',
    'Tri Qui',
    'Trach Duc',
    'Kim Thi',
    'Thach Quang',
    'Thao Qui',
    'Chau Xuan',
    'Mai Van',
    'Su Manh',
    'Ha Trong',
    'Lam Manh',
    'Tram Xuan',
    'Ly Trong',
    'Chu Duc',
    'Lieu Ngoc',
    'Tri Xuan',
    'Au Thi',
    'Ty Ngoc',
    'Lieu Manh',
    'Phung Manh',
    'Quang Duc',
    'Ho Dinh',
    'Chau Qui',
    'Dung Huu',
    'Ha Duc',
    'Trang Cong',
    'Thang Huu',
    'Don Quang',
    'Thuy Duc',
    'Huyen',
    'Trinh Huu',
    'Duyen',
    'Trieu Ngoc',
    'Dam Thi',
    'Vu Thi',
    'Quach Thi',
    'Kim Dinh',
    'Chau Dinh',
    'Lieu Trong',
    'Lam Duc',
    'Trieu Trong',
    'Tat Trong',
    'Cong Huu',
    'Dinh Xuan',
    'Lang Manh',
    'Quyen Duc',
    'Sai Dinh',
    'Co Dinh',
    'Dong Cong',
    'Lieu Van',
    'Thanh Manh',
    'Cam Van',
    'Truong Cong',
    'Hoang Duc',
    'Ho Ngoc',
    'Doanh',
    'Giang Ngoc',
    'Tat Dinh',
    'Phu Thi',
    'Phu Xuan',
    'Tran Trong',
    'Tuan Thi',
    'Hy Ngoc',
    'Kim Thi',
    'Ty Qui',
    'Huynh Dinh',
    'Au Manh',
    'Khanh',
    'Thai Huu',
    'Ta Xuan',
    'Lac Xuan',
    'To Quang',
    'Ngo Thi',
    'Tinh',
    'Vang Dinh',
    'Truc',
    'Tu Ngoc',
    'Quach Xuan',
    'Vo Dinh',
    'Nhuan',
    'Quang Manh',
    'Che Duc',
    'Che Van',
    'Cao Cong',
    'Mac Huu',
    'Bien Ngoc',
    'Han Trong',
    'Phung Dinh',
    'Ba Huu',
    'Mai'];
  ngOnInit() {
    this.firstName = this.firstNames[Math.floor(Math.random() * Math.floor(this.firstNames.length))];
    this.lastName = this.lastNames[Math.floor(Math.random() * Math.floor(this.lastNames.length))];
    this.email = this.firstName.toLowerCase() + this.lastName.split(' ').join('').toLowerCase() + Math.floor(Math.random() * Math.floor(this.firstNames.length)) + '@gmail.com';
  }


  onSuccess(e) {
    this.firstName = e.text;
    this.firstName = this.firstNames[Math.floor(Math.random() * Math.floor(this.firstNames.length))];
  }

  onError(e) {
    this.firstName = 'Error trying to copy your text';
  }

  onSuccessLastName(e) {
    this.lastName = e.text;
    this.lastName = this.lastNames[Math.floor(Math.random() * Math.floor(this.lastNames.length))];
  }

  onErrorLastName(e) {
    this.firstName = 'Error trying to copy your text';
  }

  onSuccessEmail(e) {
    this.email = e.text;
    const email = `${this.firstName[Math.floor(Math.random() * Math.floor(this.firstName.length))].split(' ').join('').toLowerCase()}${this.lastNames[Math.floor(Math.random() * Math.floor(this.lastNames.length))].split(' ').join('').toLowerCase()}
    ${this.makeid(10)}@gmail.com`;
    this.email = email.split(' ').join('');
  }

  onErrorEmail(e) {
    this.email = 'Error trying to copy your text';
  }

   makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  UAList: any = [];
  generateUA() {
    for(let i = 0 ; i < 5000 ; i++) {
      const xxx = faker_useragent.getRandom((ua) => {
        return ua.browserName === this.UA && parseFloat(ua.browserVersion) >= 20;
      });
      this.UAList.push(xxx);
    }
  }
}
