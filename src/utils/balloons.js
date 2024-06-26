import { ACTION, FORMATACTION, STARTDATAACTION, FINISHDATAACTION } from './consts';
const formattedAction = FORMATACTION(ACTION);
// console.log(formattedAction); // Выведет "-7"
// Определение массива объектов товаров
const balloons = [
  {
    id: 1,
    name: 'Баблобоксы',
    image: require('../images/balloons/Баблобоксы.png'),
    products: [
      {
        productId: 101,
        productRating: 2,
        productName: 'Товар 1',
        productPrice: '150',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION, // Дата начала акции
          finishDate: FINISHDATAACTION, // Дата окончания акции
        },
        // productPriceAction: ActionPrice(),
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/Баблобоксы.png'),
      },
      {
        productId: 102,
        productRating: 3,
        productName: 'Товар 2',
        productPrice: '170',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice(),
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/Фонтаны-с-цифрами.png'),
      },
    ],
  },
  {
    id: 2,
    name: 'Фонтаны с цифрами',
    image: require('../images/balloons/Фонтаны-с-цифрами.png'),
    products: [
      {
        productId: 201,
        productRating: 3,
        productName: 'Товар 1',
        productPrice: '150',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/Фонтаны-с-цифрами.png'),
      },
      {
        productId: 202,
        productRating: 2,
        productName: 'Товар 2',
        productPrice: '170',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/Фонтаны-с-цифрами.png'),
      },
    ],
  },
  {
    id: 3,
    name: 'Готовые композиции',
    image: require('../images/balloons/Готовые-композиции.png'),
    products: [
      {
        productId: 301,
        productRating: 3,
        productName: 'Композиция шаров на свадьбу',
        productPrice: '5800',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/Готовые-композиции.png'),
      },
      {
        productId: 302,
        productRating: 5,
        productName: 'Композиция шаров на юбилей фирмы',
        productPrice: '4570',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice(),
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/на юбилей фирмы.png'),
      },
    ],
  },
  {
    id: 4,
    name: 'Оформление на выписку',
    image: require('../images/balloons/На-выписку.png'),
    products: [
      {
        productId: 401,
        productRating: 4,
        productName: 'Набор для комнаты мальчика',
        productPrice: '3600',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/выписка для мальчика.png'),
      },
      {
        productId: 402,
        productRating: 5,
        productName: 'Набор для комнаты девочки',
        productPrice: '4530',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/Выписка для девочки.png'),
      },
    ],
  },
  {
    id: 5,
    name: 'Латексные шары',
    image: require('../images/balloons/Латексные-шары.png'),
    products: [
      {
        productId: 501,
        productRating: 1,
        productName: 'Латексный шар Зеленый',
        productPrice: '750',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/Латексные-шары.png'),
      },
      {
        productId: 502,
        productRating: 3,
        productName: 'Латексный шар "Сердце розовое"',
        productPrice: '1100',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/Латексные-шары.png'),
      },
    ],
  },
  {
    id: 6,
    name: 'На день рождения',
    image: require('../images/balloons/На-День-рождения.png'),
    products: [
      {
        productId: 601,
        productRating: 4,
        productName: 'Композиция шаров на день рождения для девочки.',
        productPrice: '1450',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/композиция ДР девочки.png'),
      },
      {
        productId: 602,
        productRating: 5,
        productName: 'Композиция шаров на день рождения для мальчика.',
        productPrice: '1450',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/композиция ДР мальчика.png'),
      },
    ],
  },
  {
    id: 7,
    name: 'Фольгированые шары',
    image: require('../images/balloons/Фольгированные-шары.png'),
    products: [
      {
        productId: 701,
        productRating: 3,
        productName: 'Фольгированный красный шар "Звезда"',
        productPrice: '1700',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/Баблобоксы.png'),
      },
      {
        productId: 702,
        productRating: 1,
        productName: 'Фольгированный красный шар "Цифра 6"',
        productPrice: '1250',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/Фольгированные-шары.png'),
      },
    ],
  },
  {
    id: 8,
    name: '3D Сферы, Bubble',
    image: require('../images/balloons/3Д-сферы.png'),
    products: [
      {
        productId: 801,
        productRating: 4,
        productName: 'Товар 1',
        productPrice: '150',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/3Д-сферы.png'),
      },
      {
        productId: 802,
        productRating: 1,
        productName: 'Товар 2',
        productPrice: '170',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/Фонтаны-с-цифрами.png'),
      },
    ],
  },
  {
    id: 9,
    name: 'Латексные шары',
    image: require('../images/balloons/Латексные-шары.png'),
    products: [
      {
        productId: 901,
        productRating: 1,
        productName: 'Латексный шар Зеленый',
        productPrice: '750',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/Латексные-шары.png'),
      },
      {
        productId: 902,
        productRating: 3,
        productName: 'Латексный шар "Сердце розовое"',
        productPrice: '1100',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/Латексные-шары.png'),
      },
    ],
  },
  {
    id: 10,
    name: 'На день рождения',
    image: require('../images/balloons/На-День-рождения.png'),
    products: [
      {
        productId: 1001,
        productRating: 4,
        productName: 'Композиция шаров на день рождения для девочки.',
        productPrice: '1450',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/композиция ДР девочки.png'),
      },
      {
        productId: 1002,
        productRating: 5,
        productName: 'Композиция шаров на день рождения для мальчика.',
        productPrice: '1450',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/композиция ДР мальчика.png'),
      },
    ],
  },
  {
    id: 11,
    name: 'Фольгированые шары',
    image: require('../images/balloons/Фольгированные-шары.png'),
    products: [
      {
        productId: 1101,
        productRating: 3,
        productName: 'Фольгированный красный шар "Звезда"',
        productPrice: '1700',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/Баблобоксы.png'),
      },
      {
        productId: 1102,
        productRating: 1,
        productName: 'Фольгированный красный шар "Цифра 6"',
        productPrice: '1250',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/Фольгированные-шары.png'),
      },
    ],
  },
  {
    id: 12,
    name: '3D Сферы, Bubble',
    image: require('../images/balloons/3Д-сферы.png'),
    products: [
      {
        productId: 1201,
        productRating: 4,
        productName: 'Товар 1',
        productPrice: '150',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/3Д-сферы.png'),
      },
      {
        productId: 1202,
        productRating: 1,
        productName: 'Товар 2',
        productPrice: '170',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/Фонтаны-с-цифрами.png'),
      },
    ],
  },
  {
    id: 13,
    name: 'Баблобоксы',
    image: require('../images/balloons/Баблобоксы.png'),
    products: [
      {
        productId: 13101,
        productRating: 2,
        productName: 'Товар 1',
        productPrice: '150',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice(),
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/Баблобоксы.png'),
      },
      {
        productId: 1302,
        productRating: 3,
        productName: 'Товар 2',
        productPrice: '170',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice(),
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/Фонтаны-с-цифрами.png'),
      },
    ],
  },
  {
    id: 14,
    name: 'Фонтаны с цифрами',
    image: require('../images/balloons/Фонтаны-с-цифрами.png'),
    products: [
      {
        productId: 1401,
        productRating: 3,
        productName: 'Товар 1',
        productPrice: '150',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/Фонтаны-с-цифрами.png'),
      },
      {
        productId: 1402,
        productRating: 2,
        productName: 'Товар 2',
        productPrice: '170',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/Фонтаны-с-цифрами.png'),
      },
    ],
  },
  {
    id: 15,
    name: 'Готовые композиции',
    image: require('../images/balloons/Готовые-композиции.png'),
    products: [
      {
        productId: 1501,
        productRating: 3,
        productName: 'Композиция шаров на свадьбу',
        productPrice: '5800',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/Готовые-композиции.png'),
      },
      {
        productId: 1502,
        productRating: 5,
        productName: 'Композиция шаров на юбилей фирмы',
        productPrice: '4570',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice(),
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/на юбилей фирмы.png'),
      },
    ],
  },
  {
    id: 16,
    name: 'Оформление на выписку',
    image: require('../images/balloons/На-выписку.png'),
    products: [
      {
        productId: 1601,
        productRating: 4,
        productName: 'Набор для комнаты мальчика',
        productPrice: '3600',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 1',
        productImage: require('../images/balloons/выписка для мальчика.png'),
      },
      {
        productId: 1602,
        productRating: 5,
        productName: 'Набор для комнаты девочки',
        productPrice: '4530',
        productAction: {
          discount: formattedAction,
          startDate: STARTDATAACTION,
          finishDate: FINISHDATAACTION,
        },
        // productPriceAction: ActionPrice,
        productDescription: 'Описание товара 2',
        productImage: require('../images/balloons/Выписка для девочки.png'),
      },
    ],
  },
];

export default balloons;
