import React from 'react';

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
  radius: string;
  width: string;
}

/**
 *  Challenge:
 *
 *  Implement a new button event and create the unit test according to AAA pattern
 *  and provide the correspoing describe blocks to increse the readability.
 */
const Button: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  onDoubleClick,
  radius,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
