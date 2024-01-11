import logo from "./logo.png";
import footer from "./footer.png";
import "./App.css";
import { jsPDF } from "jspdf";

var yCount = 0;
const data =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const scopeOfWork = ["Renewal of PEC registration for year 2024", "To get solar specialized electrical codes"];
const providedByCustomer = [
    "Original PEC certificate",
    "Account Maintenance certificate",
    "Company bank account statement last 01 month",
    "Electrical Engineer for biometric with PEC through Nadra/ e-sahulat",
    "Letterhead in soft",
    "Owners/ partners CNIC copy",
];
const fulfilledByCompany = [
    "To provide complete documentation consultancy to meet requirements as per revised PEC policy for Registration of PEC license in C-6",
];
const terms = [
    "TENCO based on extensive experience in business consultancy, will complete the case & get approval in committed time.",
    "In case of failure, will be responsible to refund all charges.",
    "PEC certificate will be valid till 30th June 2024",
    "Electrical Engineer will be provided by Customer",
    "All charges are exclusive of all tax(s)",
];
const timeline = ["PEC Registration: 02 working weeks after submission"];
const subTasks = [
    { name: "Renewal of PEC registration for year 2024", price: "5000" },
    { name: "To get solar specialized electrical codes", price: "4500" },
    { name: "All challan / non-challan payments", price: "3500" },
    { name: "All government cost", price: "6000" },
];

const doc = new jsPDF();

//This is Front Cover Page
doc.addImage(logo, "PNG", 155, 5, 50, 14);

doc.text("Proposal No. tenco/C6/pecr/june/254", 10, 25);
doc.setFont("helvetica", "bold");
doc.setFontSize(48);
doc.setTextColor("#42b0db");
doc.text("PROPOSAL", 105, 80, null, null, "center");

doc.setFontSize(24);
doc.setTextColor("#0f6080");
doc.text("PEC & AEDB Registration Renewal", 105, 120, null, null, "center");
doc.text("category C-6 for year 2024", 105, 130, null, null, "center");

doc.setFontSize(16);
doc.setTextColor(150);
doc.text("Renergent Energy (Pvt.) Limited, Lahore", 105, 180, null, null, "center");
doc.setFontSize(12);
doc.setTextColor("#0f6080");
doc.text("This PROPOSAL is offered on 23rd of June 2023", 105, 190, null, null, "center");
doc.addImage(footer, "PNG", 0, 235, 210, 60);

// var splitData = doc.splitTextToSize(data, 180);
// doc.text(splitData, 10, 20);
// doc.text(splitData, 10, 100);
// doc.text(splitData, 10, 90);
// doc.text(data, 10, 100, { maxWidth: 180 });

//Do this for Every Product Offering (Proposal Pages)
doc.addPage("a4", "p");
doc.addImage(logo, "PNG", 155, 5, 50, 14);
doc.setTextColor("#0f6080");
doc.setFontSize(18);
doc.text("PEC Renewal", 105, 30, null, null, "center");

doc.setTextColor("#0f6080");
doc.setFontSize(14);
yCount = 40;

doc.text("1. Scope of Work: ", 10, yCount);
doc.setFontSize(12);
doc.setTextColor(150);
yCount = yCount + 5;
scopeOfWork.map((obj) => {
    yCount = yCount + 5;
    return doc.text("•  " + obj, 20, yCount);
});

doc.setTextColor("#0f6080");
doc.setFontSize(14);
yCount = 90;
doc.text("2. To be provided by Renergent Energy", 10, yCount);
doc.setFontSize(12);
doc.setTextColor(150);
yCount = yCount + 5;
providedByCustomer.map((obj) => {
    yCount = yCount + 5;
    return doc.text("•  " + obj, 20, yCount);
});

doc.setTextColor("#0f6080");
doc.setFontSize(14);
yCount = 140;
doc.text("3. To be provided by TENCO", 10, yCount);
doc.setFontSize(12);
doc.setTextColor(150);
yCount = yCount + 5;
fulfilledByCompany.map((obj) => {
    yCount = yCount + 5;
    return doc.text("•  " + obj, 20, yCount, { maxWidth: 150 });
});

doc.setTextColor("#0f6080");
doc.setFontSize(14);
yCount = 200;
doc.text("4. Registration Timeline", 10, yCount);
doc.setFontSize(12);
doc.setTextColor(150);
yCount = yCount + 5;
timeline.map((obj) => {
    yCount = yCount + 5;
    return doc.text("•  " + obj, 20, yCount, { maxWidth: 150 });
});

doc.addImage(footer, "PNG", 0, 235, 210, 60);

//Do this for Every Product Offering (Proposal Pages)
doc.addPage("a4", "p");
doc.addImage(logo, "PNG", 155, 5, 50, 14);
doc.setTextColor("#0f6080");
doc.setFontSize(18);
doc.text("AEDB Registration ", 105, 30, null, null, "center");

doc.setTextColor("#0f6080");
doc.setFontSize(14);
yCount = 40;

doc.text("1. Scope of Work: ", 10, yCount);
doc.setFontSize(12);
doc.setTextColor(150);
yCount = yCount + 5;
scopeOfWork.map((obj) => {
    yCount = yCount + 5;
    return doc.text("•  " + obj, 20, yCount);
});

doc.setTextColor("#0f6080");
doc.setFontSize(14);
yCount = 90;
doc.text("2. To be provided by Renergent Energy", 10, yCount);
doc.setFontSize(12);
doc.setTextColor(150);
yCount = yCount + 5;
providedByCustomer.map((obj) => {
    yCount = yCount + 5;
    return doc.text("•  " + obj, 20, yCount);
});

doc.setTextColor("#0f6080");
doc.setFontSize(14);
yCount = 140;
doc.text("3. To be provided by TENCO", 10, yCount);
doc.setFontSize(12);
doc.setTextColor(150);
yCount = yCount + 5;
fulfilledByCompany.map((obj) => {
    yCount = yCount + 5;
    return doc.text("•  " + obj, 20, yCount, { maxWidth: 150 });
});

doc.setTextColor("#0f6080");
doc.setFontSize(14);
yCount = 200;
doc.text("4. Registration Timeline", 10, yCount);
doc.setFontSize(12);
doc.setTextColor(150);
yCount = yCount + 5;
timeline.map((obj) => {
    yCount = yCount + 5;
    return doc.text("•  " + obj, 20, yCount, { maxWidth: 150 });
});
doc.addImage(footer, "PNG", 0, 235, 210, 60);

//Do this for Every Product Offering (Proposal Pages)
doc.addPage("a4", "p");
doc.addImage(logo, "PNG", 155, 5, 50, 14);
doc.setTextColor("#0f6080");
doc.setFontSize(18);
doc.text("Details of Charges", 105, 30, null, null, "center");

doc.addImage(footer, "PNG", 0, 235, 210, 60);

doc.setLineWidth(0.5);
doc.setDrawColor(150);
doc.line(20, 40, 190, 40);

doc.setTextColor("#0f6080");
doc.setFontSize(14);
yCount = 50;
doc.text("S.No", 20, yCount);
doc.text("Sub Tasks", 40, yCount);
doc.text("Charges", 150, yCount);

doc.line(20, 55, 190, 55);
doc.setFontSize(12);
doc.setTextColor(150);
yCount = yCount + 10;

subTasks.map((obj) => {
    yCount = yCount + 5;

    doc.text("•  " + obj.name, 40, yCount, { maxWidth: 150 });
    doc.text(obj.price, 150, yCount, { maxWidth: 150 });
});

yCount = yCount + 10;
doc.line(20, yCount, 190, yCount);
yCount = yCount + 5;
subTasks.map((obj) => {
    yCount = yCount + 5;

    doc.text("•  " + obj.name, 40, yCount, { maxWidth: 150 });
    doc.text(obj.price, 150, yCount, { maxWidth: 150 });
});

doc.setLineWidth(0.5);
doc.setDrawColor(150);

yCount = yCount + 10;
doc.line(20, yCount, 190, yCount);

doc.setTextColor("#0f6080");
doc.setFontSize(14);
yCount = yCount + 10;
doc.text("Total", 40, yCount);
doc.text("85000", 150, yCount, { maxWidth: 150 });

doc.setTextColor("#0f6080");
doc.setFontSize(14);
yCount = yCount + 20;
doc.text("Terms & Conditions", 10, yCount);

doc.setFontSize(12);
doc.setTextColor(150);
yCount = yCount + 5;

terms.map((obj) => {
    yCount = yCount + 10;

    doc.text("•  " + obj, 20, yCount, { maxWidth: 180 });
});

doc.save("Proposal.pdf");

function App() {
    return <div className="App">Down the File here</div>;
}

export default App;
