export const products = [
  {
    title: "The Aluxor",
    link: "https://github.com/Gaurav098766/TheAluxor",
    thumbnail: "/hotel.png",
  },

  {
    title: "Bivouac",
    link: "https://github.com/Gaurav098766/Bivouac",
    thumbnail: "/campground.png",
  },
  {
    title: "File Management System",
    link: "https://github.com/Gaurav098766/file_manage-nexttJS",
    thumbnail: "/file_manage.png",
  },
  {
    title: "Microservice with Nodejs and React",
    link: "https://github.com/Gaurav098766/Mini-Microservice-app",
    thumbnail: "/microservice.jpg",
  },

  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
  categoryId: number;
}

export const categories: Category[] = [
  { id: 1, name: "NodeJS" },
  { id: 2, name: "NextJS" },
];

export const work: Product[] = [
  {
    id: 1,
    name: "Microservice with Node and React",
    description:
      "A simple microservice blog application where users can post the comments regarding any blog. Users can also delete the comments from a particular blog.",
    link: "https://github.com/Gaurav098766/Mini-Microservice-app",
    image: "/microservice.jpg",
    categoryId: 1,
  },
  {
    id: 2,
    name: "File Management System",
    description:
      "File management application for storing your images, files and PDF. Integrated Clerk for Authentication and Authorization. Search, Delete and Restore Functionality implemented.",
    link: "https://github.com/Gaurav098766/file_manage-nexttJS",
    image: "/file_manage.png",
    categoryId: 2,
  },
  {
    id: 3,
    name: "The Aluxor",
    description:
      "Hotel Management application for buying your luxurious rooms.Managing Bookings, Rooms, Users from Admin panel. Filter rooms by Date-range, Search, Types. Stripe payment Gateway.",
    link: "https://github.com/Gaurav098766/TheAluxor",
    image: "/hotel.png",
    categoryId: 1,
  },
  {
    id: 4,
    name: "Bivouac",
    description: "",
    link: "https://github.com/Gaurav098766/Bivouac",
    image: "/campground.png",
    categoryId: 2,
  },
  {
    id: 5,
    name: "Editrix AI",
    description: "",
    link: "https://github.com/Gaurav098766/Mini-Microservice-app",
    image: "/editrix.png",
    categoryId: 1,
  },
  {
    id: 6,
    name: "Pixel Perfect",
    description: "",
    link: "https://github.com/Gaurav098766/Mini-Microservice-app",
    image: "/pixelperfect.png",
    categoryId: 2,
  },
];


export const skills = [
  {
    id: 1,
    title: "Django",
    percentage: "90%",
    image: "/django.png",
  },
  {
    id: 2,
    title: "NextJS",
    percentage: "90%",
    image: "nextjs-icon.png",
  },
  {
    id: 3,
    title: "NodeJS",
    percentage: "90%",
    image: "/nodejs.png",
  },
  {
    id: 4,
    title: "Docker",
    percentage: "90%",
    image: "/docker.png",
  },
  {
    id: 5,
    title: "AWS",
    percentage: "90%",
    image: "/aws.png",
  },
]


export const education = [
  {
    id: 1,
    university: "Pandit Deendayal Energy University",
    startDate: "June 2020",
    endDate: "June 2024",
    Branch: "B-Tech in Information and Communication Technology",
  },
  {
    id: 2,
    university: "Vapi Public School",
    startDate: "June 2017",
    endDate: "June 2019",
    Branch: "Higher Secondary Education(PCM)",
  },
  {
    id: 3,
    university: "Vapi Public School",
    startDate: "June 2016",
    endDate: "June 2017",
    Branch: "Secondary Education",
  },
]