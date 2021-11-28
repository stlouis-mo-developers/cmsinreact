function FooterNamed(params: any) {
  return (
    <footer>
      <p>Copyright &copy; {params.title}</p>
    </footer>
  );
}

const FooterAnonymous = function (params: any) {
  const title:string = params.title ? params.title : 'Anonymous Function';
  return (
    <FooterNamed  title={title}> </FooterNamed>
  );
}

const FooterArrow = (params: any) => {
  return (
    <FooterAnonymous  title={'Arrow Function'}> </FooterAnonymous>
  );
}
export default FooterArrow;