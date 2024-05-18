import React, { useState, useRef, useEffect } from 'react';
import BalloonCard from '../BalloonCard/BalloonCard';
import BalloonCardAction from '../BalloonCardAction/BalloonCardAction';
import balloons from '../../utils/balloons';
import ourWorks from '../../utils/ourWorks';
import OurWorksCard from '../OurWorksCard/OurWorksCard';

function BalloonCardList({ subtitle }) {
  // console.log(ourWorks);
  // Константа для задержки таймера
  const RESIZE_DELAY = 300;

  // Фильтруем продукты с рейтингом больше или равным 4 и создаем глубокую копию
  const filteredAndCopiedBalloons = balloons.map((balloon) => ({
    ...balloon,
    products: balloon.products.filter((product) => product.productRating >= 4),
  }));

  // Собираем все продукты в один массив
  const allProducts = filteredAndCopiedBalloons.flatMap((balloon) => balloon.products);

  const getTopCategoriesCountOnPage = (screenWidth) => {
    if (screenWidth > 1822) {
      return 12;
    } else if (screenWidth > 1500) {
      return 10;
    } else if (screenWidth > 1024) {
      return 8;
    } else if (screenWidth > 958) {
      return 6;
    } else if (screenWidth > 768) {
      return 8;
    } else if (screenWidth > 320) {
      return 6;
    } else {
      return 4;
    }
  };

  const getTopProductsCountOnPage = (screenWidth) => {
    if (screenWidth > 2181) {
      return 6;
    } else if (screenWidth > 1823) {
      return 5;
    } else if (screenWidth > 1587) {
      return 4;
    } else if (screenWidth > 1308) {
      return 5;
    } else if (screenWidth > 1290) {
      return 4;
    } else if (screenWidth > 1090) {
      return 5;
    } else if (screenWidth > 814) {
      return 4;
    } else if (screenWidth > 768) {
      return 6;
    } else if (screenWidth > 744) {
      return 4;
    } else if (screenWidth > 653) {
      return 6;
    } else if (screenWidth > 600) {
      return 3;
    } else {
      return 4;
    }
  };

  const getOurWorksCountOnPage = (screenWidth) => {
    if (screenWidth > 1822) {
      return 7;
    } else if (screenWidth > 1500) {
      return 6;
    } else if (screenWidth > 1024) {
      return 4;
    } else if (screenWidth > 320) {
      return 3;
    } else {
      return 2;
    }
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // ширина экрана
  const [topProductsCountOnPage, setTopProductsCountOnPage] = useState(getTopProductsCountOnPage(screenWidth)); // количество топпродуктов на странице при загрузке
  const [topCategoriesCountOnPage, setTopCategoriesCountOnPage] = useState(getTopCategoriesCountOnPage(screenWidth)); // количество категорий на странице при загрузке
  const [OurWorksCountOnPage, setOurWorksCountOnPage] = useState(getOurWorksCountOnPage(screenWidth)); // количество наших работ на странице
  // Сортируем все продукты по рейтингу и выбираем первые несколько в зависимости от разрешения экрана
  // let visibleProducts;
  // subtitle === 'Лидеры продаж'
  //   ? (visibleProducts = allProducts.sort((a, b) => b.productRating - a.productRating).slice(0, topProductsCountOnPage))
  //   : (visibleProducts = balloons.slice(0, topCategoriesCountOnPage));
  let visibleProducts;
  if (subtitle === 'Лидеры продаж') {
    visibleProducts = allProducts.sort((a, b) => b.productRating - a.productRating).slice(0, topProductsCountOnPage);
  } else if (subtitle === 'Акции') {
    visibleProducts = allProducts
      .filter((product) => product.productAction && product.productAction.startDate)
      .sort((a, b) => new Date(a.productAction.startDate) - new Date(b.productAction.startDate))
      .slice(0, topProductsCountOnPage);
  } else if (subtitle === 'Наши работы') {
    visibleProducts = ourWorks.slice(0, OurWorksCountOnPage);
  } else {
    visibleProducts = balloons.slice(0, topCategoriesCountOnPage);
  }
  // console.log(visibleProducts);

  // создаю переменную для хранения идентификатора таймера
  const timerId = useRef(null);
  // управление положением экрана
  useEffect(() => {
    const handleResize = () => {
      // получаю новую ширину экрана
      const newScreenWidth = window.innerWidth;
      // получаю новое количество топПродуктов на странице
      const newTopProductsCountOnPage = getTopProductsCountOnPage(newScreenWidth);
      // получаю новое количество топКатегорий на странице
      const newTopCategoriesCountOnPage = getTopCategoriesCountOnPage(newScreenWidth);
      // получаю новое количество нашихРабот на странице
      const newOurWorksCountOnPage = getOurWorksCountOnPage(newScreenWidth);
      // если ширина экрана или количество продуктов на странице изменились, то обновляю состояние
      if (
        screenWidth !== newScreenWidth ||
        topProductsCountOnPage !== newTopProductsCountOnPage ||
        topCategoriesCountOnPage !== newTopCategoriesCountOnPage ||
        OurWorksCountOnPage !== newOurWorksCountOnPage
      ) {
        setScreenWidth(newScreenWidth);
        setTopProductsCountOnPage(newTopProductsCountOnPage);
        setTopCategoriesCountOnPage(newTopCategoriesCountOnPage);
        setOurWorksCountOnPage(newOurWorksCountOnPage);
      }
    };
    window.addEventListener('resize', () => {
      // если таймер уже запущен, то отменяю его
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
      // запускаю новый таймер с задержкой 300 миллисекунд
      timerId.current = setTimeout(handleResize, RESIZE_DELAY);
    });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [timerId, screenWidth, topProductsCountOnPage, topCategoriesCountOnPage, OurWorksCountOnPage]);

  return (
    <section
      className={`balloon__card-list ${
        subtitle === 'Лидеры продаж' || subtitle === 'Акции'
          ? 'balloon__card-list_top-sales'
          : subtitle === 'Наши работы'
          ? 'balloon__card-list_our-works'
          : ''
      }`}>
      {subtitle === 'Лидеры продаж' || subtitle === 'Акции'
        ? visibleProducts.map((product, index) => (
            <BalloonCardAction
              key={`product-${index}`} // Используем index для уникальности ключа
              name={product.productName}
              src={product.productImage}
              alt={product.productName}
              price={product.productPrice}
              productAction={product.productAction}
            />
          ))
        : subtitle === 'Популярные категории'
        ? visibleProducts.map((balloon) => (
            <BalloonCard
              key={balloon.id}
              name={balloon.name}
              src={balloon.image}
              alt={balloon.name}
            />
          ))
        : subtitle === 'Наши работы'
        ? visibleProducts.map((ourWork) => (
            <OurWorksCard
              key={ourWork.id}
              src={ourWork.image}
              alt={ourWork.name}
            />
          ))
        : null}
    </section>
  );
}

export default BalloonCardList;
