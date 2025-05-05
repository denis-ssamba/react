const TableRowData = ({id,name,completed})=>{
    //const {id,name,completed } = dataRow

    return <tr key={id}>
    <td>{id }</td><td>{name}</td> <td>{completed  ?'✅' : '❌' }</td>
</tr>
}

export default TableRowData

//== or ===
// conditional operator ? : 