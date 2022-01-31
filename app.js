var elements = document.getElementById("primary").children;
for (var i= 0; i < elements.length; i++)
 {
     if ((i+1)%2!=0) {
         
     
    elements[i].style.color = "red";
}
    
}