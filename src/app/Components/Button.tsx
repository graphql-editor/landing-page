import * as React from "react";

export const Button: React.StatelessComponent<{
  children: React.ReactNode;
  onClick?: VoidFunction
  className: any
}> = ({ children, onClick, className }) => (
  <div onClick={onClick} className={className}>{children}</div>
);
