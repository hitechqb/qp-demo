import logo from './logo.svg';
import './App.css';

function App() {
  const zpaJS = window.ZaloPay;
  function handleReKYC() {
    console.log(zpaJS.appInfo);
    zpaJS.call("launchDeeplink", { url: "zalopay://launch/f/user-level-migration" }, (data) => {
      console.log("data callback: ", JSON.stringify(data, null, 2));
      window.location.href = "https://socialdev.zalopay.vn/spa/v2/quick-pay";
    });

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>  KYC Flow </p>
        <button onClick={handleReKYC}>ReKYC</button>
      </header>
    </div>
  );
}

export default App;
