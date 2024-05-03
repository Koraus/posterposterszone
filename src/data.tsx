import id00Url from './assets/posters-img/id0.jpeg';
import id01Url from './assets/posters-img/id1.jpeg';
import id02Url from './assets/posters-img/id2.jpeg';
import id3Url from './assets/posters-img/id3.jpeg';
import id4Url from './assets/posters-img/id4.jpeg';
import id5Url from './assets/posters-img/id5.jpeg';
import id6Url from './assets/posters-img/id6.jpeg';
import id7Url from './assets/posters-img/id7.jpeg';


export type ProductData = {
    id: number ;
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
        title: "Pink Flower Field",
        description: "The photo shows a field of pink flowers in full bloom. The flowers have delicate petals that appear to be dancing in the wind.",
        type: "poster",
        imgUrl: id00Url,
        availableSizesMM: [{ width: 1000, height: 2000 }, { width: 500, height: 1000 }],
        availableSizesFormats: ["A0", "A1"],
        weightGrams: 100,
        tags: ["poster", "art", "abstract", "nature", "flowers", "mountains", "landscape", "spring", "beauty", "summer", "scenic", "romantic", "peaceful", "fresh"],
        creation_date: "2021-09-01",
        price: 100,

    },
    {
        id: 1,
        title: "Wildflower Symphony",
        description: "A vibrant photorealistic painting of a lush meadow filled with wildflowers in full bloom.",
        type: "poster",
        imgUrl: id01Url,
        availableSizesMM: [{ width: 1000, height: 2000 }, { width: 500, height: 1000 }],
        availableSizesFormats: ["A0", "A1"],
        weightGrams: 100,
        tags: ["poster", "art", "abstract", "nature", "flowers", "meadow", "mountains", "landscape", "spring",
            "beauty", "summer", "scenic", "romantic", "peaceful", "fresh"],
        creation_date: "2021-09-01",
        price: 100,

    },
    {
        id: 2,
        title: "Harbor Twilight",
        description: "The photo shows a harbor at twilight, with the sun setting in the background. The sky is a vibrant shade of orange and pink, casting a warm glow over the water.",
        type: "poster",
        imgUrl: id02Url,
        availableSizesMM: [{ width: 1000, height: 2000 }, { width: 500, height: 1000 }],
        availableSizesFormats: ["A0", "A1"],
        weightGrams: 100,
        tags: ["poster", "art", "abstract", "harbor", "sunset", "dusk", "Ferris wheel", "waterfront", "travel", "adventure", "exploration", "culture", "commerce", "transportation", "industry", "diversity", "dynamism", "energy"],
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

    },
    {
        id: 6,
        title: "Vintage car",
        description: "A vintage car, possibly from the 1950s or 1960s, is parked on a scenic road under a large tree. The car is a classic American model, with a sleek design and chrome accents. It is painted in a vibrant shade of red that contrasts with the lush green foliage of the surrounding trees. The sun is shining brightly, casting long shadows across the road.",
        type: "poster",
        imgUrl: id6Url,
        availableSizesMM: [{ width: 1000, height: 2000 }, { width: 500, height: 1000 }],
        availableSizesFormats: ["A0", "A1", "A2"],
        weightGrams: 100,
        tags: ["poster", "art", "abstract", " vintage car", "classic car", "road"],
        creation_date: "2021-09-01",
        price: 100,

    },
    {
        id: 7,
        title: "Bloomed rose",
        description: "A single, large, and fully bloomed rose stands majestically in a delicate glass vase, gracing the surface of a wooden table.",
        type: "poster",
        imgUrl: id7Url,
        availableSizesMM: [{ width: 1000, height: 2000 }, { width: 500, height: 1000 }],
        availableSizesFormats: ["A0", "A1", "A2"],
        weightGrams: 100,
        tags: ["poster", "art", "abstract"],
        creation_date: "2021-09-01",
        price: 100,

    },
]


export const popularProducts = [
    1, 2, 5, 6
]