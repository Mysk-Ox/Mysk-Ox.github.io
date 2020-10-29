// eri variablet listaa varten. 
var addtoListButton = document.getElementById('addtoList');
var varasto = document.getElementById('tehtävävarasto');
var inputkenttä = document.getElementById('inputkenttä');




        //--Listan täyttöön sekä muotoiluun.--
addtoListButton.addEventListener('click', function () {
    
        var paragraph = document.createElement('p'); //luodaan tekstikenttä itse tehtäville
         paragraph.classList.add('paragraph-styling'); //mahdollistetaan tehtävien muotoilu (css'ässä linkitetty nimellä p.paragraph jotta muotoilu pätee juuri luotuun paragraphiin)
         paragraph.innerText = inputkenttä.value; //annetaan paragraphille arvo tekstin syöttökentästä
         varasto.appendChild(paragraph); //napataan paragraphi tekstikentästä ja syötetään se listalle
        inputkenttä.value = ""; //nollataan syöttökentän arvo

        //--värinappulan luonti tehtävien yhteydessä--
        
        var nappula = document.createElement('BUTTON'); //luodaan nappi värin vaihtoa varten
        nappula.innerText = "väri"; 
        
        varasto.appendChild(nappula); //syötetään nappula varastoon
        nappula.classList.add('nappistyle');
        
        //--värin vaihto värinapin painalluksesta--
        clickCount = 0;
        nappula.onclick= function(){
            clickCount +=1;
            nappula + clickCount;
        
        
            

            if (clickCount === 1){
                paragraph.style.color = "blue" 
                
            }  if (clickCount === 2){
                paragraph.style.color = "magenta" 
                
            }
             if (clickCount === 3){
                paragraph.style.color = "green" 
                
            }
            if (clickCount > 3){
                clickCount = 0;
            }
            if (clickCount === 0){
                paragraph.style.color = "black" 
                
            }
           
        }
    
        //funktio tehtävien yliviivaamiseen yhdellä klikkauksella
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through"; 
       })
       //funktio tehtävien poistamiseen listasta tuplaklikkauksella.
       paragraph.addEventListener('dblclick', function(){
        varasto.removeChild(paragraph);
      }) //funktio värinappulan poistamiseen listasta. (Poistuu kun tupla klikkaa tehtävän)
        paragraph.addEventListener('dblclick', function(){
        varasto.removeChild(nappula);
})
    })


  