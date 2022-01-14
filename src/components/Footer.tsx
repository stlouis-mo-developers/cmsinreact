const Footer = (params: any) => {
  return (
    <footer className="footer fixed-bottom mt-auto py-1 bg-light">
      <div className="container">
        <p>Copyright &copy; {params.title}</p>
      </div>
  </footer>
  );
}
export default Footer;