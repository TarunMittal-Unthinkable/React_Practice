
import { useState } from "react";

const CounterHoc = (OldComponent, incrmentBy=1) => {
    return function EnhanceComponent(props){
        const [count, setCount] = useState(0);
        function incrementCounter(){
            setCount(count+incrmentBy)
        }

        return(
          <OldComponent {...props} count={count} incrementCounter={() => incrementCounter()} name='counterHOC' />
        )
    }
}

export default CounterHoc;