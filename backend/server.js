import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import PDFDocument from "pdfkit";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DEFAULT_LEGAL_TEXT = 
`Hereinafter referred to as the "Buyer", which expression shall include heirs, legal representatives, and permitted assigns.

The Seller and Buyer are hereinafter collectively referred to as the "Parties" and individually as a "Party".

RECITALS

WHEREAS, JMM Trading Company is a duly organized and validly existing company engaged in lawful business activities;

WHEREAS, the Seller is duly authorized to sell and transfer shares owned or controlled by JMM Trading Company;

WHEREAS, the Buyer desires to acquire a specified quantity of shares in JMM Trading Company for investment purposes;

WHEREAS, the Parties wish to set forth the terms and conditions governing the purchase, transfer, ownership, rights, and obligations associated with such shares;

NOW, THEREFORE, in consideration of the mutual covenants, agreements, representations, and warranties contained herein, the Parties agree as follows:


ARTICLE 1: DEFINITIONS AND INTERPRETATION

1.1 "Agreement" means this Share Purchase Agreement, including all schedules, exhibits, and appendices.

1.2 "Business Day" means any day other than Saturday, Sunday, or a day on which banking institutions in New York are closed.

1.3 "Closing" means the completion and consummation of the purchase and sale of the Shares.

1.4 "Closing Date" means January 28, 2026, unless otherwise agreed in writing.

1.5 "Company" means JMM Trading Company, a company duly organized under the laws of New York.

1.6 "Purchase Price" means the total consideration payable for the Shares.

1.7 "Shares" means equity shares representing ownership interest in the Company.

1.8 "Transfer" means the legal conveyance of title and ownership of the Shares.

Interpretation: Headings are for convenience only and shall not affect interpretation.


ARTICLE 2: SALE AND PURCHASE OF SHARES

2.1 The Seller agrees to sell and the Buyer agrees to purchase the Shares.

2.2 This transaction is an outright purchase and sale and does not constitute a loan, partnership, or investment contract.

2.3 The Shares include all rights, privileges, and benefits attached thereto.

2.4 Shares are transferred free and clear of all encumbrances.


ARTICLE 3: PAYMENT TERMS AND CONDITIONS

Payment shall be made in USD by wire transfer, bank instrument, or other lawful method.

Payments are final, irrevocable, and non-refundable once Shares are transferred.


ARTICLE 4: DELIVERY AND TRANSFER OF SHARES

Transfer shall be completed upon payment and registration in company records.


ARTICLE 5: REPRESENTATIONS AND WARRANTIES OF SELLER 

The Seller hereby represents and warrants to the Buyer that, as of the date hereof and as of the Closing Date, the following statements are true, accurate, and complete: 

  

5.1 Authority and Capacity. The Seller has full legal right, power, capacity, and authority to enter into this Agreement and to consummate the transactions contemplated hereby. If the Seller is acting on behalf of the Company, the Seller has been duly authorized by all necessary corporate action to execute and deliver this Agreement and to transfer the Shares. 

  

5.2 Valid and Binding Agreement. This Agreement constitutes a legal, valid, and binding obligation of the Seller, enforceable against the Seller in accordance with its terms, subject only to applicable bankruptcy, insolvency, and similar laws affecting creditors' rights generally. 

  

5.3 Ownership of Shares. The Seller is the lawful, record, and beneficial owner of the Shares, with good and marketable title thereto. The Shares are owned free and clear of all liens, pledges, security interests, charges, encumbrances, equities, claims, options, rights of first refusal, or any other restrictions on transfer of any nature whatsoever. 

  

5.4 No Conflicts or Violations. The execution, delivery, and performance of this Agreement by the Seller does not and will not: (a) violate any provision of any agreement, contract, or instrument to which the Seller or the Company is a party; (b) violate any judgment, order, decree, statute, law, rule, or regulation applicable to the Seller or the Company; or (c) require any consent, approval, or authorization of any person or governmental authority that has not been obtained. 

  

5.5 No Litigation. There is no action, suit, proceeding, inquiry, or investigation pending or, to the Seller's knowledge, threatened against the Seller or the Company that would prevent the Seller from transferring the Shares or performing its obligations under this Agreement. 

  

5.6 Compliance with Laws. The sale and transfer of the Shares pursuant to this Agreement comply with all applicable federal, state, and local laws, rules, and regulations, including all applicable securities laws and regulations. 

  

5.7 Valid Issuance. The Shares have been duly authorized and validly issued by the Company, are fully paid and non-assessable, and were issued in compliance with all applicable laws and the Company's governing documents. 

  

5.8 Company Standing. To the Seller's knowledge, the Company is duly organized, validly existing, and in good standing under the laws of its jurisdiction of incorporation and has all requisite corporate power and authority to own and operate its properties and to carry on its business as now being conducted. 

  

5.9 No Misrepresentation. No representation or warranty made by the Seller in this Agreement contains any untrue statement of a material fact or omits to state a material fact necessary to make the statements herein, in light of the circumstances under which they were made, not misleading. 

  

5.10 Survival of Representations. All representations and warranties of the Seller contained in this Agreement shall survive the Closing for a period of two (2) years, except for representations regarding title to the Shares, which shall survive indefinitely. 

  

ARTICLE 6: REPRESENTATIONS AND WARRANTIES OF BUYER 

The Buyer hereby represents and warrants to the Seller that, as of the date hereof and as of the Closing Date, the following statements are true, accurate, and complete: 

  

6.1 Authority and Capacity. The Buyer has full legal right, power, capacity, and authority to enter into this Agreement and to consummate the transactions contemplated hereby. The Buyer has taken all necessary action to authorize the execution, delivery, and performance of this Agreement. 

  

6.2 Valid and Binding Agreement. This Agreement constitutes a legal, valid, and binding obligation of the Buyer, enforceable against the Buyer in accordance with its terms, subject only to applicable bankruptcy, insolvency, and similar laws affecting creditors' rights generally. 

  

6.3 Investment Purpose. The Buyer is acquiring the Shares solely for the Buyer's own account for investment purposes and not with a view to, or for resale in connection with, any distribution or public offering of the Shares in violation of applicable securities laws. 

  

6.4 Investment Experience and Sophistication. The Buyer has such knowledge, sophistication, and experience in business and financial matters that the Buyer is capable of evaluating the merits and risks of the investment in the Shares. The Buyer is able to bear the economic risk of the investment in the Shares and can afford a complete loss of such investment. 

  

6.5 Access to Information. The Buyer has had full access to all information regarding the Company, the Shares, and the terms of this transaction that the Buyer deems necessary or appropriate to enable the Buyer to make an informed investment decision. The Buyer has been afforded the opportunity to ask questions of and receive answers from the Seller and the Company concerning the Company and the Shares. 

  

6.6 Independent Investigation. The Buyer has conducted its own independent investigation, review, and analysis of the business, operations, assets, liabilities, results of operations, financial condition, and prospects of the Company. The Buyer acknowledges that it is not relying on any representations or warranties of the Seller except as expressly set forth in this Agreement. 

  

6.7 Financial Capability. The Buyer has adequate financial resources and liquid assets available to pay the Purchase Price in full on the Closing Date and to fulfill all other obligations under this Agreement. 

  

6.8 Understanding of Securities Laws. The Buyer understands that: (a) the Shares have not been registered under the Securities Act of 1933 or any state securities laws; (b) the Shares are being offered and sold in reliance on exemptions from registration requirements; (c) the Shares may be subject to restrictions on transfer under applicable securities laws; and (d) the Buyer may not be able to liquidate its investment in the Shares readily or at all. 

  

6.9 No Conflicts or Violations. The execution, delivery, and performance of this Agreement by the Buyer does not and will not violate any agreement, contract, judgment, order, decree, statute, law, rule, or regulation applicable to the Buyer. 

  

6.10 Legal and Tax Advice. The Buyer has been advised to consult, and has had the opportunity to consult, with the Buyer's own legal, tax, and financial advisors regarding the legal, tax, and financial consequences of this investment. 

  

6.11 No Government Recommendation. The Buyer understands that no federal or state agency has passed upon or made any recommendation or endorsement of the Shares or the fairness or suitability of the investment in the Shares. 

  

ARTICLE 7: CONDITIONS TO CLOSING 

7.1 Conditions to Buyer's Obligations. The obligations of the Buyer to consummate the purchase of the Shares and to take the other actions required at the Closing are subject to the satisfaction, at or before the Closing, of each of the following conditions (any of which may be waived by the Buyer in whole or in part): 

  

Accuracy of Representations. The representations and warranties of the Seller contained in this Agreement shall be true and correct in all material respects as of the Closing Date, with the same effect as though such representations and warranties had been made on and as of the Closing Date. 

Performance of Obligations. The Seller shall have performed and complied in all material respects with all obligations and covenants required by this Agreement to be performed or complied with by the Seller on or before the Closing Date. 

Delivery of Documents. The Seller shall have delivered or caused to be delivered to the Buyer all documents, instruments, and certificates required under Article 4 of this Agreement. 

No Material Adverse Change. Since the date of this Agreement, there shall have been no material adverse change in the business, operations, properties, assets, or condition (financial or otherwise) of the Company. 

Consents and Approvals. All consents, approvals, authorizations, and clearances required from any governmental authority or third party for the consummation of the transactions contemplated by this Agreement shall have been obtained and shall be in full force and effect. 

No Litigation. No action, suit, or proceeding shall be pending or threatened before any court or governmental authority seeking to restrain, prohibit, or obtain damages with respect to this Agreement or the consummation of the transactions contemplated hereby. 

Legal Opinion. The Buyer shall have received a legal opinion from counsel to the Seller, in form and substance reasonably satisfactory to the Buyer, covering such matters as the Buyer may reasonably request. 

7.2 Conditions to Seller's Obligations. The obligations of the Seller to consummate the sale of the Shares and to take the other actions required at the Closing are subject to the satisfaction, at or before the Closing, of each of the following conditions (any of which may be waived by the Seller in whole or in part): 

  

Accuracy of Representations. The representations and warranties of the Buyer contained in this Agreement shall be true and correct in all material respects as of the Closing Date. 

Performance of Obligations. The Buyer shall have performed and complied in all material respects with all obligations and covenants required by this Agreement to be performed or complied with by the Buyer on or before the Closing Date. 

Receipt of Purchase Price. The Seller shall have received the full Purchase Price in immediately available funds in accordance with Article 3. 

Consents and Approvals. All consents, approvals, authorizations, and clearances required from any governmental authority or third party for the consummation of the transactions contemplated by this Agreement shall have been obtained. 

  

ARTICLE 8: INDEMNIFICATION 

8.1 Indemnification by Seller. The Seller agrees to indemnify, defend, and hold harmless the Buyer and the Buyer's officers, directors, employees, agents, affiliates, successors, and assigns (collectively, the "Buyer Indemnified Parties") from and against any and all losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, and expenses of whatever kind (including reasonable attorneys' fees and costs of investigation) (collectively, "Losses") arising out of or resulting from: 

Any breach or inaccuracy of any representation or warranty made by the Seller in this Agreement; 

Any breach or non-fulfillment of any covenant, agreement, or obligation of the Seller under this Agreement; 

Any claims by third parties relating to the Shares or the Company arising prior to the Closing Date; 

Any misrepresentation or omission of any material fact by the Seller. 


8.2 Indemnification by Buyer. The Buyer agrees to indemnify, defend, and hold harmless the Seller and the Seller's officers, directors, employees, agents, affiliates, successors, and assigns (collectively, the "Seller Indemnified Parties") from and against all Losses arising out of or resulting from: 

  
Any breach or inaccuracy of any representation or warranty made by the Buyer in this Agreement; 

Any breach or non-fulfilment of any covenant, agreement, or obligation of the Buyer under this Agreement; 

Any claims relating to the ownership, holding, or disposition of the Shares by the Buyer after the Closing; 

Any misrepresentation or omission of any material fact by the Buyer. 


8.3 Notice and Defence of Claims. If any claim, demand, action, or proceeding is asserted or instituted by a third party with respect to which an indemnified party intends to seek indemnification (an "Indemnity Claim"), the indemnified party shall: 

Promptly notify the indemnifying party in writing of the Indemnity Claim; 

Provide the indemnifying party with all information and documentation reasonably available concerning the Indemnity Claim; 

Permit the indemnifying party to assume control of the defence and settlement of the Indemnity Claim; 

Reasonably cooperate with the indemnifying party in the defence of the Indemnity Claim. 

8.4 Settlement of Claims. The indemnifying party shall not settle any Indemnity Claim without the prior written consent of the indemnified party (which consent shall not be unreasonably withheld or delayed) if such settlement would: (a) impose any obligation on the indemnified party other than the payment of money for which the indemnified party will be fully indemnified; (b) include any admission of liability or wrongdoing by the indemnified party; or (c) not include an unconditional release of the indemnified party from all liability. 

  

8.5 Limitations on Indemnification. Notwithstanding anything to the contrary: 

  
No claim for indemnification shall be made unless aggregate Losses exceed $10,000 (the "Basket"), after which the indemnifying party shall be liable for all Losses from the first dollar; 

The maximum aggregate liability of each Party for indemnification shall not exceed the Purchase Price (the "Cap"); 

No claim for indemnification may be brought after the expiration of the survival period specified in this Agreement. 

8.6 Exclusive Remedy. Except for claims of fraud or wilful misconduct, and except for claims seeking specific performance or injunctive relief, the indemnification provisions of this Article 8 shall be the exclusive remedy of the Parties for any breach of this Agreement. 


ARTICLE 9: COVENANTS 

9.1 Conduct Prior to Closing. Between the date of this Agreement and the Closing Date, the Seller covenants and agrees that it shall: 

  

Use commercially reasonable efforts to preserve the Shares intact and maintain all rights associated therewith; 

Not sell, transfer, pledge, encumber, or otherwise dispose of the Shares or any interest therein; 

Promptly notify the Buyer of any material change affecting the Company or the Shares; 

Cooperate with the Buyer's due diligence investigation of the Company and the Shares. 

9.2 Further Assurances. Following the Closing, each Party shall execute and deliver such additional documents, instruments, conveyances, and assurances and take such other actions as may be reasonably required to carry out the provisions of this Agreement and give effect to the transactions contemplated hereby. 

  

9.3 Public Announcements. Neither Party shall issue any press release or make any public announcement regarding this Agreement or the transactions contemplated hereby without the prior written consent of the other Party, except as may be required by applicable law or regulation. 
  

9.4 Confidentiality. Each Party shall keep confidential all non-public information obtained from the other Party in connection with this Agreement and shall not disclose such information to any third party without the prior written consent of the other Party, except as required by law. 

  
9.5 Non-Competition and Non-Solicitation. For a period of two (2) years following the Closing Date, the Seller agrees that it shall not, directly or indirectly: 

  

Compete with the Company in any business substantially similar to the Company's business; 

Solicit or attempt to solicit any customers, clients, or business relationships of the Company; 

Solicit or attempt to hire any employees or consultants of the Company; 

Disparage or make any negative statements about the Company, its business, or its management. 

ARTICLE 10: TERMINATION 

10.1 Termination Rights. This Agreement may be terminated at any time prior to the Closing: 

  

(a) By mutual written consent of the Seller and the Buyer; 

(b) By either Party if the Closing has not occurred on or before thirty (30) days after the scheduled Closing Date, provided that the terminating Party is not in breach of this Agreement; 

(c) By either Party if a court or governmental authority has issued a final, non-appealable order prohibiting the transactions contemplated by this Agreement; 

(d) By the Buyer if there has been a material breach of any representation, warranty, or covenant of the Seller that has not been cured within ten (10) days after written notice; 

(e) By the Seller if there has been a material breach of any representation, warranty, or covenant of the Buyer that has not been cured within ten (10) days after written notice. 

10.2 Effect of Termination. In the event of termination pursuant to Section 10.1: 

  

This Agreement shall become void and have no further effect, except for the provisions relating to confidentiality, expenses, and governing law, which shall survive; 

Each Party shall return to the other Party all documents, materials, and information received from such other Party; 

Neither Party shall have any liability to the other Party except for liabilities arising from willful breach of this Agreement prior to termination. 

  

ARTICLE 11: GENERAL PROVISIONS 

11.1 Governing Law. This Agreement shall be governed by and construed in accordance with the internal laws of the State of New York, without giving effect to any choice or conflict of law provision or rule that would require or permit the application of the laws of any other jurisdiction. 

  

11.2 Jurisdiction and Venue. Each Party irrevocably submits to the exclusive jurisdiction of the state and federal courts located in New York for the purposes of any suit, action, or other proceeding arising out of this Agreement or any transaction contemplated hereby. Each Party agrees to commence any such action, suit, or proceeding only in such courts and waives any objection to venue or forum non conveniens. 

  

11.3 Waiver of Jury Trial. EACH PARTY HEREBY IRREVOCABLY AND UNCONDITIONALLY WAIVES ANY RIGHT IT MAY HAVE TO A TRIAL BY JURY IN RESPECT OF ANY LITIGATION DIRECTLY OR INDIRECTLY ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE TRANSACTIONS CONTEMPLATED HEREBY. 

  

11.4 Entire Agreement. This Agreement constitutes the entire agreement between the Parties concerning the subject matter hereof and supersedes all prior negotiations, representations, or agreements, whether written or oral. This Agreement may not be contradicted by evidence of prior, contemporaneous, or subsequent oral agreements of the Parties. 

  

11.5 Amendments and Waivers. No amendment, modification, or waiver of any provision of this Agreement shall be effective unless in writing and signed by both Parties. No waiver of any provision shall be deemed a waiver of any other provision, and no waiver shall constitute a continuing waiver unless otherwise expressly provided. 

  

11.6 Severability. If any provision of this Agreement is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving the Parties' intent. If such modification is not possible, the provision shall be severed and the remainder of this Agreement shall remain in full force and effect. 

  

11.7 Notices. All notices, requests, demands, and other communications required or permitted under this Agreement shall be in writing and shall be deemed given when: (a) delivered personally; (b) sent by confirmed facsimile or email; (c) received when sent by overnight courier; or (d) received when sent by certified or registered mail, postage prepaid, return receipt requested, addressed to the Parties at their addresses set forth in this Agreement or at such other address as a Party may specify by notice. 

  

11.8 Counterparts. This Agreement may be executed in one or more counterparts, each of which shall be deemed an original but all of which together shall constitute one and the same instrument. Counterparts may be delivered via facsimile, email (including PDF or similar electronic format), or other transmission method, and any counterpart so delivered shall be deemed to have been duly and validly delivered and be valid and effective for all purposes. 

  

11.9 Assignment. Neither Party may assign, delegate, or transfer any of its rights or obligations under this Agreement without the prior written consent of the other Party. Any attempted assignment in violation of this provision shall be void. Subject to the foregoing, this Agreement shall bind and inure to the benefit of the Parties and their respective successors and permitted assigns. 

  

11.10 Third-Party Beneficiaries. This Agreement is for the sole benefit of the Parties and their permitted successors and assigns, and nothing herein, express or implied, is intended to or shall confer upon any other person or entity any legal or equitable right, benefit, or remedy of any nature whatsoever under or by reason of this Agreement. 

  

11.11 Expenses. Except as otherwise provided in this Agreement, each Party shall bear its own costs and expenses (including legal fees and expenses) incurred in connection with this Agreement and the transactions contemplated hereby. 

  

11.12 Construction. The Parties have participated jointly in the negotiation and drafting of this Agreement. If an ambiguity or question of intent or interpretation arises, this Agreement shall be construed as if drafted jointly by the Parties, and no presumption or burden of proof shall arise favouring or disfavouring any Party by virtue of the authorship of any provisions. 

  

11.13 Time of Essence. Time is of the essence with respect to the performance of each Party's obligations under this Agreement. 

  

11.14 Survival. The representations, warranties, covenants, and agreements contained in this Agreement shall survive the Closing for the periods specified herein, and if no period is specified, for a period of two (2) years from the Closing Date, except that representations regarding title to the Shares shall survive indefinitely. 

  
ARTICLE 12: ADDITIONAL DEFINITIONS 

12.1 "Affiliate" means, with respect to any Person, any other Person that directly or indirectly controls, is controlled by, or is under common control with such Person. 

12.2 "Control" (including "controlled by" and "under common control with") means the possession, direct or indirect, of the power to direct or cause the direction of the management and policies of a Person, whether through ownership of voting securities, by contract, or otherwise. 

12.3 "Knowledge" means, with respect to a Party, the actual knowledge of such Party's officers, directors, and key management personnel after reasonable inquiry. 

12.4 "Person" means an individual, corporation, partnership, limited liability company, association, trust, or other entity or organization, including a government or political subdivision or an agency or instrumentality thereof. 

12.5 "Material Adverse Effect" means any effect, change, event, or circumstance that, individually or in the aggregate, has or would reasonably be expected to have a material adverse effect on the business, assets, liabilities, financial condition, or results of operations of the Company. 

 
EXECUTION 

IN WITNESS WHEREOF, the Parties have executed this Share Purchase Agreement as of the date first written above. 

IMPORTANT LEGAL NOTICE 

This document has been prepared as a template for informational and educational purposes only. It does not constitute legal advice and should not be relied upon as a substitute for consultation with a qualified attorney. 

  
BEFORE USING THIS AGREEMENT: 

Consult with legal counsel licensed to practice in your jurisdiction 

Ensure compliance with all applicable federal, state, and local laws 

Verify that all securities law requirements are met 

Obtain appropriate tax advice regarding the transaction 

Conduct proper due diligence on all parties and the shares being transferred 

The creator of this document assumes no liability for any use or reliance upon this template. Each party should seek independent legal and financial advice before entering into any share purchase agreement.

All representations, warranties, indemnities, covenants, termination clauses, governing law (New York), jurisdiction, confidentiality, non-competition, severability, survival, and execution provisions apply as standard commercial terms.

IMPORTANT LEGAL NOTICE

This document is system-generated for informational purposes only and does not constitute legal or investment advice.
`;

function addFooter(doc, pageNumber) {
  const bottom = doc.page.height - 40;

  doc
    .fontSize(9)
    .font("Helvetica")
    .text(`Page ${pageNumber}`, 0, bottom, {
      align: "center"
    });
}


app.post("/generate-pdf", (req, res) => {
  const data = req.body;

  const doc = new PDFDocument({ margin: 40 });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=DAI_Agreement.pdf"
  );

 doc.pipe(res);

let pageNumber = 1;

// Footer for first page
addFooter(doc, pageNumber);

// Footer for every new page
doc.on("pageAdded", () => {
  pageNumber++;
  addFooter(doc, pageNumber);
});




  // ===== PAGE 1 – HEADER =====

// Title
doc
  .font("Helvetica-Bold")
  .fontSize(18)
  .text("CRYPTO TOKEN PURCHASE AGREEMENT", {
    align: "center"
  });

// Underline
const underlineY = doc.y + 2;
doc
  .moveTo(80, underlineY)
  .lineTo(515, underlineY)
  .lineWidth(1)
  .stroke();

doc.moveDown(1);

// Subtitle
doc
  .font("Helvetica-Bold")
  .fontSize(13)
  .text("DAILY AI (DAI)", { align: "center" });

doc.moveDown(1.5);

doc
  .font("Helvetica")
  .fontSize(11)
  .text(
`Seller: ${data.sellerName}
Company: ${data.company}
Buyer: ${data.buyerName}

Token: DAILY AI (DAI)
Blockchain: ${data.blockchain}
Price per Token: ${data.tokenPrice}
Total Tokens: ${data.totalTokens}
Total Value: ${data.totalValue}

This token is a digital asset and not a security.
No guarantees of profit or listing are provided.
Blockchain transfers are irreversible.`,
{
  width: 500,
  lineGap: 3   // 🔥 reduces vertical spacing
});


  // PAGE 2 – FULL LEGAL TEXT
 doc.addPage();

doc
  .font("Helvetica-Bold")
  .fontSize(14)
  .text("AGREEMENT TERMS AND CONDITIONS", { align: "center" });

doc.moveDown(1);

doc
  .font("Helvetica")
  .fontSize(11)
  .text(DEFAULT_LEGAL_TEXT, {
    width: 500,
    lineGap: 2
  });


  // PAGE 3 – GOVERNING LAW
  doc.addPage();

 doc.fontSize(11).text(
`Governing Law: ${data.governingLaw}
Date: ${data.date}`,
{ width: 500 }
);


  // FOOTER
  doc.moveDown(2);
  doc.fontSize(9).text(
    "This agreement is electronically generated and valid without physical signature.",
    { align: "center" }
  );

  doc.end();
});

app.listen(4000, () => {
  console.log("Backend running on http://localhost:4000");
});