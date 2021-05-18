import {Picture} from './picture';

export class PictureService{
    pictures:Picture[]=[
        {title:"Ночная терраса кафе",
         yearOfCreate:"1888 г.",
         author:"Винсент Ван Гог",
         image:"/assets/images/nochnaya-terrasa-kafe-van-gog+.jpg"},
        {title:"Среди волн",
        yearOfCreate:"1898 г.",
        author:"Иван Константинович Айвазовский",
        image:"/assets/images/1468841407_sredi-voln-aivazovskii.jpg"},
        {title:"Ирисы",
        yearOfCreate:"1888 г.",
        author:"Винсент Ван Гог",
        image:"/assets/images/6AFCA35D-1939-4F5C-9DD9-EB059F73CEE5.jpeg"},
        {title:"Юдифь и Олоферн",
        yearOfCreate:"1901 г.",
        author:"Густав Климт",
        image:"/assets/images/294051.webp"}
    ]

    getGalery()
    {
        return this.pictures;
    }
}
