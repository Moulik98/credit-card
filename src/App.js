import "./App.css";
import Pin from "./Components/otp/Pin";
import { useState } from "react";
import CardInput from "./Components/card/CardInput";

function App() {
  const [otp, setOtp] = useState("");
  const [cardValue, setCardValue] = useState('');

  return (
    <div className="App">
      <h1>OTP</h1>
      <Pin
        length={4}
        setOtpHandler={(value) => {
          setOtp(value);
        }}
      />
      <h1>The Value of OTP is {otp}</h1>
      <hr />
      <div>
        <h1>Card</h1>
        <CardInput
          length={4}
          setCardHandler={(val) => {
            setCardValue(val);
          }}
        />
        <h1>Card Value is: {cardValue}</h1>
      </div>
    </div>
  );
}

export default App;