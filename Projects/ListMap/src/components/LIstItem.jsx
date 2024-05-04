function ListItem(p) {

  return <li className="list-group-item li_item">
    <div>
      <span>{p.Lstitem}</span>

      <button onClick={() => { alert(p.Lstitem) }} type="button" class="btn btn-primary btn_but">Buy</button>

    </div>
  </li>

}
export default ListItem;