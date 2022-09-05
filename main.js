var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id="selfie_1";
        take_snapshot();
        speak_data = "Taking your next selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        speak.synth(utterThis);
    },5000)

    setTimeout2(function(){
        img_id="selfie_2";
        take_snapshot();
        speak_data = "Taking your next selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        speak.synth(utterThis);
    },10000)

    setTimeout3(function(){
        img_id="selfie_3";
        take_snapshot();
        speak_data = "Taking your next selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        speak.synth(utterThis);
    },15000)
    


}
function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_url){
        if(img_id=="selfie_1"){
            document.getElementById("result1").innerHTML = '<img id= "selfie_1"'+data_url+'"/>';
        }

        if(img_id=="selfie_2"){
            document.getElementById("result2").innerHTML = '<img id= "selfie_2"'+data_url+'"/>';
        }

        if(img_id=="selfie_3"){
            document.getElementById("result3").innerHTML = '<img id= "selfie_3"'+data_url+'"/>';
        }
    });

}


