import CounterHoc from "./CounterHoc";
import SecondHoc from "./SecondHoc";

const ButtonClick = (props) => {
    const {count, incrementCounter, name} = props;
    return(
        <div>
        <h1>Example of HOC</h1>
        <button onClick={incrementCounter}>Click Me</button>
        <p>Count is {count} </p>
        <p>Name is: {name}</p>
        </div>
    )
}

export default SecondHoc(CounterHoc(ButtonClick, 10));