const openButton = document.querySelector('.hamburger');
const closeButton = document.querySelector('.cross');
const drawer = document.querySelector('.sidebar');
const feature_list = document.querySelector('.feature_control');
const toggle_feature = document.querySelector('.d');

const feature_listt = document.querySelector('.feature_controll');
const toggle_featuree = document.querySelector('.dd');

openButton.addEventListener('click',()=>{
    if(drawer.classList.contains('make_hidden')){
        drawer.classList.remove('make_hidden');
    }
});

closeButton.addEventListener('click', ()=>{
    if(!drawer.classList.contains('make_hidden')) {
        drawer.classList.add('make_hidden');
    }
});

toggle_feature.addEventListener('click', ()=>{
    if(document.querySelector('ul').classList.contains('make_hidden_collapse')) {
        document.querySelector('ul').classList.remove('make_hidden_collapse')
        feature_list.setAttribute('src', '/images/icon-arrow-up.svg');

    }else {
        document.querySelector('ul').classList.add('make_hidden_collapse');
        feature_list.setAttribute('src', '/images/icon-arrow-down.svg');
    }
});

toggle_featuree.addEventListener('click', ()=>{
    if(document.querySelector('.ull').classList.contains('make_hidden_collapse')) {
        document.querySelector('.ull').classList.remove('make_hidden_collapse')
        feature_listt.setAttribute('src', '/images/icon-arrow-up.svg');

    }else {
        document.querySelector('.ull').classList.add('make_hidden_collapse');
        feature_listt.setAttribute('src', '/images/icon-arrow-down.svg');
    }
});

/*This is second part*/

const fdrop = document.querySelector('.big_nav_drop1');
const cdrop = document.querySelector('.big_nav_drop2');
const f1 = document.querySelector('.f1');
const f2 = document.querySelector('.f2');

fdrop.addEventListener('click', ()=>{

    if(document.querySelector('.big_suboptions').classList.contains('make_hidden')) {
        document.querySelector('.big_suboptions').classList.remove('make_hidden');
        f1.setAttribute('src', '/images/icon-arrow-up.svg');
    }else {
        document.querySelector('.big_suboptions').classList.add('make_hidden');
        f1.setAttribute('src', '/images/icon-arrow-down.svg');
    }

});

cdrop.addEventListener('click', ()=>{

    if(document.querySelector('.big_suboptions2').classList.contains('make_hidden')) {
        document.querySelector('.big_suboptions2').classList.remove('make_hidden');
        f2.setAttribute('src', '/images/icon-arrow-up.svg');
    }else {
        document.querySelector('.big_suboptions2').classList.add('make_hidden');
        f2.setAttribute('src', '/images/icon-arrow-down.svg');
    }
});

