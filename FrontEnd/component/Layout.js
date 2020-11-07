const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <p>HEader</p>
      {children}
      <p>Footer</p>
    </React.Fragment>
  );
};
export default Layout;
