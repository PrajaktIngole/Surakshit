chrome.tabs.onUpdated.addListener(

  async (tabId, changeInfo, tab) => {

    if (
      changeInfo.status === "complete"
      &&
      tab.url
    ) {

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

                url: tab.url,

                email:
                  "extension-user@surakshit.com"
              })
            }
          );

        const data =
          await response.json();

        console.log(data);

        if (
          data.status === "Dangerous"
        ) {

          chrome.tabs.update(
            tabId,
            {
              url:
                chrome.runtime.getURL(
                  "warning.html"
                )
            }
          );
        }

      } catch (error) {

        console.log(error);
      }
    }
  }
);