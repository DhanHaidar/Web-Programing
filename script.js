const list2 = document.querySelector("li:nth-child(2)")
const anchor = document.querySelector("#a a")
list2.computedStyleMap.backgroundColor = "Grey";
anchor.computedStyleMap.fontsize = "40px";
const list = document.querySelectorAll("li")
list.forEach((item, index) => 
    { item.textContent = `List Baru ${index + 1}`;
});
