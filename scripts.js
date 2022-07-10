const menuItems = document.querySelectorAll(".item")

for(let i=0; i< menuItems.length;i++){
    menuItems[i].addEventListener("click",cambiarColor)
}
function cambiarColor(){
    console.log("this",this)
    document.body.style.backgroundColor= `#${this.getAtribute('data-background')}`
}