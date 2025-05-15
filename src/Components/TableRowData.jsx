import { Link } from "react-router-dom";

const TableRowData = ({ id, title, completed }) => {
  //const {id,name,completed } = dataRow

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td> <td>{completed ? "✅" : "❌"}</td>
      <td>
        <Link to={"/task/" + id}> View Task</Link>
      </td>
    </tr>
  );
};

export default TableRowData;

//== or ===
// conditional operator ? :
