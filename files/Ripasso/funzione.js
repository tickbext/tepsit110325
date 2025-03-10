function funzione1()
{
    var ul = document.createElement("ul");

    var l1 = document.createElement("li");
    var text = document.createTextNode("primo valore");
    l1.appendChild(text);
    ul.appendChild(l1);

    var l2 = document.createElement("li");
    var text = document.createTextNode("secondo valore");
    l2.appendChild(text);
    ul.appendChild(l2); 
    
    p.appendChild(ul);
    d.appendChild(p);
}


function funzione2()
{
    var p1 = document.createElement("p");
    var text = document.createTextNode("Hola");
    p1.appendChild(text);
    d.insertBefore(p1,p);
  
    d.removeChild(p1);
     
    d.replaceChild(p1,p);
 }