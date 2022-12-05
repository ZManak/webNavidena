//VALIDACIÓN DE FORMULARIOS

document.querySelector("form.formulario").addEventListener("submit", function (event) {

    event.preventDefault(); //parar envío
    
    console.log(event.target.elements);
    console.log(event.target.name.value);

    //comprobar radios
    console.log(event.target.fav_thing.value);

    //comprobar options
    console.log(event.target.sitios.value);

    //comprobar checkbox (checked)
    console.log(event.target.condiciones.checked);

    const name = event.target.name.value
    const email = event.target.email.value
    const message = event.target.mensaje.value
    const fav = event.target.fav_thing.value
    const sitio = event.target.sitios.value
    const conditions = event.target.condiciones.checked;

    let validated = true;

    if (name.length < 5) {
        alert("Nombre muy corto");
        validated = false;
    } 

    if (!email.includes("@")) {
        alert("Falta @")
        validated = false;
    }

    if (fav == "") {
        alert("Selecciona algún favorito")
        validated = false;
    }

    if (!conditions){
        alert("Acepte condiciones")
        validated = false;
    }

    if (validated){
        alert("Envío correcto")
        event.target.submit;
    }

})