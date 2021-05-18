
window.onscroll = function () { scrollFunction() };
window.onload = function () { scrollFunction() };

function scrollFunction() {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $("#page").css("filter", "blur(0px)");
        $("#bgGif").fadeOut();
        $(".bannerImg").css("width", "0");
        $("#banner").css("height", "8%");
        $(".bannerImg").fadeOut().promise().done(function () {
            $("#blanckNB").css("width", "100%");
            $("#NBImg").css("width", "18%");
        });

    } else {
        $("#NBImg").css("width", "0%");
        $("#blanckNB").css("width", "0").promise().done(function () {
            $("#banner").css("height", "45%");
            $("#page").css("filter", "blur(4px)");
            $("#bgGif").fadeIn();
            $(".bannerImg").fadeIn();
            $(".bannerImg").css("width", "70%");
        });
    }
}


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

var nbMsg = 0;
$('#userMsg').submit(function () {
    if (nbMsg >= 20) {
        document.getElementById('dialog-rounded').showModal();
        return false;
    }

    let msg = $('#dark_field').val().toLowerCase();
    if (msg == "") return false;
    $('#dark_field').val("");

    nbMsg++;
    let div = document.createElement("p");
    div.setAttribute("class", "nes-balloon from-right is-dark");
    div.setAttribute("id", "msg" + nbMsg);
    let p = document.createElement("p");

    let toSCroll;

    switch (msg) {
        case 'p': case 'projects': case 'project': case 'see your projects':
            pTEXT = msg;
            toSCroll = "projects";
            break;
        case 'a': case 'about': case 'show information about you !':
            pTEXT = msg;
            toSCroll = "about";
            break;
        case 'c': case 'contact': case 'i want to contact you':
            pTEXT = msg;
            toSCroll = "contact";
            break;
        default:
            pTEXT = "Unrecognized answer !";
    }
    p.innerHTML = pTEXT;

    if (nbMsg > 1) document.getElementById("msg" + (nbMsg - 1)).after(div);
    else document.getElementById("messageRBallons").appendChild(div);
    document.getElementById("msg" + nbMsg).appendChild(p);
    if (toSCroll) document.getElementById(toSCroll).scrollIntoView();
    document.getElementById("msgList").scrollTop = document.getElementById("msgList").scrollHeight;
    return false;
});

