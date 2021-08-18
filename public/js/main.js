// ====================================================
//========TASK 2 SOLUTION===================
//=====PRINT OUT YOUR NAME =======
//===USING JAVSCRIPT AS A MY LANGUAGE ===============

document.getElementById('name').innerHTML = `Promise Okafor`

// ====================================================
//========TASK 2 SOLUTION===================
//=====PRINT OUT YOUR NAME =======
//===USING JAVSCRIPT AS A MY LANGUAGE ===============



//=====================================
//add background on scroll
const navEl = document.getElementById('navbar');

window.addEventListener('scroll',addBackground)

function addBackground(){
    if(window.scrollY >= 500){
        navEl.classList.add('show')
    }else{
        navEl.classList.remove('show')
    }
}


//=============================
//darkMode
const darkBtn = document.getElementById('dark');

darkBtn.addEventListener('click',goDark);

function goDark(){
    alert("Sorry Dark Mode Feature isn't available yet")
}
