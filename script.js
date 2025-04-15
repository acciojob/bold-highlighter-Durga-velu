function highlight() {
    //Write your code here
let strongWords=document.getElementsByTagName("strong")

	strongWords.textContent.style.color="rgb(0,128,0)"

}


function return_normal() {
    //Write your code here
let strongWords=document.querySelectorAll("strong")

	strongWords.style.color="black"
    
}
