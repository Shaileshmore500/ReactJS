
function Buttons(props) {
  return <button type="button" key={props.type} onClick={props.btnClick_handler} className="btn btn-outline-secondary">{props.type}</button>
}
export default Buttons;