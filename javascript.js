//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

// fungsi search
const search = document.querySelector(".search-box input"),
      images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        let searcValue = search.value,
            value = searcValue.toLowerCase();
            images.forEach(image =>{
                if(value === image.dataset.name){ //matching value with getting attribute of images
                    return image.style.display = "block";
                }
                image.style.display = "none";
         });
    }
});

search.addEventListener("keyup", () =>{ 
    if(search.value != "") return;
    images.forEach(image =>{
        image.style.display = "block";
    })
})

//bagian darkmode
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src = "asset/sun.png";
        $('a .hitam').hide();
        $('a .putih').show();
        $('a .supwhite').show();
        $('a .taswhite').show();
        $('a .komwhite').show();
        $('a .komblack').hide();
        $('a .tasblack').hide();
        $('a .supblack').hide();
    }else {
        icon.src = "asset/moon.png";
        $('a .hitam').show();
        $('a .putih').hide();
        $('a .supwhite').hide();
        $('a .taswhite').hide();
        $('a .komwhite').hide();
        $('a .komblack').show();
        $('a .tasblack').show();
        $('a .supblack').show();
    }
    
}
