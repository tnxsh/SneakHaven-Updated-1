import { useMemo } from "react";
import styles from "./Property1Default.module.css";

const Property1Default = ({
  getStarted,
  property1DefaultBackground,
  property1DefaultWidth,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultBackgroundColor,
  getStartedFontFamily,
  getStartedColor,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      background: property1DefaultBackground,
      width: property1DefaultWidth,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
      backgroundColor: property1DefaultBackgroundColor,
    };
  }, [
    property1DefaultBackground,
    property1DefaultWidth,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultBackgroundColor,
  ]);

  const getStartedStyle = useMemo(() => {
    return {
      fontFamily: getStartedFontFamily,
      color: getStartedColor,
    };
  }, [getStartedFontFamily, getStartedColor]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <b className={styles.getStarted} style={getStartedStyle}>
        {getStarted}
      </b>
    </div>
  );
};

export default Property1Default;
