

function _move(first, scond){
    document.getElementById("cen_").style.marginLeft = first;
    document.getElementById("cen_1").style.marginLeft = scond;
}

function show_hide_list(mov_){
    document.getElementById("menu_d").style.marginLeft = mov_;
}


document.getElementById("acimg").addEventListener("click", function(){
    if(document.getElementById("opt_acont").style.display == "block"){
        document.getElementById("opt_acont").style.display = "none";
    }else{
        document.getElementById("opt_acont").style.display = "block";
    }
    
});

function get_page(url){
    window.open(url,"_self");
}


/////////// GOOGLE 

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById("acimg").src = profile.getImageUrl();
    document.getElementById("but_lg").style.display = "none";
    document.getElementById("but_out").style.display = "block";
}
document.getElementById("but_out").addEventListener("click", function(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        document.getElementById("but_out").style.display = "none";
        location.reload();
    });
});