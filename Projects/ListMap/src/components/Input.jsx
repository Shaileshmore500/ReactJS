function Input(props) {
  return <ul className="list-group">
    <li className="list-group-item " style={{ paddingLeft: '0', textAlign: 'justyfy' }}>

      {/* <input type="text" style={{ padding: '7px', borderRadius: '7px' }} onChange={props.changeHandler} name="" placeholder="Enter Food" id="" /> */}
      <input type="text" style={{ padding: '7px', borderRadius: '7px' }} onKeyDown={props.keyDownHandler} name="" placeholder="Enter Food" id="" />
      <button type="button" className="btn btn-success btn_but">Add</button>
    </li>
  </ul>
}

export default Input;