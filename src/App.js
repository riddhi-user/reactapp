import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import RoutesMain from "./routesmain";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <ToastContainer autoClose={1000} theme="dark" position="bottom-center" />
            <RoutesMain />
        </>
    );
}

export default App;

// import React from "react";
// import Counter from "./component/Counter";
// import { CounterProvider } from "./component/CounterContext";

// const App = () => {
//     return (
//         <CounterProvider>
//             <Counter />
//         </CounterProvider>
//     );
// };

// export default App;
