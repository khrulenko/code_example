interface Props {
  children: any;
}

const NoWrap = ({ children }: Props) => {
  return <span style={{ whiteSpace: 'nowrap' }}>{children}</span>;
};

export default NoWrap;
