const checkButton = document.querySelector('#ingresar')
const nameusuario = document.querySelector('#floatingInput')
const password = document.querySelector('#floatingPassword')
const saludoIncial = document.getElementById('saludo-inicial')
const consulta = document.getElementById('consulta')
const menuPrincipal = document.getElementById('menu-principal')



let usuarios = [
    { 'nombre': 'LUIS', 'fullname': 'Luis Alberto Montejo Garcia', 'pass': 1234, 'disponible': 2000 },
    { 'nombre': 'CORAL', 'fullname': 'Coral Ocairi Diaz Victorio', 'pass': 1234, 'disponible': 1000 },
    { 'nombre': 'OMAR', 'fullname': 'Omar Ali Montejo Garcia', 'pass': 1234, 'disponible': 1000 }
]


function inicioSesion() {
    for (let i = 0; i < usuarios.length; i++) {
        if (nameusuario.value === usuarios[i].nombre && password.value == usuarios[i].pass) {
            alert('Bienvenido: ' + usuarios[i].fullname)
            window.location = 'menu.html'
            localStorage.setItem('usuarioActivo', JSON.stringify(usuarios[i]))
            return
        }
    }
    alert('No estas registrado')
}

const etiqueta = JSON.parse(localStorage.getItem('usuarioActivo'))
saludoIncial.innerHTML = 'Bienvenido: ' + etiqueta.fullname




function consultarSaldo() {
    document.getElementById('consultar-saldo').style.display = 'none'
    document.getElementById('retirar').style.display = 'none'
    document.getElementById('depositos').style.display = 'none'
    document.getElementById('otros-servicios').style.display = 'none'
    document.getElementById('consulta').style.display = 'block'
    document.getElementById('menu-principal').style.display = 'block'
    const etiqueta = JSON.parse(localStorage.getItem('usuarioActivo'))
    consulta.innerHTML = '$ ' + etiqueta.disponible
    return
}

function mainmenu() {

    document.getElementById('consultar-saldo').style.display = 'block'
    document.getElementById('retirar').style.display = 'block'
    document.getElementById('depositos').style.display = 'block'
    document.getElementById('otros-servicios').style.display = 'block'
    document.getElementById('consulta').style.display = 'none'
    document.getElementById('menu-principal').style.display = 'none'
    document.getElementById('retirar-montos').style.display = 'none'
    document.getElementById('otro-monto').style.display = 'none'
    document.getElementById('monto-aretirar').style.display = 'none'
    document.getElementById('depositarM').style.display='none'

}


function retirarDinero() {

    document.getElementById('consultar-saldo').style.display = 'none'
    document.getElementById('retirar').style.display = 'none'
    document.getElementById('depositos').style.display = 'none'
    document.getElementById('otros-servicios').style.display = 'none'
    document.getElementById('retirar-montos').style.display = 'block'
    document.getElementById('otro-monto').style.display = 'block'
    document.getElementById('monto-aretirar').style.display = 'block'
    document.getElementById('menu-principal').style.display = 'block'
    document.getElementById('depositarM').style.display='none'
    const etiqueta = document.querySelector('[for="floatingInput"]')
    etiqueta.innerText='Monto a retirar'

}

function retirar200() {

    const nuevo = JSON.parse(localStorage.getItem('usuarioActivo'))
    const valor = nuevo.disponible - 200
    if (valor >= 10) {
        nuevo.disponible = valor
        alert('TRANSACCIÓN REALIZADA CON EXITO \n tu nuevo saldo disponible : $ ' + valor)
        localStorage.setItem('usuarioActivo', JSON.stringify(nuevo))
    }

    else { alert('Saldo insuficiente, tu saldo actual es : ' + nuevo.disponible + '\n Recuerda: Debes mantener tu cuenta con $10') }
}


function retirar500() {
    const nuevo = JSON.parse(localStorage.getItem('usuarioActivo'))
    const valor = nuevo.disponible - 500
    if (valor >= 10) {
        nuevo.disponible = valor
        alert('TRANSACCIÓN REALIZADA CON EXITO \n tu nuevo saldo disponible : $ ' + valor)
        localStorage.setItem('usuarioActivo', JSON.stringify(nuevo))
    }

    else {  alert('Saldo insuficiente, tu saldo actual es : ' + nuevo.disponible + '\n Recuerda: Debes mantener tu cuenta con $10') }

}

function retirar1000() {
    const nuevo = JSON.parse(localStorage.getItem('usuarioActivo'))
    const valor = nuevo.disponible - 1000
    if (valor >= 10) {
        nuevo.disponible = valor
        alert('TRANSACCIÓN REALIZADA CON EXITO \n tu nuevo saldo disponible : $ ' + valor)
        localStorage.setItem('usuarioActivo', JSON.stringify(nuevo))
    }

    else {  alert('Saldo insuficiente, tu saldo actual es : ' + nuevo.disponible + '\n Recuerda: Debes mantener tu cuenta con $10') }
}


function retirar2000() {
    const nuevo = JSON.parse(localStorage.getItem('usuarioActivo'))
    const valor = nuevo.disponible - 2000
    if (valor >= 10) {
        nuevo.disponible = valor
        alert('TRANSACCIÓN REALIZADA CON EXITO \n tu nuevo saldo disponible : $ ' + valor)
        localStorage.setItem('usuarioActivo', JSON.stringify(nuevo))
    }
    else { alert('Saldo insuficiente, tu saldo actual es : ' + nuevo.disponible + '\n Recuerda: Debes mantener tu cuenta con $10') }
}


function otroMonto() {

    const nuevo = JSON.parse(localStorage.getItem('usuarioActivo'))
    const monto = Number(document.getElementById('floatingInput').value)
    const valor = nuevo.disponible - monto
    if (valor >= 10) {
        nuevo.disponible = valor
        alert('TRANSACCIÓN REALIZADA CON EXITO \n tu nuevo saldo disponible : $ ' + valor)
        localStorage.setItem('usuarioActivo', JSON.stringify(nuevo))
    }

    else { alert('Saldo insuficiente, tu saldo actual es : ' + nuevo.disponible + '\n Recuerda: Debes mantener tu cuenta con $10')}
}

function depositar() {

    document.getElementById('consultar-saldo').style.display = 'none'
    document.getElementById('retirar').style.display = 'none'
    document.getElementById('depositos').style.display = 'none'
    document.getElementById('otros-servicios').style.display = 'none'
    document.getElementById('monto-aretirar').style.display = 'block'
    document.getElementById('menu-principal').style.display = 'block'
    document.getElementById('depositarM').style.display='block'
    console.dir(document.querySelector('[for="floatingInput"]'))
    const etiqueta = document.querySelector('[for="floatingInput"]')
    etiqueta.innerText='Monto a depositar'


}


function depositarButton(){
    const nuevo = JSON.parse(localStorage.getItem('usuarioActivo'))
    const monto = Number(document.getElementById('floatingInput').value)
    const valor = nuevo.disponible + monto
    const valor2 = 9990 - nuevo.disponible
    if (valor < 9990) {
        
    
    nuevo.disponible = valor
    alert('TRANSACCIÓN REALIZADA CON EXITO \n tu nuevo saldo disponible : $ ' + valor)
    localStorage.setItem('usuarioActivo', JSON.stringify(nuevo))
    const limpiar=document.getElementById('floatingInput')
    limpiar.innerText='luis'
}
else ( alert('Tu monto maximo a depositar es: ' + valor2 + '\n tu saldo es: ' + nuevo.disponible ) )
  
}



