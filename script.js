const BANKS = [
  {
    name: "State Bank of India (SBI)",
    short: "sbi",
    category: "Public",
    schemes: [
      {
        label: "Public Provident Fund (PPF)",
        url: "https://sbi.co.in/web/personal-banking/investments-deposits/govt-schemes/ppf",
      },
      {
        label: "SBI RD / FD",
        url: "https://sbi.co.in/web/personal-banking/investments-deposits/fixed-deposit",
      },
      {
        label: "Sukanya Samriddhi Yojana",
        url: "https://sbi.co.in/web/personal-banking/investments-deposits/govt-schemes/ssy",
      },
    ],
  },
  {
    name: "HDFC Bank",
    short: "hdfc",
    category: "Private",
    schemes: [
      {
        label: "HDFC RD / FD",
        url: "https://www.hdfcbank.com/personal/resources/rates/interest-rates",
      },
      {
        label: "PPF (via HDFC)",
        url: "https://www.hdfcbank.com/personal/save/accounts/government-schemes/ppf-account",
      },
      {
        label: "PMJJBY / PMSBY",
        url: "https://www.hdfcbank.com/personal/save/insurance/government-schemes",
      },
    ],
  },
  {
    name: "ICICI Bank",
    short: "icici",
    category: "Private",
    schemes: [
      {
        label: "ICICI RD / FD",
        url: "https://www.icicibank.com/personal-banking/deposits/fixed-deposit",
      },
      {
        label: "PPF (via ICICI)",
        url: "https://www.icicibank.com/personal-banking/investments/ppf",
      },
      {
        label: "PMJJBY / PMSBY",
        url: "https://www.icicibank.com/Personal-Banking/insurance/government-schemes.page",
      },
    ],
  },
  {
    name: "Axis Bank",
    short: "axis",
    category: "Private",
    schemes: [
      {
        label: "Axis FD / RD",
        url: "https://www.axisbank.com/interest-rate-on-deposits",
      },
      {
        label: "PPF (via Axis)",
        url: "https://www.axisbank.com/retail/deposits/govt-schemes/public-provident-fund",
      },
      {
        label: "PMJJBY / PMSBY",
        url: "https://www.axisbank.com/retail/insurance/government-schemes",
      },
    ],
  },
  {
    name: "YES Bank",
    short: "yes",
    category: "Private",
    schemes: [
      {
        label: "Atal Pension Yojana (APY)",
        url: "https://www.yesbank.in/personal-banking/yes-individual/wealth-management/apy",
      },
      {
        label: "Pradhan Mantri Jan Dhan Yojana",
        url: "https://www.yesbank.in/personal-banking/yes-individual/wealth-management/pradhan-mantri-jan-dhan-yojna",
      },
      {
        label: "PM Jeevan Jyoti Bima Yojana",
        url: "https://www.yesbank.in/personal-banking/yes-individual/insurance/pradhan-mantri-jeevan-jyoti-bima-yojana",
      },
    ],
  },
  {
    name: "Canara Bank",
    short: "canara",
    category: "Public",
    schemes: [
      {
        label: "Canara FD / RD",
        url: "https://canarabank.com/english/bank-services/deposits/term-deposits/",
      },
      {
        label: "PPF (via Canara)",
        url: "https://canarabank.com/english/bank-services/deposits/govt-schemes/public-provident-fund-ppf/",
      },
    ],
  },
  {
    name: "Bank of Baroda (BoB)",
    short: "bob",
    category: "Public",
    schemes: [
      {
        label: "BoB RD / FD",
        url: "https://www.bankofbaroda.in/interest-rate",
      },
      {
        label: "PPF (via BoB)",
        url: "https://www.bankofbaroda.in/personal-banking/deposits/government-schemes/public-provident-fund-ppf",
      },
    ],
  },
];

// ---- RENDER CARDS ----
const grid = document.getElementById("grid");
function makeCard(bank) {
  const el = document.createElement("article");
  el.className = "card reveal";
  el.innerHTML = `
    <div class="bank">
      <div class="bank-badge">${bank.short.toUpperCase()}</div>
      <div style="font-weight:700">${bank.name}</div>
      <div class="category">${bank.category}</div>
    </div>
    <div class="scheme-list">
      ${bank.schemes.map((s) => `<a href="${s.url}" target="_blank">• ${s.label}</a>`).join("")}
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      <a class="btn" href="${bank.short}.html">📑 See all schemes</a>
    </div>`;
  return el;
}
function render(list = BANKS) {
  grid.innerHTML = "";
  list.forEach((b) => grid.appendChild(makeCard(b)));
}
render();
