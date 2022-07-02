function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qb9crR5Vp/model.json',modelReady)
}
function modelReady()
{
    classifier.classify(gotResult)
}
function gotResult(error,result)
{
 if(error)
 {
     console.log(error)
    
 }
 else
 {
     console.log(result)
     var random_number_r=Math.floor(Math.random()*255)+1
     var random_number_g=Math.floor(Math.random()*255)+1
     var random_number_b=Math.floor(Math.random()*255)+1

     document.getElementById("result_label").innerHTML="I can hear-"+result[0].label
     document.getElementById("result_confidence").innerHTML="Accuracy-"+(result[0].confidence*100).toFixed(2)+"%"
     document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_g+")"
     document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_g+")"

     img1=document.getElementById("alien1")
     img2=document.getElementById("alien2")


     if(result[0].label=="cat")
     {
         img1.src="aliens-01.png"
         img2.src="aliens-02.gif"

     }
     if(result[0].label=="dog")
     {
         img1.src="aliens-01.gif"
         img2.src="aliens-02.png"

     }
 }

}