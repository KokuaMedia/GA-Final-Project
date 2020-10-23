

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    
    document.getElementById("logo").style.width = "10%";
    document.body.getElementById("nav-text-size").style.fontSize = "8px";
  } else {
    
    document.getElementById("logo").style.width = "14%";
    document.body.getElementById("nav-text-size").style.fontSize = "16px";
  }
}
