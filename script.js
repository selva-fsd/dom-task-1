
function labelcreate(tagname,attername,attervalue,contant){
var ele=document.createElement(tagname);
ele.setAttribute=(attername,attervalue);
ele.innerHTML=contant
return ele;

}

function inputele(tagname,attername,attervalue,attername1,attervalue1){
var ele=document.createElement(tagname);
ele.setAttribute=(attername,attervalue);
ele.setAttribute=(attername1,attername1);
return ele;

}


function linebreaker(tagname){
    var ele=document.createElement(tagname);
    return ele;

}

var firstname=labelcreate("label","for","firstname","Firstname");
var br1=linebreaker("br");
var firstinput=inputele("input","type","firstname","id","firstname");
var br2=linebreaker("br");
var middlename=labelcreate("label","for","middlename","Middlename");
var br3=linebreaker("br");
var middleinput=inputele("input","type","middlename","id","middlename");
var br4=linebreaker("br");
var lastname=labelcreate("label","for","lastname","Lastname");
var br5=linebreaker("br");
var lastinput=inputele("input","type","lastname","id","lastname");
var br6=linebreaker("br");
var email=labelcreate("label","for","email","Email");
var br7=linebreaker("br");
var emailinput=inputele("input","type","email","id","email");
var br8=linebreaker("br");
var password=labelcreate("label","for","password","Password");
var br9=linebreaker("br");
var passinput=inputele("input","type","password","id","password");
var br10=linebreaker("br");
document.body.append(firstname,br1,firstinput,br2,
middlename,br3,middleinput,br4,lastname,br5,
lastinput,br6,email,br7,emailinput,br8,
password,br9,passinput,br10);












