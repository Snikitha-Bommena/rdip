function val() {
  var a = document.forms["Form"]["name"].value;
   var b = document.forms["Form"]["num"].value;
    var c = document.forms["Form"]["mail"].value;
    var d = a.charAt(0)
     if (a == "") {
    alert("Name column can not be empty");
    return false;
  }
  if (b == "") {
    alert("Number column can not be empty");
    return false;
  }
  if (c == "") {
    alert("Email column can not be empty");
    return false;
  }
  if(b.length != 10){
   alert("Number should have only 10 digits");
   return false;
   }
   var atposition=c.indexOf("@");  
   var dotposition=c.lastIndexOf(".");  
  if(atposition<1 || dotposition<atposition+2 || dotposition+2>=c.length)
   {  
    alert("Invalid email address");  
    return false;  
   }  
   if(d == 0){
    alert("Name should not start with a number");
    return false;}
 if(d == 1){
    alert("Name should not start with a number");
    return false;}
 if(d == 2){
    alert("Name should not start with a number");
    return false;}
 if(d == 3){
    alert("Name should not start with a number");
    return false;}
 if(d == 4){
    alert("Name should not start with a number");
    return false;}
 if(d == 5){
    alert("Name should not start with a number");
    return false;}
 if(d == 6){
    alert("Name should not start with a number");
    return false;}
 if(d == 7){
    alert("Name should not start with a number");
    return false;}
 if(d == 8){
    alert("Name should not start with a number");
    return false;}
 if(d == 9){
    alert("Name should not start with a number");
    return false;}
   }

  function palindrome( ) {
  var str = document.forms["Form1"]["name1"].value;
    var len = str.length;
    var m = Math.floor(len/2);
    for ( var i = 0; i < m; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
          alert("Not a palindrome")
            return false;
            break;
        }
        return true;
       
    }

   }
    function anagram(){
    var st = document.forms["Form2"]["name2"].value;
    var s = document.forms["Form2"]["name3"].value;
    var le = st.toLowerCase();
    var l = s.toLowerCase();
    var v = le.split(" ").join("") 
    var ts = v.split('').sort().join('');
    var t = l.split('').sort().join('');
   var p = ts.localeCompare(t);
   if (p != 0) {
    alert("not an anagram");
    return false;
   }
    }
    function one(r)
  {
    if((r>=0) && (r<=300))
    {
      return 1;
    }
    if((r > 300) && (r <= 600 ))
    {
      return 2;
    }
    if((r>600) && ( r <=1000 ))
    {
      return 3;
    }
  }
  function survive(){
   var x = document.forms["myForm"]["num1"].value;
   var y = document.forms["myForm"]["num2"].value;
   var p = one(x)
   var q = one(y)
   if((x == 0) || (y == 0))
   {
     alert("give some input");
     return false;
   }
   if(p == q)
   {
    alert("Both inputs belong to same category so its a 'Tie'");
    return false;

   }
   if((p==1) && (q == 2)){
     alert(" Your inputs are 'Human' and 'Cockroach',so 'Human' will survive ");
     return false;
   }
   if((p==2) && (q == 1)){
     alert(" Your inputs are 'Cockroach' and 'Human',so 'Human' will survive ");
     return false;
   }
   if((p==1) && (q == 3)){
     alert(" Your inputs are 'Human' and 'Nuclear Bomb',so 'Nuclear Bomb' will survive ");
     return false;
   }
      if((p==3) && (q == 1)){
     alert(" Your inputs are 'Nuclear Bomb' and 'Human',so 'Nuclear Bomb' will survive ");
     return false;
   }
      if((p==2) && (q == 3)){
     alert(" Your inputs are 'Cockroach' and 'Nuclear Bomb',so 'Cockroach' will survive ");
     return false;
   }
      if((p==3) && (q == 2)){
     alert(" Your inputs are 'Nuclear Bomb' and 'Cockroach',so 'Cockroach' will survive ");
     return false;
   }
  } 
      function show(val) 
{ 
document.getElementById("result").value+=val;
    return result;
}  
function final() 
{ 
let i = document.getElementById("result").value; 
let j = eval(i) 
document.getElementById("result").value = j; 
    return result;
}  
function sqrt()
{

    var i = document.getElementById("result").value;
    var j = Math.sqrt(i)
    document.getElementById("result").value = j;
  return result;

}
funtion ab()
{
    var i = document.getElementById("result").value;
    var j = Math.abs(i)
     document.getElementById("result").value = j;
  return result;
}
