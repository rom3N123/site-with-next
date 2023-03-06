import React from "react";
import styles from "./Footer.module.css";
import Link from "../Link/Link";
import PhoneIcon from "../../images/phone.svg";
import MailIcon from "../../images/mail.svg";
import TimeIcon from "../../images/time.svg";
import VkIcon from "../../images/vk.svg";
import WhatsupIcon from "../../images/whatsup.svg";
import ViberIcon from "../../images/viber.svg";

const Footer = () => {
  return (
    <div id="footer" className={styles.footer}>
      <div className="container">
        <div className={styles.footer__heading}>
          <h1>Контакты</h1>
        </div>
        <div className={styles.footer__content}>
          <div className="phone">
            <div>
              <img className="icon" src={PhoneIcon}></img>
            </div>
            <div className={styles.phone__number}>
              <Link href="tel:+79621620835" text="+7(962)162-08-35" />
              <Link href="tel:+79621569291" text="+7(962)156-92-91" />
            </div>
          </div>
          <div className={styles.mail}>
            <Link
              href="mailto:lutenkov33@gmail.com"
              icon={<img className="icon" src={MailIcon} />}
              text="lutenkov33@gmail.com"
            />
          </div>
          <div className={styles.timetable}>
            <div>
              <img className="icon" src={TimeIcon}></img>
            </div>
            <div>
              <h2>
                Время работы: <br />
                Ежедневно, с 8 до 18-00.
              </h2>
            </div>
          </div>
          <div className={styles.messengers}>
            <div>
              <a
                target="_blank"
                href="https://vk.com/id258043383"
                className={styles.link__icon}
              >
                <img className={styles.icon} src={VkIcon}></img>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="whatsapp://send?phone=+79621620835"
                className={styles.link__icon}
              >
                <img className={styles.icon} src={WhatsupIcon}></img>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="viber://chat?number=%2B79621620835"
                className={styles.link__icon}
              >
                <img className={styles.icon} src={ViberIcon}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
