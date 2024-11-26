import {Provider} from "react-redux"
import { CounterView } from "./CounterView"
import { counterStore} from "./CounterStore"
import{eoStore} from "./evenodd/EOStore"
import { EOView } from "./evenodd/EOView"
import { FactView } from "./factorial/FactView"
import { factStore } from "./factorial/FactStore"
import { PrimeView } from "./primeNumber/PrimeView"
import { primeStore } from "./primeNumber/PrimeStore"
// export function ReduxProvider()
// {
//     return(<>
//     <Provider store={eoStore}>
//         {/* <CounterView/> */}
//         <EOView/>
//     </Provider>

//     </>)
// }
export function ReduxProvider()
{
    return(<>
    <Provider store={primeStore}>
        {/* <CounterView/> */}
        {/* <FactView/> */}

        <PrimeView/>
    </Provider>

    </>)
}