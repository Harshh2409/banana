var transbutton=document.querySelector("#translatebutton");
var textinput=document.querySelector("#textarea");
var divoutput=document.querySelector("#outputt");
var serverURL="https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}
function errorHandler(error){
    console.log("error",error); 

    alert("something is wrong");
}

function clickHandler(){
    var inputtext=textinput.value;
    fetch(getTranslationURL(inputtext))
    .then(response => response.json())
    .then(json => {
        var translatedtext=json.contents.translated;
        divoutput.innerText=translatedtext;
    }) 
    .catch(errorHandler)
};
transbutton.addEventListener("click",clickHandler)