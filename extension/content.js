const suspiciousKeywords = [
  "verify your account",
  "confirm password",
  "bank login",
  "free money",
  "claim reward",
  "urgent login",
  "security verification",
  "account suspended"
];

const fakeBrands = [
  "google",
  "facebook",
  "instagram",
  "paypal",
  "bank",
  "microsoft"
];

const currentUrl =
  window.location.href.toLowerCase();

const pageText =
  document.body.innerText.toLowerCase();

const forms =
  document.querySelectorAll("form");

let phishingScore = 0;

// Detect login form
if (forms.length > 0) {
  phishingScore += 20;
}

// Detect password fields
const passwordInputs =
  document.querySelectorAll(
    'input[type="password"]'
  );

if (passwordInputs.length > 0) {
  phishingScore += 25;
}

// Detect suspicious keywords
suspiciousKeywords.forEach(keyword => {

  if (pageText.includes(keyword)) {
    phishingScore += 15;
  }
});

// Detect fake brands in URL
fakeBrands.forEach(brand => {

  if (
    currentUrl.includes(brand)
    &&
    !currentUrl.includes(`${brand}.com`)
  ) {
    phishingScore += 25;
  }
});

// HTTP instead of HTTPS
if (
  currentUrl.startsWith("http://")
) {
  phishingScore += 20;
}

console.log(
  "Surakshit phishing score:",
  phishingScore
);

if (phishingScore >= 50) {

  showWarning(phishingScore);
}

function showWarning(score) {

  const warningBox =
    document.createElement("div");

  warningBox.innerHTML = `

    <div id="surakshit-warning">

      <h2>⚠ Possible Phishing Website</h2>

      <p>
        Surakshit detected suspicious
        login activity on this page.
      </p>

      <p>
        Threat Score: ${score}%
      </p>

      <button id="close-warning">
        Ignore Warning
      </button>

    </div>
  `;
  document.body.appendChild(warningBox);

  const style =
    document.createElement("style");

  style.innerHTML = `

    #surakshit-warning {

      position: fixed;

      top: 20px;

      right: 20px;

      width: 320px;

      background: #0f172a;

      color: white;

      padding: 20px;

      border-radius: 16px;

      border: 2px solid #ef4444;

      z-index: 999999;

      font-family: Arial;

      box-shadow:
        0 0 20px rgba(239,68,68,0.5);
    }

    #surakshit-warning h2 {

      color: #ef4444;

      margin-top: 0;
    }

    #surakshit-warning button {

      margin-top: 15px;

      background: #ef4444;

      color: white;

      border: none;

      padding: 10px 14px;

      border-radius: 10px;

      cursor: pointer;
    }
  `;

  document.head.appendChild(style);

  document
    .getElementById("close-warning")
    .addEventListener(
      "click",
      () => {
        warningBox.remove();
      }
    );
}