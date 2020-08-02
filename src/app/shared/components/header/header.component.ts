import { Component, OnInit } from '@angular/core';
import { SearchFilterPage } from 'src/app/pages/modal/search-filter/search-filter.page';
import { ModalController, PopoverController } from '@ionic/angular';
import { NotificationsComponent } from 'src/app/components/notifications/notifications.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';

  constructor(public modalCtrl: ModalController,public popoverCtrl: PopoverController,) { }

  ngOnInit() {
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }
}
