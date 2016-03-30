window.addEventListener('load', startApp);

function startApp(){
    var forwardButton = document.getElementById('forwardButton');
    var backButton = document.getElementById('backButton');
    var array = ["Afbeeldingen/ass.jpg","Afbeeldingen/men.jpg","Afbeeldingen/shoe.jpg","Afbeeldingen/underwear.png","Afbeeldingen/womenBannerFrics.png"]
    var slide = document.getElementById('slide');
    var counter = 0;
    
    forwardButton.addEventListener('click',goForward);
    backButton.addEventListener('click',goBack);
    
    function goForward(){
        counter = counter + 1;
        if(counter > 4){
        counter = 0;
        }
        slide.src = array[counter]
    }
    
    function goBack(){
        counter = counter - 1;
        if(counter < 0){
        counter = 4;
        }
        slide.src = array[counter]
    }
}