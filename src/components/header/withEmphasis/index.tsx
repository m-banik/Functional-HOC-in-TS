import React from 'react';
import Header from '../';

export type StateType = {
  isEmphasized?: boolean;
  setIsEmphasized?: React.Dispatch<React.SetStateAction<boolean>>;
};

export function withEmphasis<T>(
  WrapperdComponent: React.ComponentType<T & StateType>
) {
  const ComponentWithEmphasis = (props: T) => {
    const [isEmphasized, setIsEmphasized] = React.useState(true);
    return (
      <WrapperdComponent
        {...props}
        isEmphasized={isEmphasized}
        setIsEmphasized={setIsEmphasized}
      />
    );
  };
  return ComponentWithEmphasis;
}

export default withEmphasis(Header);
