function highlight() {
    //Write your code here
let strongWords=document.getElementsByTagName("strong")

	for(let i=0;i<strongWords.length;i++)
	{
	strongWords[i].style.color="rgb(0,128,0)"	
	}
	

}


function return_normal() {
    //Write your code here
let strongWords=document.getElementsByTagName("strong")

	
	for(let i=0;i<strongWords.length;i++)
	{
	strongWords[i].style.color="black"	
	}
	
}
