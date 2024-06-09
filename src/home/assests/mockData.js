import casual_1 from './casual (1).jpg'
import casual_2 from './casual (2).jpg'
import casual_3 from './casual (3).jpg'
import casual_4 from './casual (4).jpg'
import casual_5 from './casual (5).jpg'
import casual_6 from './casual (6).jpg'
import casual_7 from './casual (7).jpg'
import casual_8 from './casual (8).jpg'
import casual_9 from './casual (9).jpg'
import casual_10 from './casual (10).jpg'
import formal_1 from './formal (1).jpg'
import formal_2 from './formal (2).jpg'
import formal_3 from './formal (3).jpg'
import formal_4 from './formal (4).jpg'
import formal_5 from './formal (5).jpg'
import formal_6 from './formal (6).jpg'
import formal_7 from './formal (7).jpg'
import formal_8 from './formal (8).jpg'
import formal_9 from './formal (9).jpg'
import formal_10 from './formal (10).jpg'

let data = [
  {
    "id": 1,
    "image": formal_1,
    "size": [5, 6, 7, 8, 9],
    "category": "formal",
    "price": 150,
    "name": "Classic Black Heel",
    "description": "Elegant black heels perfect for office wear and formal events."
  },
  {
    "id": 2,
    "image": formal_2,
    "size": [5, 6, 7, 8, 9],
    "category": "formal",
    "price": 175,
    "name": "Sophisticated Stiletto",
    "description": "Sophisticated stiletto heels ideal for business meetings and formal occasions."
  },
  {
    "id": 3,
    "image": formal_3,
    "size": [5, 6, 7, 8, 9],
    "category": "formal",
    "price": 130,
    "name": "Modern Formal Heel",
    "description": "Classic formal heels with a modern touch, suitable for any formal event."
  },
  {
    "id": 4,
    "image": formal_4,
    "size": [5, 6, 7, 8, 9],
    "category": "formal",
    "price": 160,
    "name": "Elegant Court Heel",
    "description": "A must-have elegant court heels for a polished look at formal events."
  },
  {
    "id": 5,
    "image": formal_5,
    "size": [5, 6, 7, 8, 9],
    "category": "formal",
    "price": 180,
    "name": "High Heel Pump",
    "description": "Stylish high heel pumps that add a touch of elegance to any outfit."
  },
  {
    "id": 6,
    "image": formal_6,
    "size": [5, 6, 7, 8, 9],
    "category": "formal",
    "price": 120,
    "name": "Classic Nude Heel",
    "description": "Versatile nude heels perfect for both office wear and evening events."
  },
  {
    "id": 7,
    "image": formal_7,
    "size": [5, 6, 7, 8, 9],
    "category": "formal",
    "price": 140,
    "name": "Chic Formal Heel",
    "description": "Chic and comfortable, these heels are perfect for all-day wear at formal events."
  },
  {
    "id": 8,
    "image": formal_8,
    "size": [5, 6, 7, 8, 9],
    "category": "formal",
    "price": 190,
    "name": "Luxurious Black Heel",
    "description": "Luxurious black heels that offer both style and comfort for any formal occasion."
  },
  {
    "id": 9,
    "image": formal_9,
    "size": [5, 6, 7, 8, 9],
    "category": "formal",
    "price": 165,
    "name": "Elegant Pointed Heel",
    "description": "Elegant pointed heels that are perfect for making a statement at formal events."
  },
  {
    "id": 10,
    "image": formal_10,
    "size": [5, 6, 7, 8, 9],
    "category": "formal",
    "price": 110,
    "name": "Simple Formal Heel",
    "description": "Simple yet stylish formal heels that complement any formal attire."
  },
  {
    "id": 11,
    "image": casual_1,
    "size": [5, 6, 7, 8, 9],
    "category": "casual",
    "price": 115,
    "name": "Casual Block Heel",
    "description": "Comfortable block heels perfect for casual outings and everyday wear."
  },
  {
    "id": 12,
    "image": casual_2,
    "size": [5, 6, 7, 8, 9],
    "category": "casual",
    "price": 195,
    "name": "Trendy Casual Heel",
    "description": "Trendy and stylish, these casual heels are perfect for a day out with friends."
  },
  {
    "id": 13,
    "image": casual_3,
    "size": [5, 6, 7, 8, 9],
    "category": "casual",
    "price": 135,
    "name": "Everyday Casual Heel",
    "description": "Versatile and comfortable, these heels are great for everyday casual wear."
  },
  {
    "id": 14,
    "image": casual_4,
    "size": [5, 6, 7, 8, 9],
    "category": "casual",
    "price": 170,
    "name": "Stylish Wedge Heel",
    "description": "Stylish wedge heels that offer both comfort and style for casual outings."
  },
  {
    "id": 15,
    "image": casual_5,
    "size": [5, 6, 7, 8, 9],
    "category": "casual",
    "price": 145,
    "name": "Comfort Casual Heel",
    "description": "Comfortable and chic, these casual heels are perfect for all-day wear."
  },
  {
    "id": 16,
    "image": casual_6,
    "size": [5, 6, 7, 8, 9],
    "category": "casual",
    "price": 155,
    "name": "Casual Strappy Heel",
    "description": "Casual strappy heels that add a touch of elegance to any casual outfit."
  },
  {
    "id": 17,
    "image": casual_7,
    "size": [5, 6, 7, 8, 9],
    "category": "casual",
    "price": 125,
    "name": "Casual Open Toe Heel",
    "description": "Open toe casual heels that are perfect for summer days and casual events."
  },
  {
    "id": 18,
    "image": casual_8,
    "size": [5, 6, 7, 8, 9],
    "category": "casual",
    "price": 180,
    "name": "Trendy Platform Heel",
    "description": "Trendy platform heels that offer style and comfort for everyday casual wear."
  },
  {
    "id": 19,
    "image": casual_9,
    "size": [5, 6, 7, 8, 9],
    "category": "casual",
    "price": 160,
    "name": "Chic Casual Heel",
    "description": "Chic and comfortable casual heels that are perfect for any casual outing."
  },
  {
    "id": 20,
    "image": casual_10,
    "size": [5, 6, 7, 8, 9],
    "category": "casual",
    "price": 140,
    "name": "Simple Casual Heel",
    "description": "Simple yet stylish casual heels that complement any casual attire."
  }
];
export default data;
