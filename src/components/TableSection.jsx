const TableSection = ({ items }) => (
  <div className="overflow-x-auto p-4 bg-white rounded-lg">
    <table className="table table-sm sm:table-md">
      <thead>
        <tr>
          {items.headers &&
            items.headers.map((item, idx) => (
              <th
                key={idx}
                className="text-center text-black sm:text-lg font-heading"
              >
                {item}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {items.body &&
          items.body.map((items, idx) => (
            <tr key={idx}>
              {items &&
                items.map((item, idx2) => (
                  <td key={idx2} className="text-center">
                    {item}
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);

export default TableSection;
