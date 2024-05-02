import id00Url from './assets/posters-img/id0.jpeg';
import id01Url from './assets/posters-img/id1.jpeg';
import id02Url from './assets/posters-img/id2.jpeg';
import id3Url from './assets/posters-img/id3.jpeg';
import id4Url from './assets/posters-img/id4.jpeg';
import id5Url from './assets/posters-img/id5.jpeg';



export type ProductData = {
    id: number;
    title: string;
    description: string;
    type: "poster" | "photo" | "canvas";
    imgUrl: string;
    availableSizesMM: { width: number, height: number }[];
    availableSizesFormats: ("A0" | "A1" | "A2" | "A3" | "A4")[];
    weightGrams: number;
    tags: string[];
    creation_date: string;
    price: number;
}

export const productsData: ProductData[] = [
    {
        id: 0,
        title: "Poster 1",
        description: "Description of the poster 1",
        type: "poster",
        imgUrl: id00Url,
        availableSizesMM: [{ width: 1000, height: 2000 }, { width: 500, height: 1000 }],
        availableSizesFormats: ["A0", "A1"],
        weightGrams: 100,
        tags: ["poster", "art", "abstract"],
        creation_date: "2021-09-01",
        price: 100,

    },
    {
        id: 1,
        title: "Poster 2",
        description: "Description of the poster 2",
        type: "poster",
        imgUrl: id01Url,
        availableSizesMM: [{ width: 1000, height: 2000 }, { width: 500, height: 1000 }],
        availableSizesFormats: ["A0", "A1"],
        weightGrams: 100,
        tags: ["poster", "art", "abstract"],
        creation_date: "2021-09-01",
        price: 100,

    },
    {
        id: 2,
        title: "Poster 3",
        description: "Description of the poster 3",
        type: "poster",
        imgUrl: id02Url,
        availableSizesMM: [{ width: 1000, height: 2000 }, { width: 500, height: 1000 }],
        availableSizesFormats: ["A0", "A1"],
        weightGrams: 100,
        tags: ["poster", "art", "abstract"],
        creation_date: "2021-09-01",

        price: 100,

    },
    {
        id: 3,
        title: "Poster 4",
        description: "Description of the poster 4",
        type: "poster",
        imgUrl: id3Url,
        availableSizesMM: [{ width: 1000, height: 2000 }, { width: 500, height: 1000 }],
        availableSizesFormats: ["A0", "A1"],
        weightGrams: 100,
        tags: ["poster", "art", "abstract"],
        creation_date: "2021-09-01",
        price: 100,

    },
    {
        id: 4,
        title: "Poster 5",
        description: "Description of the poster 5",
        type: "poster",
        imgUrl: id4Url,
        availableSizesMM: [{ width: 1000, height: 2000 }, { width: 500, height: 1000 }],
        availableSizesFormats: ["A0", "A1", "A2", "A3", "A4"],
        weightGrams: 100,
        tags: ["poster", "art", "abstract"],
        creation_date: "2021-09-01",
        price: 100,

    },
    {
        id: 5,
        title: "Poster 6",
        description: "Description of the poster 6",
        type: "poster",
        imgUrl: id5Url,
        availableSizesMM: [{ width: 1000, height: 2000 }, { width: 500, height: 1000 }],
        availableSizesFormats: ["A0", "A1", "A2"],
        weightGrams: 100,
        tags: ["poster", "art", "abstract"],
        creation_date: "2021-09-01",
        price: 100,

    }
]