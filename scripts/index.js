window.addEventListener('load', function () {
    $('.loader').fadeOut('1000');
    $('body').removeClass('preventFromScrolling');
    scrollShowTitle();
    window.onscroll = function () { scrollShowTitle(); };
});

function scrollShowTitle() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $('#page').css('filter', 'blur(0px)');
        $('.bgGif').css('opacity', '0');
        $('#bannerImgs').css('margin-top', '0');
        $('.bannerImg').css('width', '0');
        $('#banner').css('height', '8%');
        $('.bannerImg').fadeOut().promise().done(function () {
            $('#blanckNB').css('width', '100%');
            $('#bannerButtons').css('gap', '0.8vw');
            $('#NBImg').css('width', '17%');
        });

    } else {
        $('#NBImg').css('width', '0%');
        $('#blanckNB').css('width', '0').promise().done(function () {
            $('#bannerButtons').css('gap', '4vw');
            $('#banner').css('height', '45%');
            $('#page').css('filter', 'blur(4px)');
            $('.bgGif').css('opacity', '0.2');
            $('#bannerImgs').css('margin-top', '5vh');
            $('.bannerImg').fadeIn();
            $('.bannerImg').css('width', '70%');
        });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0 });
}

function scrollIn(toSCroll) {
    document.getElementById(toSCroll).scrollIntoView();
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}


var nbMsg = 0;
var projects = ['p', 'projects', 'project', 'see your projects'];
var skills = ['s', 'skills', 'skill', 'show me your skills !'];
var about = ['a', 'about', 'project', 'show information about you'];
var contact = ['c', 'contact', 'i want to contact you'];

$('#userMsg').submit(function () {
    if (nbMsg >= 20) {
        document.getElementById('dialog-rounded').showModal();
        return false;
    }

    let msg = $('#dark_field').val().toLowerCase();
    if (msg == '') return false;
    $('#dark_field').val('');

    nbMsg++;
    let div = document.createElement('p');
    div.setAttribute('class', 'nes-balloon from-right is-dark');
    div.setAttribute('id', 'msg' + nbMsg);
    let p = document.createElement('p');

    let toSCroll;
    let pTEXT = msg;

    if (projects.includes(msg)) toSCroll = 'projects';
    else if (skills.includes(msg)) toSCroll = 'skills';
    else if (about.includes(msg)) toSCroll = 'about';
    else if (contact.includes(msg)) toSCroll = 'contact';
    else pTEXT = 'Unrecognized answer !';

    p.innerHTML = pTEXT;
    if (nbMsg > 1) document.getElementById('msg' + (nbMsg - 1)).after(div);
    else document.getElementById('messageRBallons').appendChild(div);
    document.getElementById('msg' + nbMsg).appendChild(p);
    document.getElementById('msgList').scrollTop = document.getElementById('msgList').scrollHeight;
    if (toSCroll) scrollIn(toSCroll);
    return false;
});



$('.aboutImgHv').mouseenter(function () {
    $('#aboutImg').css('box-shadow', '1px 1px 10px 0 rgba(0, 0, 0, .1)');
    $('#aboutImg').css('filter', 'none');
    $('#aboutImgFig').css('opacity', '0');
    $('#aboutImgFig').css('padding-right', ' 6vh');
});

$('.aboutImgHv').mouseleave(function () {
    $('#aboutImg').css('box-shadow', '10px 15px 25px 0 rgba(0, 0, 0, .4)');
    $('#aboutImg').css('filter', 'grayscale(100%) contrast(120%)');
});

function clearForm() {
    $('input').val('');
    $('textarea').val('');
}