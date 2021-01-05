import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
//https://github.com/ionic-team/ionic-framework/issues/16807
import { IonContent, IonList } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonContent) contentArea: IonContent;
  @ViewChild(IonList, { read: ElementRef }) chatList: ElementRef;

  public chatMessage: string = '';
  private mutationObserver: MutationObserver;

  constructor(public dataService: DataService) { }

  ngOnInit() {

  }

  sendMessage(): void {

  }

}
