setInterval(rang,0)
var page = '0' 
function rang(){
var range_value = document.getElementById('love_range').value;
  document.getElementById('txt_range').innerText = range_value + '%'
    if(kick == '1'){
        alert('Alasan Kamu Nggak Marah Sama Aku ?')
        kick = '0'
        var msg = prompt('Alasan Kamu')
        alert('Alasannya kirim ke aku yaa.. jangan membuat aku penasaran..')
        alert('jangan Pernah berbohong meskipun hanya untuk melindungi perasaan aku :)')
        window.location.href = 'https://wa.me/?text=' + msg;
    }
    if(kick == '2'){
        alert('Yahh Kok Masih Marah Sih :(')
        kick = '0'
        var msg = prompt('Alasan Kamu')
        alert('Alasannya Kirim Ke Aku Yaa.. jangan membuat aku penasaran..')
        alert('jangan Pernah berbohong meskipun hanya untuk melindungi perasaan aku :)')
        window.location.href = 'https://wa.me/?text='
    }
    if(kick == '3'){
        alert('Yahh Kok Nggak Sih :(')
        kick = '0'
        var msg = prompt('Alasan Kamu')
        alert('Alasannya Kirim Ke Aku Yaa.. jangan membuat aku penasaran..')
        alert('jangan Pernah berbohong meskipun hanya untuk melindungi perasaan aku :)')
        window.location.href = 'https://wa.me/?text=' + msg;
    }
}

var kick = '0'

function no(){
 document.querySelector('.slash').style.animation = 'side_dark1 0.5s'
    setTimeout(move,10);
    kick ++
}

function yes(){
document.querySelector('.slash').style.animation = 'side_dark1 0.5s'
    setTimeout(move,10);
    page ++
document.querySelector('.slash').style.animation = 'side_dark1 0.5s'
    setTimeout(move,10);
}

function next_page(){
document.querySelector('.slash').style.animation = 'side_dark 0.5s'
    page ++
    setTimeout(move,10);
}
function move(){
    if(page == '1'){
        document.getElementById('panda--image').src = 'cute-panda.gif'
        document.getElementById('message').innerText = 'heyy amaya, maaf ganggu waktu kamu, ada satu hal yang mau aku jelasin ke kamu'
        document.getElementById('next_btn').style.display = 'none'
        document.getElementById('yes').style.display = 'block'
        document.getElementById('no').style.display = 'block'
    }
    if(page == '2'){
        document.getElementById('panda--image').src = 'cute-panda.gif'
        document.getElementById('message').innerText = 'i have a crush on you, kalo kamu tanya kenapa? aku juga bingung ngejelasin tentang rasa ini'
        document.getElementById('next_btn').style.display = 'block'
        document.getElementById('yes').style.display = 'none'
    }
    if(page == '3'){
        document.getElementById('panda--image').src = 'tkthao219-bubududu.gif'
        document.getElementById('message').innerText = 'perasaan cinta ini tiba-tiba dateng ke aku dan bagi aku kamu sempurna dan spesial di mata aku.'
       document.getElementById('love_range').style.display = 'none'
        document.getElementById('next_btn').style.display = 'block'
        document.getElementById('yes').style.display = 'none'
        document.getElementById('txt_range').style.display = 'none'
    }
    if(page == '4'){
        document.getElementById('panda--image').src = 'dudububu-kiss.gif'
        document.getElementById('message').innerText = 'iya, i like u, do u love me? aku ngga maksa kamu suka balik. its okee, mencintai gak harus memiliki kan?'
       document.getElementById('love_range').style.display = 'none'
        document.getElementById('next_btn').style.display = 'none'
        document.getElementById('yes').style.display = 'block'
        document.getElementById('txt_range').style.display = 'none'
    }
    if(page == '5'){
        document.getElementById('panda--image').src = 'frog-run.gif'
        document.getElementById('message').innerText = 'aku akan selalu nunggu kamu disini. kalau ada apa apa kamu boleh banget cerita sama aku, aku selalu siap sedia buat kamu ko!!! ahaha, segitu aja mungkin dari aku, thanks yaa udah mau baca aku bahagia banget, sehat selalu ya.'
        document.getElementById('next_btn').style.display = 'none'
        document.getElementById('yes').style.display = 'none'
        document.getElementById('msg').style.display = 'block'
}
}