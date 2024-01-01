"use client";
import InputBox from "@/Components/InputBox";
import useCurrency from "@/hooks/useCurrency";
import { useEffect, useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const data = useCurrency(from);

  const amountChange = (value) => {
    if (value >= 0) {
      setAmount(value);
    }
  };

  const options = Object.keys(data);

  const convert = async () => {
    await data;
    setConvertedAmount((amount * data[to]).toFixed(2));
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
  };
  useEffect(() => {
    convert();
  }, [amount]);

  return (
    <div className="text-3xl font-bold flex flex-col gap-10 justify-center items-center p-10">
      <div className="py-2">Currency Converter</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          convert();
        }}
        className="py-6 border rounded-lg px-3 flex flex-col gap-2"
      >
        <InputBox
          amount={amount}
          label={from}
          amountChange={amountChange}
          selectedCurrency={from}
          currencyOptions={options}
          currencyChange={(value) => setFrom(value)}
        />
        <button
          className="max-w-fit self-center border rounded-md p-2 bg-blue-500 text-white outline-none"
          onClick={() => swap()}
        >
          swap
        </button>
        <InputBox
          amount={convertedAmount}
          label={to}
          amountChange={amountChange}
          selectedCurrency={to}
          amountDisable
          currencyOptions={options}
          currencyChange={(value) => setTo(value)}
        />
        <button
          className="border rounded-md p-2 bg-blue-500 text-white outline-none"
          type="submit"
        >
          Convert
        </button>
      </form>
    </div>
  );
}
