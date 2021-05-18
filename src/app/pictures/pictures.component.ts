import { Component, OnInit } from '@angular/core';
import {Picture} from '../picture';
import { PictureService } from '../PictureService.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css'],
  providers:[PictureService]
})
export class PicturesComponent implements OnInit {
galery:Picture[]=[];

  constructor(private PictureService:PictureService) { }

  ngOnInit(): void {
    this.galery=this.PictureService.getGalery();
  }

  closeDisplay(item:Picture):void
  {
    
    var dinNone=document.getElementById("maxSize") as HTMLDivElement;
    dinNone.style.display="block";
    dinNone.style.zIndex="100";
    var maxSize=document.getElementById("maxImg") as HTMLImageElement;
    maxSize.src=item.image as string;

    var ImgTitle=document.getElementById("ImgTitle") as HTMLElement;
    ImgTitle.innerHTML=item.title as string;



    var v=document.getElementById("v") as HTMLElement;
    v.style.display="none";
  }

  CloseImg()
  {
    var dinNone=document.getElementById("maxSize") as HTMLDivElement;
    dinNone.style.display="none";
    var v=document.getElementById("v") as HTMLElement;
    v.style.display="block";
  }
}
