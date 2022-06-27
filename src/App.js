import logo from './logo.svg';
import './App.css';
import {useNavigate} from 'react-router-dom'

function App() {

    // const zpaJS = window.ZaloPay;

    // function handleReKYC() {
    //     console.log(zpaJS.appInfo);
    //     zpaJS.call("launchDeeplink", {url: "zalopay://launch/f/user-level-migration"}, (data) => {
    //         console.log("data callback: ", JSON.stringify(data, null, 2));
    //         //window.location.href = "https://socialdev.zalopay.vn/spa/v2/quick-pay";
    //     });
    //
    // }

    function handlePaymentFlow() {
        // eslint-disable-next-line no-unused-expressions
        const search = this.props.location.search;
        const orderUrl = new URLSearchParams(search).get("orderUrl");
        if (orderUrl !== '') {
            console.log("redirect to ", orderUrl)
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useNavigate(orderUrl)
        }
    }

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
                <button onClick={handlePaymentFlow}>PAY NOW</button>
            </header>
        </div>
    );
}

export default App;
