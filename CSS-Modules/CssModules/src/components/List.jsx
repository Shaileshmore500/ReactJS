import ListItem from "./LIstItem"
function List({ items }) {

  debugger;


  return <ul className="list-group">

    {items.map((i) =>
      <ListItem Lstitem={i} />
    )}


  </ul>

}
export default List;