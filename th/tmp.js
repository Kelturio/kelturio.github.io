

[...document.querySelector("body > pre").childNodes].map((e) => {
    let result = null;
    (e.nodeName === "#text") && (result = e.textContent);
    (e.nodeName === "BR" && e.nextSibling && e.nextSibling.nodeName === "BR") && (result = "");
    return result
}).filter((e) => (e !== null))



let b=()=>document.getElementsByTagName("pre")[0].innerHTML+=`<span class="b">| <span class="l">${" ".repeat(a+3)}</span>|</span>\n`,a=100,x=document.getElementsByTagName("pre")[0].innerHTML.split("<br>").filter(e=>!e.includes("<script>")&&!e.includes("<style>")).map(e=>e.trim());document.getElementsByTagName("pre")[0].innerHTML=`<span class="b">+${"=".repeat(a)}====+\n</span>`;for(var i=0;i<x.length;i++){let e=x[i];if(i<12){let[n,s]=e.split(":");document.getElementsByTagName("pre")[0].innerHTML+=`<span class="b">| <span class="l">${n}:</span> ${s}${" ".repeat(a-(n.length+s.length-1))}|</span>\n`}else if(12==i)document.getElementsByTagName("pre")[0].innerHTML+=`<span class="b">+${"-".repeat(a+4)}+</span>\n`;else if(i>12)if(e.includes("has LOGIN on")){let n=e.split(" ")[0];document.getElementsByTagName("pre")[0].innerHTML+=`<span class="b">| <span class="l">${n} has LOGIN on:</span> ${e.match(/([0-9]+) systems/)[0]+" ".repeat(a-n.length+e.match(/([0-9]+) systems/)[0].length-30)}|</span>\n`,b()}else if(e.includes("status bits"))document.getElementsByTagName("pre")[0].innerHTML+=`<span class="b">| <span class="l">${e+" ".repeat(a-14)}</span>|</span>\n`,b();else{let n=e.split(/ {3}/).filter(e=>e).map(e=>e.trim());if(0==n.length)continue;-1==n.indexOf("Plan:")&&(document.getElementsByTagName("pre")[0].innerHTML+=`<span class="b">| <span class="l">${n[0]}</span>${" ".repeat(24-n[0].length)}${n[1]}${" ".repeat(45-n[1].length+("CBBS"==n[0]?4:0))}${n[2]}${" ".repeat(15)}|</span>\n`)}}document.getElementsByTagName("pre")[0].innerHTML+=`<span class="b">+${"=".repeat(a+4)}+</span>`;
//<style>*{background:blue;}.b{background:blue;color:cyan;}.b:hover{background:blueviolet;color:white;}.l{color:rgb(228,101,101)}</style>

let b = () => document.getElementsByTagName("pre")[0].innerHTML += `<span class="b">| <span class="l">${" ".repeat(a+3)}</span>|</span>\n`,
	a = 100,
	x = document.getElementsByTagName("pre")[0].innerHTML.split("<br>").filter(e => !e.includes("<script>") && !e.includes("<style>")).map(e => e.trim());
document.getElementsByTagName("pre")[0].innerHTML = `<span class="b">+${"=".repeat(a)}====+\n</span>`;
for (var i = 0; i < x.length; i++) {
	let e = x[i];
	if (i < 12) {
		let [n, s] = e.split(":");
		document.getElementsByTagName("pre")[0].innerHTML += `<span class="b">| <span class="l">${n}:</span> ${s}${" ".repeat(a-(n.length+s.length-1))}|</span>\n`
	} else if (12 == i) document.getElementsByTagName("pre")[0].innerHTML += `<span class="b">+${"-".repeat(a+4)}+</span>\n`;
	else if (i > 12)
		if (e.includes("has LOGIN on")) {
			let n = e.split(" ")[0];
			document.getElementsByTagName("pre")[0].innerHTML += `<span class="b">| <span class="l">${n} has LOGIN on:</span> ${e.match(/([0-9]+) systems/)[0]+" ".repeat(a-n.length+e.match(/([0-9]+) systems/)[0].length-30)}|</span>\n`, b()
		} else if (e.includes("status bits")) document.getElementsByTagName("pre")[0].innerHTML += `<span class="b">| <span class="l">${e+" ".repeat(a-14)}</span>|</span>\n`, b();
	else {
		let n = e.split(/ {3}/).filter(e => e).map(e => e.trim());
		if (0 == n.length) continue; - 1 == n.indexOf("Plan:") && (document.getElementsByTagName("pre")[0].innerHTML += `<span class="b">| <span class="l">${n[0]}</span>${" ".repeat(24-n[0].length)}${n[1]}${" ".repeat(45-n[1].length+("CBBS"==n[0]?4:0))}${n[2]}${" ".repeat(15)}|</span>\n`)
	}
}
document.getElementsByTagName("pre")[0].innerHTML += `<span class="b">+${"=".repeat(a+4)}+</span>`;



uuarr = Object.keys(uumap).map(e => {let obj = uumap[e]; obj.name = e; return obj})
uuarr.filter(e => e.c.length === 1)
uuarr.filter(e => e.c.length === 0 && e.os !== "BBS")
uuarr.filter(e => e.c.length > 0 && e.os === "BBS")
uuarr.filter(e => e.os === "MIL").map(e => e.name).sort()
uuarr.filter(e => e.c.length > 1 && e.os !== "BBS" && e.os !== "MIL")
	.sort((x, y) => {if (x.c.length < y.c.length) return 1; else if (x.c.length > y.c.length) return -1; else return 0})
	