function calcular() {

    
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('[ERRO]')
}else{
    var n = Number(num.value)
    tab.innerHTML = ''
    for(c=1;c<=10;c++){
        var iten = document.createElement('option')
        iten.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(iten)
    }
}


   
}


