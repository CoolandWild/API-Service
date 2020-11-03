import { Component, OnInit } from '@angular/core';
import { photoService } from '../services/photos.service';
import { Photos } from '../classes/photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private photoservice: photoService) { }

  listPhotos: Photos[];

  ngOnInit(): void {
    this.photoservice.getPhotos().subscribe((data) => {
      this.listPhotos = data;
      console.log('type of id', typeof this.listPhotos[0].id)
    });
  }
}