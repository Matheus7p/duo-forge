import { PropsWithChildren, ReactNode } from "react";

interface IHeader extends PropsWithChildren {
  className?: string;
}

export const Header = ({ className, children }: IHeader): ReactNode => {
  return (<header className={className}>{children}</header>);
};

export const HeaderContent = ({ className, children }: IHeader): ReactNode => {
  return (<div className={className}>{children}</div>);
};

export const HeaderMenu = ({ className, children }: IHeader): ReactNode => {
  return (<div className={className}>{children}</div>);
};

export const HeaderLogo = ({ className, children }: IHeader): ReactNode => {
  return (<div className={className}>{children}</div>);
};
