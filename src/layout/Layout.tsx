const Layout = (props: React.PropsWithChildren) => {
  return <div className="py-5 h-screen bg-orange-200">{props.children}</div>;
};

export default Layout;
