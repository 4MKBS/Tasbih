function inp()  {
    let a=document.createElement("div");
    let b=document.createElement("div");
    let c=document.createElement("div");
    let d=document.createElement("div");
    
    a.innerHTML="আস্তাগফিরুল্লাহ ";
    b.innerHTML="সুবহানাল্লাহ  ";
    c.innerHTML="আলহামদুলিল্লাহ ";
    d.innerHTML="আল্লাহু আকবার ";
    
    a.setAttribute("class","forgive") ;
    b.setAttribute("class","forgive") ;
    c.setAttribute("class","forgive") ;
    d.setAttribute("class","forgive") ;
    
    document.body.appendChild(a);
    document.body.appendChild(b);
    document.body.appendChild(c);
    document.body.appendChild(d);
    
    }
    setInterval(inp,1000);


   setInterval(function(){window.scrollBy(0,9);},10);
