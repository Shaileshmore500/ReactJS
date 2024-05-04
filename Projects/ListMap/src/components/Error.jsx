function Error(props) {


  return <>
    {props.items.length <= 0 && <h3>Fruits not available</h3>}
  </>

}
export default Error;