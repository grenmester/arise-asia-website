const Layout = ({ children, title }) => (
  <div className="flex flex-col gap-8 px-6 pt-52 pb-80 mx-auto max-w-3xl">
    <h1 className="pb-4 text-xl font-bold tracking-wide text-center sm:pb-8 sm:text-3xl md:pb-16 md:text-5xl font-heading">
      {title}
    </h1>
    {children}
  </div>
);

export default Layout;
