 
var factNum=5;// the starting number to be multiplied by; the 'answer'
  // 
  // the order in which the facts will be presented. 0, 1 and ten are "rule based" and should be done before we do this.
var factSequence=[ 2,5,4,9,3,6,7,8];
// the initial setting - arrays begin with "0"
var factIndex=0;
// sets the factSet to the right number.   It will change as we go. 
var factSet=factSequence[factIndex];



// this changes the times tables fact set to the next in the sequence
function nextFact()
{
    factIndex++;  
    factSet=factSequence[factIndex];
    p1.innerHTML="next fact is" + factSet;
    startUp();
}

// this displays the first fact in whatever set you are on; so if you want to start the fact you're on over, it will do that. Also works at beginning. 
function startUp()
{
  // we'll hide the second part of the question at first. 
  A1.style.display="none";
  check2.style.display="none";

  // start with our number x 1. 
  factNum=1;
  // reset the buttons 
    check1.disabled=false;
  start.disabled=true;
  reset.disabled=false;
  startFact.disabled=false;
  // present the problem and call up its picture. 
  newFact();
}

function startOver()
{
  // make sure we're starting with the twos. 
  factSet=2;
  startUp();
}


function newFact()
// first make sure we're only going to ten. 
{
  if (factNum>10)
  {
  p1.innerHTML= "you're done!" +'<button id="check1" class="button1" onclick="nextFact();">Next Fact</button>';
  } 
// maybe that should be in "check answer" or in both. 
else 
  {
        // p1.innerHTML="fact number  is: " + factNum;  
        // now type the question in for this fact, with the input box.
      factor2.innerHTML= factSet + " x " + '<input type="number" id="factor" size="1" maxlength="2"/>';
      // take away the second part if it was there from earlier question, but put in the right text for later.  
      A1.style.display="none";
      check2.style.display="none";
      A1.innerHTML=  factSet + " x " + factNum + " =" + ' <input type="number" id="multAnswer"  size="1" maxlength="2"/>';
    check1.disabled=false;
    }
// here's where we create the number chart and then shade in the multiples of the fact. 
createMultImage();
changeMultiples('section > div','palevioletred','yellow');
}

// build a number chart from 1 to the answer, including the numbers. 
function createMultImage()
{
  // make the string of text and variables that you want to be displayed
  let multPicHTML="";
  let numMax = factSet*10;
  for (let num=1; num<=numMax; num++)
  { 
   multPicHTML +='  <div class = "item" id="d'+num + '" >' + num + ' </div>'; 
  }
  // now make it the HTML
   multPic.innerHTML=multPicHTML;
}

function checkName(picNum)
{
var b = factor.value;
if (b==="")
  {
    feedback.innerHTML="please enter an answer";
  }
else if (b==factNum)
  {
    feedback.innerHTML="Awesome!  That's the right second factor!"
    document.getElementById("A1").style.display = 'block';
    document.getElementById("check2").style.display = 'inline';
    check1.disabled=true;
    check2.disabled=false;
    check2.style.color="white";
  }
else
    {
      feedback.innerHTML="Check your entry; it doesn't seem to be right. I'm just a computer, though..."
    }
}


function checkAnswer()
{
    var c = multAnswer.value; 
  if (c == factNum*factSet)
  {
    feedback.innerHTML="That's right! Try the next one! ";
    // need a "next fact" or 
    factNum+=1;
newFact();
    // go to the next one.   
  }
  else{
    feedback.innerHTML="That doesn't seem to be right.";
    // do better than this -- make it actually diagnostic. 
  }
 
} 

  