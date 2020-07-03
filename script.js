function verificar(){
   var data = new Date()
    var ano = data.getFullYear()
   var Fano = window.document.getElementById("txtano")
    var res = document.getElementById("res")

    if(Fano.value.length==0 || Fano.value>ano){
        window.alert("ano invalido preencha corretamente")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        res.innerHTML = `Idade calculada : ${idade}`
        
        if(fsex[0].checked){
            genero = 'homem'
            if(idade < 10){
                res.style.textAlign = 'right'
                res.innerHTML = `criança com ${idade} anos`
                img.setAttribute('src','menino.jpg')
            }else if(idade < 21){
                res.innerHTML = `adolescente com ${idade} anos`
                img.setAttribute('src','rapaz.jpg')
            }else if(idade < 65){
                res.innerHTML = `adulto com ${idade} anos`
                img.setAttribute('src','homem adulto.jpg')
            }else {
                res.innerHTML = `idoso com ${idade} anos`
                img.setAttribute('src','velho.jpg')
            }
        }else{
            genero = 'mulher'
            if(idade < 10){
                res.style.textAlign = 'right'
                res.innerHTML = `criança com ${idade} anos`
                img.setAttribute('src','menina.jpg')
            }else if(idade < 21){
                res.innerHTML = `adolescente com ${idade} anos`
                img.setAttribute('src','moca.jpg')
            }else if(idade < 65){
                res.innerHTML = `adulto com ${idade} anos`
                img.setAttribute('src','mulher adulta.jpg')
            }else {
                res.innerHTML = `idoso com ${idade} anos`
                img.setAttribute('src','velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}