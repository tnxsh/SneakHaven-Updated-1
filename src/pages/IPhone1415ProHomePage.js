import { useCallback } from "react";
import TimeHeaderContainer from "../components/TimeHeaderContainer";
import PopularFormContainer from "../components/PopularFormContainer";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1415ProHomePage.module.css";

const IPhone1415ProHomePage = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/iphone-14-pro-green-shoe");
  }, [navigate]);

  return (
    <div className={styles.iphone1415ProHomePage}>
      <TimeHeaderContainer />
      <div className={styles.firstSection}>
        <div className={styles.bannerMain}>
          <div className={styles.bannerMainChild} />
          <b className={styles.mensShoes}>Men’s Shoes</b>
          <b className={styles.adidasNmdR1StyleContainer}>
            <p className={styles.styleAndPerformer}>{`Adidas NMD_R1 `}</p>
            <p className={styles.styleAndPerformer}>Style and performer</p>
          </b>
          <img className={styles.addidas1Icon} alt="" src="/addidas-1@2x.png" />
        </div>
        <img className={styles.icons} alt="" src="/icons.svg" />
      </div>
      <div className={styles.separationSections} />
      <PopularFormContainer />
      <div className={styles.separationSections1} />
      <div className={styles.seeMoreButton}>
        <div className={styles.seeMoreButtonChild} />
        <b className={styles.seeMore}>See More</b>
      </div>
      <div className={styles.threeSection}>
        <b className={styles.more}>More Searched</b>
      </div>
      <img className={styles.footerIcon} alt="" src="/footer.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      <img
        className={styles.icon}
        alt=""
        src="/11-3@2x.png"
        onClick={onImageClick}
      />
    </div>
  );
};

export default IPhone1415ProHomePage;
