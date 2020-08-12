import React, { useState } from "react";
import "./App.css";
import NumberFormat from "react-number-format";

function App() {
  const [value, setValue] = useState("");
  const formatPhoneNumber = (numStr) => {
    const format = "(###) ###-#### ext.####";
    let hashCount = 0;
    const formattedNumberAry = format.split("");
    for (let i = 0; i < format.length; i++) {
      if (format[i] === "#") {
        formattedNumberAry[i] = numStr[hashCount];
        hashCount += 1;
      }
    }
    const newFormattedNumber = formattedNumberAry.join("").split(" ext.");
    if (newFormattedNumber[1]) {
      return formattedNumberAry.join("");
    }
    return newFormattedNumber[0];
  };
  return (
    <main>
      <h1>Create React App + NodeJS API</h1>
      <NumberFormat
        format={formatPhoneNumber}
        type="tel"
        value={value}
        autoComplete="no"
        onValueChange={values => { 
          const test = {
            value: values.value,
            formatted: values.formattedValue
          }         
          console.log(values);
          console.log(values.formattedValue);
        }}
      />
    </main>
  );
}

export default App;
