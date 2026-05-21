const urlText =
    document.getElementById("url");

const resultDiv =
    document.getElementById("result");

chrome.tabs.query(

    {
        active: true,
        currentWindow: true
    },

    async (tabs) => {

        const currentUrl =
            tabs[0].url;

        urlText.innerText =
            currentUrl;

        resultDiv.innerHTML = `
          <div class="loader"></div>
          <p class="loading-text">
            Analyzing website...
          </p>
        `;

        try {

            const response =
                await fetch(

                    "http://localhost:8080/api/threat/scan",

                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({

                            url: currentUrl,

                            email:
                              "extension-user@surakshit.com"
                        })
                    }
                );

            const data =
                await response.json();

            resultDiv.innerHTML = `

              <div>

                <h2 style="
                  color:
                  ${
                    data.status === "Dangerous"
                      ? "#ef4444"
                      : "#22c55e"
                  }
                ">

                  ${data.status}

                </h2>

                <p>
                  ${data.message}
                </p>

                <div class="stats">

                  <div class="card">

                    <h3 style="color:#ef4444;">
                      ${data.malicious}
                    </h3>

                    <p>Malicious</p>

                  </div>

                  <div class="card">

                    <h3 style="color:#eab308;">
                      ${data.suspicious}
                    </h3>

                    <p>Suspicious</p>

                  </div>

                  <div class="card">

                    <h3 style="color:#22c55e;">
                      ${data.harmless}
                    </h3>

                    <p>Harmless</p>

                  </div>

                </div>

              </div>
            `;

        } catch (error) {

            resultDiv.innerHTML = `

              <p style="color:red;">
                Threat analysis failed
              </p>

            `;

            console.log(error);
        }
    }
);