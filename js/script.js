function changeHeading (){
    let w = innerWidth;
    let headerName = document.getElementById("header-name");
    let blockquoteHeading = document.getElementById("blockquote-heading");
    
   console.log("InnerWidth: " + w);
    if (w < 768) {
        headerName.innerHTML = "Облачный колл-центр «Атлант»";
        blockquoteHeading.innerHTML = "«Выйти на новый сегмент клиентов и удвоить прибыль»";
    } else if ( w > 768) {    
        headerName.innerHTML = "Автоматизации в сфере ЖКХ <br> «ЖилфондСервис»";
        blockquoteHeading.innerHTML = "«С интеграцией справились меньше чем за неделю»";
    }
}

window.addEventListener('resize', function() {
    changeHeading();
    
})
