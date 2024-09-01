import Countdown, { CountdownRendererFn } from "react-countdown";

const CountdownComp: React.FC = () => {
  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds, completed }) => {
    return completed ? (
      <span>Acara sudah berlalu.</span>
    ) : (
      <span>
        {days} day {hours} hr
        <br />
        {minutes} min {seconds} sec
      </span>
    );
  };

  const weddingDate = new Date("2024-09-12T19:30:00");

  return <Countdown date={weddingDate} renderer={renderer} />;
}

export default CountdownComp;