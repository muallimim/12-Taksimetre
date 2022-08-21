document.getElementById("btnFiyatHesapla").addEventListener("click", fiyatHesapla);


function fiyatHesapla(){
    var from;
    var to;

    from = document.getElementById("from").value;
    to = document.getElementById("to").value;
    

    if(from == "galatakulesi" && to == "galatakulesi"){
        document.getElementById("result").innerHTML = "0 TL";
    }

    if(from == "galatakulesi" && to == "topkapısarayı"){
        document.getElementById("result").innerHTML = "100 TL";
    }

    if(from == "galatakulesi" && to == "ayasofya"){
        document.getElementById("result").innerHTML = "150 TL";
    }




    /*
    if(from == "galatakulesi"){
        if(to == "galatakulesi"){
            document.getElementById("result").innerHTML = 
            "GALATA KULESİ - GALATA KULESİ" + "<br>" + "<strong>0</strong> TL";
        }
        if(to == "topkapısarayı"){
            document.getElementById("result").innerHTML = 
            "GALATA KULESİ - TOPKAPI SARAYI" + "<br>" + "<strong>100</strong> TL";

        }
        if(to == "ayasofya"){
            document.getElementById("result").innerHTML = 
            "GALATA KULESİ - AYASOFYA" + "<br>" + "<strong>150</strong> TL";
        }
    }

    if(from == "topkapısarayı"){
        if(to == "galatakulesi"){
            document.getElementById("result").innerHTML = 
            "TOPKAPI SARAYI - GALATA KULESİ" + "<br>" + "<strong>100</strong> TL";
        }
        if(to == "topkapısarayı"){
            document.getElementById("result").innerHTML = 
            "TOPKAPI SARAYI - TOPKAPI SARAYI" + "<br>" + "<strong>0</strong> TL";

        }
        if(to == "ayasofya"){
            document.getElementById("result").innerHTML = 
            "TOPKAPI SARAYI - AYASOFYA" + "<br>" + "<strong>200</strong> TL";
        }
    }

    if(from == "ayasofya"){
        if(to == "galatakulesi"){
            document.getElementById("result").innerHTML = 
            "AYASOFYA - GALATA KULESİ" + "<br>" + "<strong>150</strong> TL";
        }
        if(to == "topkapısarayı"){
            document.getElementById("result").innerHTML = 
            "AYASOFYA - TOPKAPI SARAYI" + "<br>" + "<strong>200</strong> TL";

        }
        if(to == "ayasofya"){
            document.getElementById("result").innerHTML = 
            "AYASOFYA - AYASOFYA" + "<br>" + "<strong>0</strong> TL";
        }
    }
    */


    
}