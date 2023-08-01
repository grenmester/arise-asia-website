import { Link } from "react-router-dom";

const CardSection = ({ items }) => (
  <div className="flex flex-col gap-4 sm:gap-6">
    {items &&
      items.map((item) => (
        <LinkWrapper key={item.link} link={item.link}>
          <div className="bg-white rounded-md shadow-lg sm:rounded-lg md:rounded-2xl card">
            <div className="gap-0 justify-center items-center p-3 text-center sm:p-4 md:p-6 card-body">
              <h2 className="text-sm font-bold sm:text-lg md:text-2xl card-title font-heading">
                {item.title}
              </h2>
              <p className="text-center">{item.subtitle}</p>
            </div>
          </div>
        </LinkWrapper>
      ))}
  </div>
);

const LinkWrapper = ({ children, link }) =>
  link.includes(".jpeg") ||
  link.includes(".jpg") ||
  link.includes(".pdf") ||
  link.includes(".png") ||
  link.includes("https://") ? (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link to={link}>{children}</Link>
  );

export default CardSection;
