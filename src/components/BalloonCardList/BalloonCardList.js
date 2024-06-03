import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BalloonCard from '../BalloonCard/BalloonCard';
import BalloonCardAction from '../BalloonCardAction/BalloonCardAction';
import balloons from '../../utils/balloons';
import ourWorks from '../../utils/ourWorks';
// import OurWorksCard from '../OurWorksCard/OurWorksCard';

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

  const getTopCategoriesCountOnPage = (screenWidth, textPath) => {
    if (textPath) {
      return '*';
    }
    if (screenWidth > 768) {
      return 8;
    } else {
      return 6;
    }
  };

  const getTopProductsCountOnPage = (screenWidth) => {
    if (screenWidth > 1104) {
      return 5;
    } else if (screenWidth > 768) {
      return 4;
    } else if (screenWidth > 550) {
      return 3;
    } else {
      return 4;
    }
  };

  const getSaleProductsCountOnPage = (screenWidth) => {
    if (screenWidth > 1104) {
      return 5;
    } else if (screenWidth > 768) {
      return 4;
    } else if (screenWidth > 550) {
      return 3;
    } else {
      return 2;
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

  const [topCategoriesCountOnPage, setTopCategoriesCountOnPage] = useState(getTopCategoriesCountOnPage(screenWidth)); // количество категорий на странице при загрузке
  const [topProductsCountOnPage, setTopProductsCountOnPage] = useState(getTopProductsCountOnPage(screenWidth)); // количество топпродуктов на странице при загрузке
  const [saleProductsCountOnPage, setSaleProductsCountOnPage] = useState(getSaleProductsCountOnPage(screenWidth)); // количество акционных продуктов на странице при загрузке
  const [OurWorksCountOnPage, setOurWorksCountOnPage] = useState(getOurWorksCountOnPage(screenWidth)); // количество наших работ на странице

  let visibleProducts;
  if (subtitle === 'Лидеры продаж') {
    visibleProducts = allProducts.sort((a, b) => b.productRating - a.productRating).slice(0, topProductsCountOnPage);
  } else if (subtitle === 'Акции') {
    visibleProducts = allProducts
      .filter((product) => product.productAction && product.productAction.startDate)
      .sort((a, b) => new Date(a.productAction.startDate) - new Date(b.productAction.startDate))
      .slice(0, saleProductsCountOnPage);
  } else if (subtitle === 'Наши работы') {
    visibleProducts = ourWorks.slice(0, OurWorksCountOnPage);
  } else {
    visibleProducts = balloons.slice(0, topCategoriesCountOnPage);
  }

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
      // получаю новое количество акционныхПродуктов на странице
      const newSaleProductsCountOnPage = getSaleProductsCountOnPage(newScreenWidth);
      // получаю новое количество нашихРабот на странице
      const newOurWorksCountOnPage = getOurWorksCountOnPage(newScreenWidth);
      // если ширина экрана или количество продуктов на странице изменились, то обновляю состояние
      if (
        screenWidth !== newScreenWidth ||
        topProductsCountOnPage !== newTopProductsCountOnPage ||
        topCategoriesCountOnPage !== newTopCategoriesCountOnPage ||
        saleProductsCountOnPage !== newSaleProductsCountOnPage ||
        OurWorksCountOnPage !== newOurWorksCountOnPage
      ) {
        setScreenWidth(newScreenWidth);
        setTopProductsCountOnPage(newTopProductsCountOnPage);
        setTopCategoriesCountOnPage(newTopCategoriesCountOnPage);
        setSaleProductsCountOnPage(newSaleProductsCountOnPage);
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
  }, [
    timerId,
    screenWidth,
    topProductsCountOnPage,
    topCategoriesCountOnPage,
    OurWorksCountOnPage,
    saleProductsCountOnPage,
  ]);

  return (
    <section
      className={`balloon__card-list ${
        subtitle === 'Лидеры продаж' || subtitle === 'Акции' || subtitle === 'Все категории'
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
        : subtitle === 'Все категории'
        ? balloons.map((balloon) => (
            <Link to={`/product/${balloon.name}`} className='balloon__card-link'>
              <BalloonCard
                key={balloon.id}
                name={balloon.name}
                src={balloon.image}
                alt={balloon.name}
              />
            </Link>
          ))
        : null}
    </section>
  );
}

export default BalloonCardList;
