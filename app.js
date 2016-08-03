document.addEventListener('DOMContentLoaded', function() {
  var recentInput;
  document.addEventListener('click', function(e) {
    if (e.target.tagName == 'INPUT') {
      recentInput = e;
      console.log(e.target);
      // setInterval(function() {
      //   // recentInput.target.focus();
      // }, 1000)
    }
  })

  document.getElementsByClassName('p')[0].addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    // console.log(e.target.tagName);
    if (e.target.tagName == 'LI' && recentInput !== undefined) {
      recentInput.target.focus();
      recentInput.target.value = recentInput.target.value + e.target.innerHTML;
    }
    // console.log(recentInput.focus());
  })
})



// --------- Bookmarklet Working example ----------
// var mydiv = document.createElement('div');
// mydiv.innerHTML = '<div style="background-color: yellow; position: relative;">' + 
//   '<div style="background-color: blue; position: fixed; top: 0; left: 0; color: white;' + 
//   ' width: 100%;">Lorem Ipsum</div></div>';
// document.body.appendChild(mydiv);

// document.activeElement();



// --------- Add CSS Rule example ----------
// javascript: (function() {
//   var newcss = window.prompt("new css rule:");
//   if ("\v" == "v") {
//     document.createStyleSheet().cssText = newcss
//   } else {
//     var tag = document.createElement("style");
//     tag.type = "text/css";
//     document.getElementsByTagName("head")[0].appendChild(tag);
//     tag[(typeof document.body.style.WebkitAppearance == "string") ? "innerText" : "innerHTML"] = newcss
//   }
// })();
