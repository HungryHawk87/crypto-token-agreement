import { useState } from "react";
import { generatePDF } from "./api";

export default function AgreementForm() {
  const [form, setForm] = useState({
    sellerName: "Sooraj Omanakuttan",
    company: "JMM Trading Company",
    buyerName: "Solomon John",
    blockchain: "Ethereum",
    tokenPrice: "0.20",
    totalTokens: "2000000000",
    totalValue: "400000000",
    sellerWallet: "",
    buyerWallet: "",
    governingLaw: "India",
    date: "28-12-2025"
  });

  return (
    <div style={{ padding: 30 }}>
      <h2>DAILY AI (DAI) Crypto Agreement</h2>

      {Object.keys(form).map(key => (
        <input
          key={key}
          placeholder={key}
          value={form[key]}
          onChange={e => setForm({ ...form, [key]: e.target.value })}
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />
      ))}

      <button onClick={() => generatePDF(form)}>
        Generate PDF Agreement
      </button>
    </div>
  );
}
