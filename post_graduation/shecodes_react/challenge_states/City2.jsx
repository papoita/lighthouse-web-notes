export default function City2(props) {
  //const { temperature, name } = props;

  let [temperature, setTemperature] = useState(props.temperature);

  function clickFahrenheit(event) {
    event.preventDefault();
    setTemperature(props.temperature * 1.8 + 32);
    //alert(`${props.name} is ${Math.round(temperature)} F`);
  }

  return (
    <div className="City">
      It is {temperature} °C |
      <a href="/" onClick={clickFahrenheit}>
        °F{" "}
      </a>{" "}
      in {props.name}
    </div>
  );
}
