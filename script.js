const textarea= document.querySelector("textarea"),
voiceList= document.querySelector("select"),
speechBtn = document.querySelector("button");

let synth=speechSynthesis;

function voices(){
    for(let voice of synth.getVoices()){
        console.log(voice);
        let option =`<option value= "${voice.name}">${voice.name}<option>`;
    }
}

synth.addEventListener("voicechanged", voices);

function textToSpeech(text){
    let utternance = new SpeechSynthesisUtterance(text);
    synth.speak(utternance);
}

speechBtn.addEventListener("click",e=>{
    e.preventDefault();
    if(textarea.value !== ""){
        textToSpeech(textarea.value);
    }
});