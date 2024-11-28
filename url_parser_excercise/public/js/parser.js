const form = document.getElementById("url_form");
const result = document.getElementById("result");
const errorP = document.getElementById("error-msg");
const urlFormat = document.getElementById("urlFormatInput");
const urlInput = document.getElementById("urlValueInput");

const extractUrlVariables = (urlFormat, urlValue) => {
    const [pathFormat] = urlFormat.split("?");
    const [pathValue, queryString] = urlValue.split("?");

    const pathVariables = pathFormat
        .split("/")
        .filter(Boolean)
        .reduce((acc, part, index) => {
            if (part.startsWith(":")) {
                acc[part.slice(1)] = isNaN(pathValue.split("/")[index])
                    ? pathValue.split("/")[index]
                    : Number(pathValue.split("/")[index]);
            }
            return acc;
        }, {});

    const queryVariables = queryString
        ? Object.fromEntries(
              [...new URLSearchParams(queryString)].map(([key, value]) => [
                  key,
                  isNaN(value) ? value : Number(value),
              ])
          )
        : {};

    return { ...pathVariables, ...queryVariables };
};

const handleSubmit = (e) => {
    e.preventDefault();

    const urlFormatValue = urlFormat.value.trim();
    const urlInputValue = urlInput.value.trim();

    if (!urlFormatValue || !urlInputValue) {
        [urlFormat, urlInput].forEach(
            (input) => (input.style.border = "1px solid red")
        );
        errorP.textContent = "Both URL Format and URL Value are required.";
        return;
    }

    [urlFormat, urlInput].forEach(
        (input) => (input.style.border = "1px solid black")
    );
    errorP.textContent = "";

    const resultData = extractUrlVariables(urlFormatValue, urlInputValue);

    result.textContent = `Result: ${JSON.stringify(
        resultData,
        null,
        2
    )}`;
};

form.addEventListener("submit", handleSubmit);
