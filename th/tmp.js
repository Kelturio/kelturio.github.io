

[...document.querySelector("body > pre").childNodes].map((e) => {
    let result = null;
    (e.nodeName === "#text") && (result = e.textContent);
    (e.nodeName === "BR" && e.nextSibling && e.nextSibling.nodeName === "BR") && (result = "");
    return result
}).filter((e) => (e !== null))