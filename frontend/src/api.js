import axios from "axios";

export const generatePDF = async (payload) => {
  const response = await axios.post(
    "https://crypto-token-agreement.onrender.com/generate-pdf",
    payload,
    { responseType: "blob" }
  );

  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "DAI_Agreement.pdf");
  document.body.appendChild(link);
  link.click();
};
