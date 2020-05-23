var newDiv = document.createElement("div");
var t = document.createTextNode("This is a paragraph.");
newDiv.appendChild(t);
document.body.appendChild(newDiv);

[...document.querySelector("body > pre").childNodes].map((e) => {
    let result = null;
    (e.nodeName === "#text") && (result = e.textContent);
    (e.nodeName === "BR" && e.nextSibling && e.nextSibling.nodeName === "BR") && (result = "");
    return result
}).filter((e) => (e !== null))