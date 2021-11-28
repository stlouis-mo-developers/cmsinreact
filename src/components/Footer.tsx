function FooterNamed(params: any) {
  return (
    <footer>
      <p>Copyright &copy; {params.title}</p>
    </footer>
  );
}

const FooterAnonymous = function (params: any) {
  return (
    <FooterNamed  title={'Anonymous Function'}> </FooterNamed>
  );
}
export default FooterAnonymous;