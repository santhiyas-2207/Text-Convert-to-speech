var Speech=new SpeechSynthesisUtterance();

function update(){
    let textToSpeak=document.getElementById("t").value;
if(textToSpeak.trim()!==""){
 Speech.text=textToSpeak;
 Speech.rate=1;
 Speech.volume=5;
 Speech.pitch=1;
 window.speechSynthesis.speak(Speech);
}
else{
    alert("Please Enter some Text")
}
}