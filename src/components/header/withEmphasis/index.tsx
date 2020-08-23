import React from 'react';
import Header from '../';

export type StateType = {
  isEmphasised?: boolean;
  setIsEmphasised?: React.Dispatch<React.SetStateAction<boolean>>;
};

export function withEmphasis<T>(
  WrapperdComponent: React.ComponentType<T & StateType>
) {
  const ComponentWithEmphasis = (props: T) => {
    const [isEmphasised, setIsEmphasised] = React.useState(true);
    return (
      <WrapperdComponent
        {...props}
        isEmphasised={isEmphasised}
        setIsEmphasised={setIsEmphasised}
      />
    );
  };
  return ComponentWithEmphasis;
}

export default withEmphasis(Header);
