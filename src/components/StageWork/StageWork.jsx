import React from "react";
import styles from "./StageWork.module.css";
import StageWorkBlock from "../StageWorkBlock/StageWorkBlock";
const stageWorks = [
  {
    headingblock: "Оформление заявки",
    descriptionblock:
      "Позвоните нам по номеру +7(962) 162-08-35 или напишите на электронную почту lutenkov33@gmail.com. Сообщите детали вашего заказа, опишите в общих чертах ваши потребности.",
  },
  {
    headingblock: "Встреча и подбор проекта",
    descriptionblock:
      "Мы договариваемся о встрече на объекте для осмотра и обсуждения. Подготавливаем всю необходимую проектную документации создаем эскизный, архитектурный, конструктивный и инженерный проект.",
  },
  {
    headingblock: "Заключение договора ",
    descriptionblock:
      "Договор подготавливают и подписывают в договорном отделе. Это можно сделать после консультации менеджера, который сделает точный расчет стоимости дома и проводит вас в договорной отдел.",
  },
  {
    headingblock: "Проектирование ",
    descriptionblock:
      "Разрабатываем для вас индивидуальный проект, готовим полный комлект документов для БТИ, техническое задание для строителей, расчитываем расход строительных материалов.",
  },
  {
    headingblock: "Строительство дома ",
    descriptionblock:
      "Дата начала работ обязательно обговаривается зараннее. Перед началом строительста вам придет СМС-сообщение с номером телефона прораба работающей бригады.",
  },
  {
    headingblock: "Сдача объекта ",
    descriptionblock:
      "Окончанием строительста считается тот момент, когда все работы, подписанные в договоре выполнены. По окончании работ владелец осматривает дом и подписывает акт выполненных работ.",
  },
];

const StageWork = () => {
  return (
    <div className={styles.stage}>
      <div className="container">
        <div id="stage-work" className={styles.stage__heading}>
          <h1>Этапы работы</h1>
          <h5>
            Мы стремимся обеспечить максимально комфортные
            <br /> условия для заказчика
          </h5>
        </div>
        <div className={styles.stage__work}>
          {stageWorks.map(({ headingblock, descriptionblock }, index) => {
            return (
              <StageWorkBlock
                key={headingblock}
                numberblock={index + 1}
                headingblock={headingblock}
                descriptionblock={descriptionblock}
              />
            );
          })}
        </div>
        <div className={styles.link__bar}></div>
      </div>
    </div>
  );
};

export default StageWork;
