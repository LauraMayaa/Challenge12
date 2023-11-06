import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';
import { NasaImage } from './nasa.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  imageOfToday: NasaImage | undefined;

  constructor(public imgOfTheDay: NasaService) { }

  ngOnInit(): void {
    this.imgOfTheDay.getImageOfTheDay().subscribe((imgFromApi: NasaImage) =>
      this.imageOfToday = imgFromApi);
  }

}
