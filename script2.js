 
//changeBackgrounds('section > div','yellow');

// function changeBackgrounds(selectorStr, bgColor) {
//   document.querySelectorAll(selectorStr).forEach(elem => {
//     elem.style.backgroundColor = bgColor;
//   });
// }


function changeMultiples(selectorStr, oldColor, bgColor) {
  document.querySelectorAll(selectorStr).forEach(elem => {
    elem.style.backgroundColor = oldColor;
  });
  let d = document.querySelectorAll(selectorStr); 


  for (let n=factSet-1; n<factNum*factSet; n+=factSet)
  
 { d[n].style.backgroundColor=bgColor;}
//  document.getElementById("d5").style.backgroundColor="pink";
// that was to test to see if assigning ID worked.
}
  
   
   
    
 