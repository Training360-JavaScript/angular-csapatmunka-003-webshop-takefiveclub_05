import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  list: Product[] = [
    {
      id: 1,
      catId: 1,
      name: 'Rigid Didymodon Moss',
      description: 'morbi ut odio cras mi pede',
      image: '/assets/pictures/1.jpg',
      price: 33,
      stock: 8,
      featured: false,
      active: false,
    },
    {
      id: 2,
      catId: 1,
      name: 'Cape Thompson Draba',
      description: 'accumsan tellus nisi eu orci',
      image: '/assets/pictures/2.jpg',
      price: 55,
      stock: 8,
      featured: true,
      active: true,
    },
    {
      id: 3,
      catId: 4,
      name: 'Hopea',
      description: 'sapien ut nunc vestibulum ante ipsum primis',
      image: '/assets/pictures/3.jpg',
      price: 67,
      stock: 13,
      featured: true,
      active: true,
    },
    {
      id: 4,
      catId: 1,
      name: "Parish's Eryngo",
      description: 'at velit eu est congue',
      image: '/assets/pictures/4.jpg',
      price: 44,
      stock: 22,
      featured: true,
      active: false,
    },
    {
      id: 5,
      catId: 1,
      name: 'Jackson Hole Thistle',
      description: 'pede justo lacinia eget tincidunt',
      image: '/assets/pictures/5.jpg',
      price: 38,
      stock: 12,
      featured: true,
      active: true,
    },
    {
      id: 6,
      catId: 3,
      name: 'Senita Cactus',
      description: 'donec semper sapien a libero nam',
      image: '/assets/pictures/6.jpg',
      price: 11,
      stock: 27,
      featured: true,
      active: true,
    },
    {
      id: 7,
      catId: 1,
      name: 'Cup Lichen',
      description: 'consequat in consequat ut nulla',
      image: '/assets/pictures/7.jpg',
      price: 37,
      stock: 49,
      featured: false,
      active: true,
    },
    {
      id: 8,
      catId: 3,
      name: 'Showy Penstemon',
      description: 'quis orci nullam molestie',
      image: '/assets/pictures/8.jpg',
      price: 51,
      stock: 48,
      featured: true,
      active: true,
    },
    {
      id: 9,
      catId: 2,
      name: 'Subalpine Larch',
      description: 'faucibus orci luctus et',
      image: '/assets/pictures/9.jpg',
      price: 30,
      stock: 13,
      featured: true,
      active: true,
    },
    {
      id: 10,
      catId: 2,
      name: 'Maryland Meadowbeauty',
      description: 'condimentum id luctus nec molestie sed',
      image: '/assets/pictures/10.jpg',
      price: 11,
      stock: 18,
      featured: false,
      active: false,
    },
    {
      id: 11,
      catId: 2,
      name: 'Tropidia',
      description: 'nisl duis ac nibh fusce lacus purus',
      image: '/assets/pictures/11.jpg',
      price: 23,
      stock: 26,
      featured: true,
      active: true,
    },
    {
      id: 12,
      catId: 3,
      name: "Rehman's Halfchaff Sedge",
      description: 'dictumst etiam faucibus cursus',
      image: '/assets/pictures/12.jpg',
      price: 76,
      stock: 3,
      featured: true,
      active: false,
    },
    {
      id: 13,
      catId: 4,
      name: 'Distichium Moss',
      description: 'dis parturient montes nascetur ridiculus mus',
      image: '/assets/pictures/13.jpg',
      price: 54,
      stock: 6,
      featured: false,
      active: false,
    },
    {
      id: 14,
      catId: 1,
      name: 'Butte Desertparsley',
      description: 'dignissim vestibulum vestibulum ante ipsum primis in',
      image: '/assets/pictures/14.jpg',
      price: 46,
      stock: 35,
      featured: false,
      active: false,
    },
    {
      id: 15,
      catId: 3,
      name: "Thurber's Fescue",
      description: 'curabitur gravida nisi at nibh in hac',
      image: '/assets/pictures/15.jpg',
      price: 62,
      stock: 39,
      featured: true,
      active: true,
    },
    {
      id: 16,
      catId: 3,
      name: 'Mojave Sandwort',
      description: 'magna ac consequat metus sapien ut',
      image: '/assets/pictures/16.jpg',
      price: 17,
      stock: 35,
      featured: false,
      active: false,
    },
    {
      id: 17,
      catId: 3,
      name: 'Syrian Cephalaria',
      description: 'nascetur ridiculus mus vivamus vestibulum',
      image: '/assets/pictures/17.jpg',
      price: 74,
      stock: 23,
      featured: false,
      active: false,
    },
    {
      id: 18,
      catId: 4,
      name: 'Cissus',
      description: 'in blandit ultrices enim lorem ipsum dolor',
      image: '/assets/pictures/18.jpg',
      price: 25,
      stock: 40,
      featured: true,
      active: true,
    },
    {
      id: 19,
      catId: 4,
      name: 'Bushy Blazingstar',
      description: 'eget eleifend luctus ultricies eu',
      image: '/assets/pictures/19.jpg',
      price: 38,
      stock: 25,
      featured: false,
      active: false,
    },
    {
      id: 20,
      catId: 1,
      name: 'Seaside Joyweed',
      description: 'lorem id ligula suspendisse ornare consequat',
      image: '/assets/pictures/20.jpg',
      price: 76,
      stock: 13,
      featured: true,
      active: false,
    },
    {
      id: 21,
      catId: 4,
      name: 'Hollyberry Cotoneaster',
      description: 'neque duis bibendum morbi non quam',
      image: '/assets/pictures/21.jpg',
      price: 40,
      stock: 42,
      featured: false,
      active: true,
    },
    {
      id: 22,
      catId: 2,
      name: 'Buffelgrass',
      description: 'pede ac diam cras pellentesque volutpat',
      image: '/assets/pictures/22.jpg',
      price: 31,
      stock: 24,
      featured: false,
      active: true,
    },
    {
      id: 23,
      catId: 1,
      name: 'Springflowering Goldenrod',
      description: 'vulputate elementum nullam varius',
      image: '/assets/pictures/23.jpg',
      price: 68,
      stock: 7,
      featured: true,
      active: true,
    },
    {
      id: 24,
      catId: 2,
      name: 'Cascade Onion',
      description: 'pulvinar lobortis est phasellus sit amet erat',
      image: '/assets/pictures/24.jpg',
      price: 51,
      stock: 48,
      featured: true,
      active: true,
    },
    {
      id: 25,
      catId: 4,
      name: 'Mountain Bush Honeysuckle',
      description: 'vulputate vitae nisl aenean',
      image: '/assets/pictures/25.jpg',
      price: 24,
      stock: 40,
      featured: true,
      active: true,
    },
    {
      id: 26,
      catId: 3,
      name: 'Gray Sheoak',
      description: 'cursus urna ut tellus nulla',
      image: '/assets/pictures/26.jpg',
      price: 62,
      stock: 39,
      featured: false,
      active: true,
    },
    {
      id: 27,
      catId: 2,
      name: 'Cutleaf Silverpuffs',
      description: 'vestibulum ac est lacinia nisi venenatis tristique',
      image: '/assets/pictures/27.jpg',
      price: 56,
      stock: 42,
      featured: false,
      active: true,
    },
    {
      id: 28,
      catId: 2,
      name: 'Tuftedstem Rush',
      description: 'scelerisque mauris sit amet',
      image: '/assets/pictures/28.jpg',
      price: 80,
      stock: 42,
      featured: true,
      active: false,
    },
    {
      id: 29,
      catId: 2,
      name: 'Sphagnum',
      description: 'et magnis dis parturient montes nascetur',
      image: '/assets/pictures/29.jpg',
      price: 24,
      stock: 27,
      featured: false,
      active: false,
    },
    {
      id: 30,
      catId: 1,
      name: 'Common Snowberry',
      description: 'donec diam neque vestibulum eget vulputate ut',
      image: '/assets/pictures/30.jpg',
      price: 53,
      stock: 20,
      featured: true,
      active: true,
    },
    {
      id: 31,
      catId: 1,
      name: 'Kamanomano',
      description: 'mi sit amet lobortis sapien sapien non',
      image: '/assets/pictures/31.jpg',
      price: 11,
      stock: 33,
      featured: false,
      active: false,
    },
    {
      id: 32,
      catId: 3,
      name: 'Dwarf Sand Verbena',
      description: 'auctor sed tristique in tempus sit amet',
      image: '/assets/pictures/32.jpg',
      price: 67,
      stock: 43,
      featured: false,
      active: true,
    },
    {
      id: 33,
      catId: 3,
      name: 'Disc Lichen',
      description: 'cum sociis natoque penatibus et magnis dis',
      image: '/assets/pictures/33.jpg',
      price: 76,
      stock: 26,
      featured: true,
      active: true,
    },
    {
      id: 34,
      catId: 4,
      name: 'Cyrtandra',
      description: 'massa id lobortis convallis tortor risus dapibus',
      image: '/assets/pictures/34.jpg',
      price: 15,
      stock: 4,
      featured: false,
      active: false,
    },
    {
      id: 35,
      catId: 2,
      name: 'Monstera',
      description: 'aliquet massa id lobortis convallis',
      image: '/assets/pictures/35.jpg',
      price: 74,
      stock: 13,
      featured: false,
      active: true,
    },
    {
      id: 36,
      catId: 4,
      name: 'Paradox Lupine',
      description: 'consequat ut nulla sed',
      image: '/assets/pictures/36.jpg',
      price: 11,
      stock: 9,
      featured: true,
      active: false,
    },
    {
      id: 37,
      catId: 4,
      name: 'Bloodroot',
      description: 'suscipit a feugiat et eros vestibulum',
      image: '/assets/pictures/37.jpg',
      price: 70,
      stock: 22,
      featured: false,
      active: true,
    },
    {
      id: 38,
      catId: 2,
      name: 'Oldfield Grass',
      description: 'lectus aliquam sit amet diam in',
      image: '/assets/pictures/38.jpg',
      price: 66,
      stock: 20,
      featured: true,
      active: true,
    },
    {
      id: 39,
      catId: 4,
      name: "Wright's Flowering Fern",
      description: 'primis in faucibus orci luctus et',
      image: '/assets/pictures/39.jpg',
      price: 62,
      stock: 14,
      featured: false,
      active: false,
    },
    {
      id: 40,
      catId: 2,
      name: 'West Virginia Dewberry',
      description: 'lorem quisque ut erat curabitur gravida nisi',
      image: '/assets/pictures/40.jpg',
      price: 76,
      stock: 29,
      featured: false,
      active: true,
    },
    {
      id: 41,
      catId: 1,
      name: 'Climbing Cactus',
      description: 'eu est congue elementum in hac',
      image: '/assets/pictures/41.jpg',
      price: 61,
      stock: 12,
      featured: true,
      active: false,
    },
    {
      id: 42,
      catId: 4,
      name: 'Purple Sage',
      description: 'pretium iaculis justo in',
      image: '/assets/pictures/42.jpg',
      price: 35,
      stock: 13,
      featured: true,
      active: true,
    },
    {
      id: 43,
      catId: 4,
      name: 'Slender Goldentop',
      description: 'eu orci mauris lacinia',
      image: '/assets/pictures/43.jpg',
      price: 74,
      stock: 32,
      featured: true,
      active: true,
    },
    {
      id: 44,
      catId: 1,
      name: 'Pinkladies',
      description: 'consequat nulla nisl nunc',
      image: '/assets/pictures/44.jpg',
      price: 47,
      stock: 15,
      featured: false,
      active: true,
    },
    {
      id: 45,
      catId: 2,
      name: 'White Meadowfoam',
      description: 'hac habitasse platea dictumst etiam faucibus cursus',
      image: '/assets/pictures/45.jpg',
      price: 20,
      stock: 16,
      featured: true,
      active: false,
    },
    {
      id: 46,
      catId: 2,
      name: 'Fivewing Spiderling',
      description: 'non lectus aliquam sit amet diam in',
      image: '/assets/pictures/46.jpg',
      price: 32,
      stock: 16,
      featured: false,
      active: true,
    },
    {
      id: 47,
      catId: 1,
      name: 'Wild Garlic',
      description: 'sem mauris laoreet ut rhoncus aliquet',
      image: '/assets/pictures/47.jpg',
      price: 68,
      stock: 25,
      featured: true,
      active: true,
    },
    {
      id: 48,
      catId: 1,
      name: 'Kamchatka Rhododendron',
      description: 'luctus ultricies eu nibh quisque id',
      image: '/assets/pictures/48.jpg',
      price: 69,
      stock: 29,
      featured: false,
      active: false,
    },
    {
      id: 49,
      catId: 2,
      name: 'Eared Coneflower',
      description: 'ultrices enim lorem ipsum dolor sit',
      image: '/assets/pictures/49.jpg',
      price: 70,
      stock: 20,
      featured: false,
      active: true,
    },
    {
      id: 50,
      catId: 4,
      name: 'Climbing Wartclub',
      description: 'quisque id justo sit amet sapien dignissim',
      image: '/assets/pictures/50.jpg',
      price: 44,
      stock: 46,
      featured: false,
      active: false,
    },
  ];
  constructor() {}

  getAll(): Product[] {
    return this.list;
  }
}
