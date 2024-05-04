function MainPanel() {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  return <div>
    <h3>The Time in Bharat is </h3><h2>{hours}:{minutes}:{seconds}</h2>
  </div>
}
export default MainPanel;