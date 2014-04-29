



function sameness(id1, id2, wtext){
 
        var a = document.getElementById(id1).value;
        var b = document.getElementById(id2).value;

        if(a != b){
            document.getElementById("warning_text").innerHTML = wtext+" uyuşmuyor!";
            document.getElementById(id1).style.borderColor="red";
            document.getElementById(id2).style.borderColor="red";
            
        }
        else{
            document.getElementById("warning_text").innerHTML ="";
            document.getElementById(id1).style.borderColor="white";
            document.getElementById(id2).style.borderColor="white";
            
        }
            
    
    
}

function div_sil(id){
    var div = document.getElementById(id);
    div.parentNode.removeChild(div);
    
}
function isNumberOnly(evt){
            var charCode = (evt.which) ? evt.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                    return false;
            return true;
           
}

function test(){
    var same=["email","emailt","sifre", "sifret"];
    var same_name = ["Email","", "Şifre"];
    var text_id=["adi", "soyadi", "dogum_t", "user_id", "email", "sifre", "cepno", "adres"];
    var text_name = ["Adı", "Soyadı","Doğum Tarihi", "Kullanıcı Adı", "Email", "Şifre",  "Cep Telefonu", "Adres" ]
    for(var i = 0 ; i < 8; i++){
        var name = document.getElementById("new:"+text_id[i]);
        if (name.value == "") {
             setTimeout(function(){(document.getElementById("new:"+text_id[i]).style.borderColor="white")},0);
           
            setTimeout(function(){(document.getElementById("new:"+text_id[i]).style.borderColor="red")},200);
            ;
            document.getElementById("warning_text").innerHTML = text_name[i]+" bölümü boş bırakılamaz!";
            return false;
        }
        else
            setTimeout(function(){(document.getElementById("new:"+text_id[i]).style.borderColor="white")},0);
    }
    for(var i = 0 ; i < 4; i +=2){
        
        if(document.getElementById("new:"+same[i]).value != document.getElementById("new:"+same[i+1]).value){
            setTimeout(function(){(document.getElementById("new:"+same[i]).style.borderColor="white")},0);
            setTimeout(function(){(document.getElementById("new:"+same[i+1]).style.borderColor="white")},0);
            setTimeout(function(){(document.getElementById("new:"+same[i]).style.borderColor="red")},200);
            setTimeout(function(){(document.getElementById("new:"+same[i+1]).style.borderColor="red")},200);
            document.getElementById("warning_text").innerHTML = same_name[i]+"ler uyuşmuyor";
            return false;
        }
    
    } 
    
    return true;
    
}
