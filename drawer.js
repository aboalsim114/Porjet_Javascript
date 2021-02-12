let page = document.getElementById("page");
let color = document.getElementById("colorid");
 let reset = document.getElementById("reset")


for (let i = 0; i < 10000; i++) {
  const div = document.createElement("div")
  div.id = `div${i}`
  div.classList.add("diva")
  div.addEventListener("mouseover", function(event) {
    const elementId = event.target.id;
    const element = document.getElementById(elementId);
    element.style.backgroundColor = color.value;
  })

  page.appendChild(div);

 reset.addEventListener("click",function(){
   div.style.backgroundColor = "transparent"
 })


}
