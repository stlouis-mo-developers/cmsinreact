const Header = (params: any) => {
  const title:string = params.title ? params.title : 'App Header';
  return (
    <header><div><h3>{title}</h3></div></header>
  );
}
export default Header;