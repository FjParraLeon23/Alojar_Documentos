

function mostrarInfo(nombre) {
        let a = nombre + ".txt";

    fetch(a)
        .then(res => res.text())
        .then(contenido => {
            let variable = contenido; // aquí guardamos todo el archivo en la variable
            document.getElementById("info").innerHTML = 
                '<h2>' + nombre + '</h2><p>Aquí van los detalles del continente.</p>' + variable;
        })
        .catch(err => {
            document.getElementById("info").innerHTML = 
                '<h2>' + nombre + '</h2><p style="color:red;">Error al leer el archivo .</p>';
        });
}
