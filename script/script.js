var c1 = document.getElementById("casilla1");
var c2 = document.getElementById("casilla2");
var c3 = document.getElementById("casilla3");
var c4 = document.getElementById("casilla4");
var c5 = document.getElementById("casilla5");
var c6 = document.getElementById("casilla6");
var c7 = document.getElementById("casilla7");
var c8 = document.getElementById("casilla8");
var c9 = document.getElementById("casilla9");

var tablero = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];


function dibujar() {
    c1.value = tablero[0][0];
    c2.value = tablero[0][1];
    c3.value = tablero[0][2];
    c4.value = tablero[1][0];
    c5.value = tablero[1][1];
    c6.value = tablero[1][2];
    c7.value = tablero[2][0];
    c8.value = tablero[2][1];
    c9.value = tablero[2][2];
}

function comprobar() {
    a = c1.value;
    b = c2.value;
    c = c3.value;
    d = c4.value;
    e = c5.value;
    f = c6.value;
    g = c7.value;
    h = c8.value;
    i = c9.value;

    c1.style.color = "blue";
    c2.style.color = "blue";
    c3.style.color = "blue";
    c4.style.color = "blue";
    c5.style.color = "blue";
    c6.style.color = "blue";
    c7.style.color = "blue";
    c8.style.color = "blue";
    c9.style.color = "blue";

    if (a == b && a == c && a == d && a == e && a == f && a == g && a == h && a == i) {
        dibujar();
        comprobar();
        prepararSiguiente();
    }

    if (a == b && b == c && a == c && a != "" && b != "" && c != "") {
        c1.style.color = "red";
        c2.style.color = "red";
        c3.style.color = "red";

    
    }
    if (d == e && e == f && d == f && d != "" && f != "" && e != "") {
        c4.style.color = "red";
        c5.style.color = "red";
        c6.style.color = "red";

       
    }
    if (g == h && g == i && g == i && g != "" && h != "" && i != "") {
        c7.style.color = "red";
        c8.style.color = "red";
        c9.style.color = "red";

       
    }

    if (a == d && d == g && a == g && a != "" && d != "" && g != "") {
        c1.style.color = "red";
        c4.style.color = "red";
        c7.style.color = "red";

       
    }
    if (b == e && e == h && b == h && b != "" && e != "" && h != "") {
        c2.style.color = "red";
        c5.style.color = "red";
        c8.style.color = "red";

       
    }
    if (c == f && f == i && c == i && i != "" && f != "" && c != "") {
        c3.style.color = "red";
        c6.style.color = "red";
        c9.style.color = "red";

       
    }

    if (a == e && e == i && a == i && a != "" && e != "" && i != "") {
        c1.style.color = "red";
        c5.style.color = "red";
        c9.style.color = "red";

       
    }
    if (g == e && e == c && c == g && g != "" && e != "" && c != "") {
        c3.style.color = "red";
        c5.style.color = "red";
        c7.style.color = "red";

       
    }

}

var siguiente = "O";
function prepararSiguiente() {
    if (siguiente == "O") {
        siguiente = "X";
        obtener = "es el turno de X"
        dato = document.createElement("p");
        dato.innerHTML = obtener;
        document.getElementById("dato").appendChild(dato);
        dato.style.background = "green";

    }
    else {
        siguiente = "O";
        obtener = "es el turno de O"
        dato = document.createElement("p");
        dato.innerHTML = obtener;
        document.getElementById("dato").appendChild(dato);
        dato.style.background = "blue";

    }
    dibujar();
    comprobar();
}



c1.onclick = function () {
    tablero[0][0] = siguiente;
    prepararSiguiente();
}
c2.onclick = function () {
    tablero[0][1] = siguiente;
    prepararSiguiente();
}
c3.onclick = function () {
    tablero[0][2] = siguiente;
    prepararSiguiente();
}
c4.onclick = function () {
    tablero[1][0] = siguiente;
    prepararSiguiente();
}
c5.onclick = function () {
    tablero[1][1] = siguiente;
    prepararSiguiente();
}
c6.onclick = function () {
    tablero[1][2] = siguiente;
    prepararSiguiente();
}
c7.onclick = function () {
    tablero[2][0] = siguiente;
    prepararSiguiente();
}
c8.onclick = function () {
    tablero[2][1] = siguiente;
    prepararSiguiente();
}
c9.onclick = function () {
    tablero[2][2] = siguiente;
    prepararSiguiente();
}

dibujar();


