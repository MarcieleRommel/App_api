import { Component, ElementRef } from '@angular/core';
import {UserService} from '../../app/api/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers:[{provide: UserService}]
})

export class Tab1Page {
  public listaConselhos = new Array<any>();

  constructor(private UserService: UserService) {
    this.getData();
  }

  getData() {
    this.UserService.getData().subscribe(data => {
      console.log(data);
    });

  }

}





 /* // aqui ele abre aquele pop-over alert
  constructor() {
    private UserProvider:UserProvider
    //this.somaDoisnumeros(10,99);

    }

    ionViewDidLoad(){
      this.UserProvider.getLatestApi()
    }
   /* public somaDoisnumeros(num1:number, num2:number): void {

      // tem o alert para trazer o pop-over em tela
      alert (num1+num2);*/
