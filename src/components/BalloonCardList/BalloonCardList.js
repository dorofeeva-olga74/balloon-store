import React, { useState, useRef, useEffect } from 'react';
import BalloonCard from '../BalloonCard/BalloonCard';
import BalloonCardAction from '../BalloonCardAction/BalloonCardAction';
import balloons from '../../utils/balloons';

function BalloonCardList({ subtitle }) {
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
    if (screenWidth > 1440) {
      return 12;
    } else if (screenWidth > 1024) {
      return 8;
    } else if (screenWidth > 450) {
      return 6;
    } else {
      return 4;
    }
  };

  const getTopProductsCountOnPage = (screenWidth) => {
    if (screenWidth > 1982) {
      return 7;
    } else if (screenWidth > 1700) {
      return 6;
    } else if (screenWidth > 1280) {
      return 5;
    } else if (screenWidth > 1145) {
      return 4;
    } else if (screenWidth > 768) {
      return 6;
    } else {
      return 4;
    }
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // ширина экрана
  const [topProductsCountOnPage, setTopProductsCountOnPage] = useState(getTopProductsCountOnPage(screenWidth)); // количество топпродуктов на странице при загрузке
  const [topCategoriesCountOnPage, setTopCategoriesCountOnPage] = useState(getTopCategoriesCountOnPage(screenWidth)); // количество топпродуктов на странице при загрузке
  // Сортируем все продукты по рейтингу и выбираем первые несколько в зависимости от разрешения экрана
  let visibleProducts;
  subtitle === 'Лидеры продаж'
    ? (visibleProducts = allProducts.sort((a, b) => b.productRating - a.productRating).slice(0, topProductsCountOnPage))
    : (visibleProducts = balloons.slice(0, topCategoriesCountOnPage));
  console.log(visibleProducts);

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
      // если ширина экрана или количество продуктов на странице изменились, то обновляю состояние
      if (
        screenWidth !== newScreenWidth ||
        topProductsCountOnPage !== newTopProductsCountOnPage ||
        topCategoriesCountOnPage !== newTopCategoriesCountOnPage
      ) {
        setScreenWidth(newScreenWidth);
        setTopProductsCountOnPage(newTopProductsCountOnPage);
        setTopCategoriesCountOnPage(newTopCategoriesCountOnPage);
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
  }, [timerId, screenWidth, topProductsCountOnPage, topCategoriesCountOnPage]);

  return (
    <section className={`balloon__card-list ${subtitle === 'Лидеры продаж' ? 'balloon__card-list_top-sales' : ''}`}>
      {subtitle === 'Популярные категории'
        ? visibleProducts.map((balloon) => (
            <BalloonCard
              key={balloon.id}
              name={balloon.name}
              src={balloon.image}
              alt={balloon.name}
            />
          ))
        : subtitle === 'Лидеры продаж'
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
        : null}
    </section>
  );
}

export default BalloonCardList;
