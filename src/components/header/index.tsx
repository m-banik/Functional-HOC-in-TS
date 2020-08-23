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
  isEmphasised,
  setIsEmphasised,
}) => {
  const headerStyles = {
    backgroundColor,
    color,
    textDecoration: isEmphasised ? 'underline' : 'none',
    cursor: isEmphasised !== undefined ? 'pointer' : 'default',
    borderRadius: isEmphasised ? '12px' : undefined,
  };
  const onClick = () => {
    if (setIsEmphasised) {
      setIsEmphasised(!isEmphasised);
    }
  };
  return (
    <div className={styles.headerContainer}>
      <h1 style={headerStyles} className={styles.header} onClick={onClick}>
        {text}
      </h1>
    </div>
  );
};

export default Header;
