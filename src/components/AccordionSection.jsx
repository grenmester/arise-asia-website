const AccordionSection = ({ items }) => (
  <div className="p-4 bg-white rounded">
    {items &&
      items.map((item, idx) => (
        <div
          key={idx}
          className="bg-orange-300 rounded-none collapse collapse-arrow"
        >
          <input type="checkbox" />
          <div className="text-lg font-bold border-b-2 sm:text-xl collapse-title border-b-white">
            {item.title}
          </div>
          <div className="bg-white collapse-content">
            <p className="pt-4 font-bold sm:text-lg">{item.subtitle}</p>
            <p className="text-xs font-bold sm:text-sm">{item.role}</p>
            <p className="pt-4 text-sm sm:text-base">{item.description}</p>
          </div>
        </div>
      ))}
  </div>
);

export default AccordionSection;
