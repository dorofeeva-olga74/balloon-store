//цена акции %
const ACTION = 0.07;
const FORMATACTION = (ACTION) => {
  // Преобразуем число в строку с знаком минус
  const formattedAction = Math.round(ACTION * -100).toString();
  return formattedAction;
};

//дата начала акции
const STARTDATAACTION = '2024-05-01';
//дата окончания акции
const FINISHDATAACTION = '2024-06-01';
export { ACTION, STARTDATAACTION, FINISHDATAACTION, FORMATACTION };
