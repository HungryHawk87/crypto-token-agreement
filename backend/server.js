import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import PDFDocument from "pdfkit";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/generate-pdf", (req, res) => {
  const data = req.body;

  const doc = new PDFDocument({ margin: 40 });
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=DAI_Agreement.pdf");

  doc.pipe(res);
  doc.fontSize(11).text(`
CRYPTO TOKEN PURCHASE AGREEMENT
DAILY AI (DAI)

Seller: ${data.sellerName}
Company: ${data.company}
Buyer: ${data.buyerName}

Token: DAILY AI (DAI)
Blockchain: ${data.blockchain}
Price per Token: ${data.tokenPrice}
Total Tokens: ${data.totalTokens}
Total Value: ${data.totalValue}

This token is a digital asset and not a security.
No guarantees of profit or listing are provided.
Blockchain transfers are irreversible.

Governing Law: ${data.governingLaw}
Date: ${data.date}
  `);

  doc.end();
});

app.listen(4000, () => {
  console.log("Backend running on http://localhost:4000");
});
