import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import queryString from 'query-string';

function App() {
    useEffect(()=>{
        const search = window.location.search;
        // eslint-disable-next-line react-hooks/exhaustive-deps
       // url = new URLSearchParams(search).get("orderUrl");
        let orderUrl =  queryString.parseUrl(search);
        console.log("orderURL: ", orderUrl);
        if (orderUrl.query.orderUrl?.toString()) {
            window.location.href = orderUrl.query.orderUrl?.toString();
        }
    }, [])


    // const zpaJS = window.ZaloPay;

    // function handleReKYC() {
    //     console.log(zpaJS.appInfo);
    //     zpaJS.call("launchDeeplink", {url: "zalopay://launch/f/user-level-migration"}, (data) => {
    //         console.log("data callback: ", JSON.stringify(data, null, 2));
    //         //window.location.href = "https://socialdev.zalopay.vn/spa/v2/quick-pay";
    //     });
    //
    // }

    // function handlePaymentFlow() {
    //     let orderUrl = ''
    //     if (url === '') {
    //         // eslint-disable-next-line no-unused-expressions
    //         const search = window.location.search;
    //         orderUrl = new URLSearchParams(search).get("orderUrl");
    //     } else {
    //         orderUrl = url
    //     }
    //
    //     console.log("ORDER URL: ", orderUrl)
    //     if (orderUrl !== '') {
    //         console.log("redirect to ", orderUrl)
    //         // eslint-disable-next-line react-hooks/rules-of-hooks
    //         window.location.href = orderUrl
    //     }
    // }

    // function handleOnchange(data) {
    //     console.log("input data: ", data.target.value)
    //     setUrl(data.target.value)
    // }

    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>  KYC Flow </p>*/}
            {/*  <button onClick={handleReKYC}>ReKYC</button>*/}
            {/*</header>*/}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p> PAYMENT FLOW DEMO </p>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                {/*<input type="text" onChange={(data) => handleOnchange(data)}/>*/}
                {/*<button onClick={handlePaymentFlow}>PAY NOW</button>*/}
            </header>
        </div>
    );
}

export default App;
