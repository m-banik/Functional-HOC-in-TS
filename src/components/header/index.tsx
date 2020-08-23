import React from 'react';
import { StateType } from './withEmphasis';
import styles from './styles.module.css';

type HeaderType = (
  props: StateType & {
    backgroundColor: string;
    color: string;
    text: string;
  }
) => JSX.Element;

const Header: HeaderType = ({
  backgroundColor,
  color,
  text,
  isEmphasized,
  setIsEmphasized,
}) => {
  const headerStyles = {
    backgroundColor,
    color,
    textDecoration: isEmphasized ? 'underline' : 'none',
    cursor: isEmphasized !== undefined ? 'pointer' : 'default',
    borderRadius: isEmphasized ? '12px' : undefined,
  };
  const onClick = () => {
    if (setIsEmphasized) {
      setIsEmphasized(!isEmphasized);
    }
  };
  return (
    <div className={styles.headerContainer}>
      {setIsEmphasized ?
        (<h1 style={headerStyles} className={styles.header} onClick={onClick}>
          {text}
        </h1>)
        :
        (<h1 style={headerStyles} className={styles.header}>
          {text}
        </h1>)}
    </div>
  );
};

export default Header;
