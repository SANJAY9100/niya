getImages();
function getWords(){
  b1=!(b1);
  if(b2==true)
  {
    b2=false;
  }
  if(b3==true)
  {
    b3=false;
  }
  checkbuttons();

  if(!(b1)==true)
  {
    document.getElementById("alp").value="learn-A-Z";
    document.getElementById("demo").innerHTML="";
  }
  else{
  
  
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         myFunction(this);
       }
     };
     xhttp.open("GET", "alph.xml", true);
     xhttp.send();
    function myFunction(xml) 
    {
        var i;
        var xmlDoc = xml.responseXML;
        var text="";
       
        var x = xmlDoc.getElementsByTagName("alphabet");
        for (i = 0; i <x.length; i++) {
          text += "<div class=\"box\" id=\"box\" name=\"box\" ><h3 id=\"letter\">" +
          x[i].getElementsByTagName("letter")[0].childNodes[0].nodeValue +
          " -</h3><h1 id=\"word\">" +
          x[i].getElementsByTagName("word")[0].childNodes[0].nodeValue +
          "</h1></div>";
         
        }
        document.getElementById("demo").innerHTML = text;
        document.getElementById("alp").value="Close";
        var ele=document.getElementsByClassName("box");
        for(let e in ele)
        {
            ele[e].style.backgroundColor=getcolor();
        }  
      }
      function getcolor()
      {
        var colr="rgb("
        colr+=getrand(10,255)+','+getrand(10,255)+','+getrand(10,255)+')';
        return colr;
      }
      function getrand(min,max)
      {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }}
    }


function getNum(){
  
  b2=!(b2);
  if(b1==true)
  {
    b1=false;
  }
  if(b3==true)
  {
    b3=false;
  }
  checkbuttons();
  //getWords();
  if(!(b2)==true)
  {
    document.getElementById("num").value="learn-1-100";
    document.getElementById("demo").innerHTML="";
  }
  else{ 
  
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         myFunction(this);
       }
     };
     xhttp.open("GET", "num.xml", true);
     xhttp.send();
    function myFunction(xml) 
    {
        var i;
        var xmlDoc = xml.responseXML;
        var text="";
       
        var x = xmlDoc.getElementsByTagName("number");
        for (i = 0; i <x.length; i++) {
          text += "<div class=\"box\" id=\"box\" name=\"box\" ><h3 id=\"letter\">" +
          x[i].getElementsByTagName("num")[0].childNodes[0].nodeValue +
          " -</h3><h1 id=\"word\">" +
          (x[i].getElementsByTagName("word")[0].childNodes[0].nodeValue).toUpperCase() +
          "</h1></div>";
          
          
         
        }
        document.getElementById("demo").innerHTML = text;
        document.getElementById("num").value="Close";
        var ele=document.getElementsByClassName("box");
        for(e in ele)
        {
            ele[e].style.backgroundColor=getcolor();
        }  
      }
      function getcolor()
      {
        var colr="rgb("
        colr+=getrand(10,255)+','+getrand(10,255)+','+getrand(10,255)+')';
        return colr;
      }
      function getrand(min,max)
      {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
    }
  }
  function getLetters(){
    b3=!(b3);
    if(b2==true)
    {
      b2=false;
    }
    if(b1==true)
    {
    b1=false;
    }
    checkbuttons();
  
    if(!(b3)==true)
    {
      document.getElementById("let").value="learn-letters";
      document.getElementById("demo").innerHTML="";
    }
    else{
    
    
       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
           myFunction(this);
         }
       };
       xhttp.open("GET", "alph.xml", true);
       xhttp.send();
      function myFunction(xml) 
      {
          var i;
          var xmlDoc = xml.responseXML;
          var text="";
         
          var x = xmlDoc.getElementsByTagName("alphabet");
          for (i = 0; i <x.length; i++) {
            text += "<div class=\"box\" id=\"box\" name=\"box\" ><h3 id=\"letter\">" +
            x[i].getElementsByTagName("letter")[0].childNodes[0].nodeValue +
            " -</h3><h1 id=\"word\">" +
            (x[i].getElementsByTagName("letter")[0].childNodes[0].nodeValue).toLowerCase() +
            "</h1></div>";
           
          }
          document.getElementById("demo").innerHTML = text;
          document.getElementById("let").value="Close";
          var ele=document.getElementsByClassName("box");
          for(e in ele)
          {
              ele[e].style.backgroundColor=getcolor();
          }  
        }
        function getcolor()
        {
          var colr="rgb("
          colr+=getrand(10,255)+','+getrand(10,255)+','+getrand(10,255)+')';
          return colr;
        }
        function getrand(min,max)
        {
          return Math.floor(Math.random() * (max - min + 1) ) + min;
        }}
      }
var b1=false,b2=false,b3=false;
function checkbuttons()
{
  if(b1==false)
  {
    document.getElementById("alp").value="learn-A-Z";
    document.getElementById("demo").innerHTML="";
  }
  if(b2==false)
  {
    document.getElementById("num").value="learn-1-100";
    document.getElementById("demo").innerHTML="";
  }
  if(b3==false)
  {
    document.getElementById("let").value="learn-letters";
    document.getElementById("demo").innerHTML="";
  }
}
function getImages()
{
  var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
           myFunction(this);
         }
       };
       xhttp.open("GET", "imgs.xml", true);
       xhttp.send();
       
      function myFunction(xml) 
      {
          
          var xmlDoc = xml.responseXML;
          var text="";
         
          var x = xmlDoc.getElementsByTagName("image");
          var i=0;
          function getPic()
          { 
            i++;if(i==x.length)
            {
              i=0;
            }
            var img=x[i].getElementsByTagName("loc")[0].childNodes[0].nodeValue;
            document.getElementById("wp").src=img;
          }
          var s=setInterval(getPic,1000);          
        }
}
var d=new Date;
var dt=d.toLocaleDateString(); 
if(dt.substr(0,3)=="7/16")
{ var elemn=document.getElementById("wish");
elemn.innerHTML="Happy Birthday NIYA!!";
elemn.style.fontFamily = "Charm";
}

      
  
      
     
     
  
      
     
  