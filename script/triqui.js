
var c1 = document.getElementById("casilla1");
var c2 = document.getElementById("casilla2");
var c3 = document.getElementById("casilla3");
var c4 = document.getElementById("casilla4");
var c5 = document.getElementById("casilla5");
var c6 = document.getElementById("casilla6");
var c7 = document.getElementById("casilla7");
var c8 = document.getElementById("casilla8");
var c9 = document.getElementById("casilla9");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var t1, t2, t3, t4, t5, t6, t7, t8, t9;


//Variables del tablero
t1 = c1.value;
t2 = c2.value;
t3 = c3.value;
t4 = c4.value;
t5 = c5.value;
t6 = c6.value;
t7 = c7.value;
t8 = c8.value;
t9 = c9.value;
function dibujar() {
    if (t1 == "" || t2 == "" || t3 == "" || t4 == "" || t5 == "" || t6 == "" || t7 == "" || t8 == "" || t9 == "") {
        //alert("Inicia la X");
       
        btn1.onclick = function () {
            next = "X";
            c1.value = next;
            t1 = next;
                       if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                next = "O";
                btn2.onclick = function () {
                    c2.value = next;
                    t2 = next;

                    next = "X";
                    btn3.onclick = function () {
                        c3.value = next;
                        t3 = next;

                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                            next = "O";
                            btn4.onclick = function () {
                                c4.value = next;
                                t4 = next;

                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {

                                    next = "X";
                                    btn5.onclick = function () {
                                        c5.value = next;
                                        t5 = next;

                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                            next = "O";
                                            btn6.onclick = function () {
                                                c6.value = next;
                                                t6 = next;

                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {
                                                    next = "X";
                                                    btn7.onclick = function () {
                                                        c7.value = next;
                                                        t7 = next;

                                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                                            btn8.onclick = function () {
                                                                next="O";
                                                                c8.value = next;
                                                                t8 = next;
                                                                
                                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O"){
                                                                    next = "X"
                                                                    btn9.onclick = function () {
                                                                        c9.value = next;
                                                                        t9 = next;
                                                                    }
                                                                }
                                                            }
                                                            
                                                        }
                                                    }

                                                }
                                            }

                                        }
                                    }

                                }
                            }

                        }
                    }

                }

            }
        }

        btn2.onclick = function () {
            next="X";
            c2.value = next;
            t2 = next;
            //Condicion O
            if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                next = "O";
                btn3.onclick = function () {
                    c3.value = next;
                    t3 = next;

                    next = "X";
                    btn4.onclick = function () {
                        c4.value = next;
                        t4 = next;
                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                            next = "O";
                            btn5.onclick = function () {
                                c5.value = next;
                                t5 = next;

                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {

                                    next = "X";
                                    btn6.onclick = function () {
                                        c6.value = next;
                                        t6 = next;

                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                            next = "O";
                                            btn7.onclick = function () {
                                                c7.value = next;
                                                t7 = next;

                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {
                                                    next = "X";
                                                    btn8.onclick = function () {
                                                        c8.value = next;
                                                        t8 = next;

                                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                                            next="O"
                                                            btn9.onclick = function () {
                                                                c9.value = next;
                                                                t9 = next;
                                                                
                                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O"){
                                                                    next = "X"
                                                                    btn1.onclick = function () {
                                                                        c1.value = next;
                                                                        t1 = next;
                                                                    }
                                                                }
                                                            }
                                                            
                                                        }
                                                    }

                                                }
                                            }

                                        }
                                    }

                                }
                            }

                        }
                    }

                }

            }
        }

        btn3.onclick = function () {
            next="x"
            c3.value = next;
            t3 = next;
            //Condicion O
            if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                next = "O";
                btn4.onclick = function () {
                    c4.value = next;
                    t4 = next;

                    next = "X";
                    btn5.onclick = function () {
                        c5.value = next;
                        t5 = next;
                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                            next = "O";
                            btn6.onclick = function () {
                                c6.value = next;
                                t6 = next;

                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {
                                    next = "X";
                                    btn7.onclick = function () {
                                        c7.value = next;
                                        t7 = next;

                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                            next = "O";
                                            btn8.onclick = function () {
                                                c8.value = next;
                                                t8 = next;

                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {
                                                    next = "X";
                                                    btn9.onclick = function () {
                                                        c9.value = next;
                                                        t9 = next;

                                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                                            btn1.onclick = function () {
                                                                next="O"
                                                                c1.value = next;
                                                                t1 = next;
                                                                
                                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O"){
                                                                    next = "X"
                                                                    btn2.onclick = function () {
                                                                        c2.value = next;
                                                                        t2 = next;
                                                                    }
                                                                }
                                                            }
                                                            
                                                        }
                                                    }

                                                }
                                            }

                                        }
                                    }

                                }
                            }

                        }
                    }

                }

            }
        }

        btn4.onclick = function () {
            next="X"
            c4.value = next;
            t4 = next;
            //Condicion O
            if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                next = "O";
                btn5.onclick = function () {
                    c5.value = next;
                    t5 = next;

                    next = "X";
                    btn6.onclick = function () {
                        c6.value = next;
                        t6 = next;
                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                            next = "O";
                            btn7.onclick = function () {
                                c7.value = next;
                                t7 = next;

                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {

                                    next = "X";
                                    btn8.onclick = function () {
                                        c8.value = next;
                                        t8 = next;

                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                            next = "O";
                                            btn9.onclick = function () {
                                                c9.value = next;
                                                t9 = next;

                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {
                                                    next = "X";
                                                    btn1.onclick = function () {
                                                        c1.value = next;
                                                        t1 = next;

                                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                                            btn2.onclick = function () {
                                                                next="O"
                                                                c2.value = next;
                                                                t2 = next;
                                                                
                                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O"){
                                                                    next = "X"
                                                                    btn3.onclick = function () {
                                                                        c3.value = next;
                                                                        t2 = next;
                                                                    }
                                                                }
                                                            }
                                                            
                                                        }
                                                    }

                                                }
                                            }

                                        }
                                    }

                                }
                            }

                        }
                    }

                }

            }
        }

        btn5.onclick = function () {
            next="X"
            c5.value = next;
            t5 = next;
            //Condicion O
            if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                next = "O";
                btn6.onclick = function () {
                    c6.value = next;
                    t6 = next;

                    next = "X";
                    btn7.onclick = function () {
                        c7.value = next;
                        t7 = next;
                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                            next = "O";
                            btn8.onclick = function () {
                                c8.value = next;
                                t8 = next;

                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {

                                    next = "X";
                                    btn9.onclick = function () {
                                        c9.value = next;
                                        t9 = next;

                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                            next = "O";
                                            btn1.onclick = function () {
                                                c1.value = next;
                                                t1 = next;

                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {
                                                    next = "X";
                                                    btn2.onclick = function () {
                                                        c2.value = next;
                                                        t2 = next;

                                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                                            btn3.onclick = function () {
                                                                next="O"
                                                                c3.value = next;
                                                                t3 = next;
                                                                
                                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O"){
                                                                    next = "X"
                                                                    btn4.onclick = function () {
                                                                        c4.value = next;
                                                                        t4 = next;
                                                                    }
                                                                }
                                                            }
                                                            
                                                        }
                                                    }

                                                }
                                            }

                                        }
                                    }

                                }
                            }

                        }
                    }

                }

            }
        }

        btn6.onclick = function () {
            next="X"
            c6.value = next;
            t6 = next;
            //Condicion O
            if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                next = "O";
                btn7.onclick = function () {
                    c7.value = next;
                    t7 = next;

                    next = "X";
                    btn8.onclick = function () {
                        c8.value = next;
                        t8 = next;
                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                            next = "O";
                            btn9.onclick = function () {
                                c9.value = next;
                                t9 = next;

                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {

                                    next = "X";
                                    btn1.onclick = function () {
                                        c1.value = next;
                                        t1 = next;

                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                            next = "O";
                                            btn2.onclick = function () {
                                                c2.value = next;
                                                t2 = next;

                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {
                                                    next = "X";
                                                    btn3.onclick = function () {
                                                        c3.value = next;
                                                        t3 = next;

                                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                                            btn4.onclick = function () {
                                                                next="O"
                                                                c4.value = next;
                                                                t4 = next;
                                                                
                                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O"){
                                                                    next = "X"
                                                                    btn5.onclick = function () {
                                                                        c5.value = next;
                                                                        t5 = next;
                                                                    }
                                                                }
                                                            }
                                                            
                                                        }
                                                    }

                                                }
                                            }

                                        }
                                    }

                                }
                            }

                        }
                    }

                }

            }
        }
        
        btn7.onclick = function () {
            next="X"
            c7.value = next;
            t7 = next;
            //Condicion O
            if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                next = "O";
                btn8.onclick = function () {
                    c8.value = next;
                    t8 = next;

                    next = "X";
                    btn9.onclick = function () {
                        c9.value = next;
                        t9 = next;
                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                            next = "O";
                            btn1.onclick = function () {
                                c1.value = next;
                                t1 = next;

                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {

                                    next = "X";
                                    btn2.onclick = function () {
                                        c2.value = next;
                                        t2 = next;

                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                            next = "O";
                                            btn3.onclick = function () {
                                                c3.value = next;
                                                t3 = next;

                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {
                                                    next = "X";
                                                    btn4.onclick = function () {
                                                        c4.value = next;
                                                        t4 = next;

                                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                                            bt5.onclick = function () {
                                                                next="X"
                                                                c4.value = next;
                                                                t5 = next;
                                                                
                                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O"){
                                                                    next = "X"
                                                                    btn6.onclick = function () {
                                                                        c6.value = next;
                                                                        t6 = next;
                                                                    }
                                                                }
                                                            }
                                                            
                                                        }
                                                    }

                                                }
                                            }

                                        }
                                    }

                                }
                            }

                        }
                    }

                }

            }
        }

        btn8.onclick = function () {
            next="X"
            c8.value = next;
            t8 = next;
            //Condicion O
            if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                next = "O";
                btn9.onclick = function () {
                    c9.value = next;
                    t9 = next;

                    next = "X";
                    btn1.onclick = function () {
                        c1.value = next;
                        t1 = next;
                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                            next = "O";
                            btn2.onclick = function () {
                                c2.value = next;
                                t2 = next;

                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {

                                    next = "X";
                                    btn3.onclick = function () {
                                        c3.value = next;
                                        t3 = next;

                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                            next = "O";
                                            btn4.onclick = function () {
                                                c4.value = next;
                                                t4 = next;

                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {
                                                    next = "X";
                                                    btn5.onclick = function () {
                                                        c5.value = next;
                                                        t5 = next;

                                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                                            bt6.onclick = function () {
                                                                next="O"
                                                                c6.value = next;
                                                                t6 = next;
                                                                
                                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O"){
                                                                    next = "X"
                                                                    btn7.onclick = function () {
                                                                        c7.value = next;
                                                                        t7 = next;
                                                                    }
                                                                }
                                                            }
                                                            
                                                        }
                                                    }

                                                }
                                            }

                                        }
                                    }

                                }
                            }

                        }
                    }

                }

            }
        }

        btn9.onclick = function () {
            next="X"
            c9.value = next;
            t9 = next;
            //Condicion O
            if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                next = "O";
                btn1.onclick = function () {
                    c1.value = next;
                    t1 = next;

                    next = "X";
                    btn2.onclick = function () {
                        c2.value = next;
                        t2 = next;
                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                            next = "O";
                            btn3.onclick = function () {
                                c3.value = next;
                                t3 = next;

                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {

                                    next = "X";
                                    btn4.onclick = function () {
                                        c4.value = next;
                                        t4 = next;

                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                            next = "O";
                                            btn5.onclick = function () {
                                                c5.value = next;
                                                t5 = next;

                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O") {
                                                    next = "X";
                                                    btn6.onclick = function () {
                                                        c6.value = next;
                                                        t6 = next;

                                                        if (t1 == "X" || t2 == "X" || t3 == "X" || t4 == "X" || t5 == "X" || t6 == "X" || t7 == "X" || t8 == "X" || t9 == "X") {
                                                            bt7.onclick = function () {
                                                                next="O"
                                                                c7.value = next;
                                                                t7 = next;
                                                                
                                                                if (t1 == "O" || t2 == "O" || t3 == "O" || t4 == "O" || t5 == "O" || t6 == "O" || t7 == "O" || t8 == "O" || t9 == "O"){
                                                                    next = "X"
                                                                    btn8.onclick = function () {
                                                                        c8.value = next;
                                                                        t8 = next;
                                                                    }
                                                                }
                                                            }
                                                            
                                                        }
                                                    }

                                                }
                                            }

                                        }
                                    }

                                }
                            }

                        }
                    }

                }

            }
        }
    }

}







// function comprobar(){
//     a = c1.value;
//     b = c2.value;
//     c = c3.value;
//     d = c4.value;
//     e = c5.value;
//     f = c6.value;
//     g = c7.value;
//     h = c8.value;
//     i = c9.value;


//     if(a == b && b == c && a == c){
//         document.write("win" + " " + a + " " + "fila 1")
//         c1.style.color = "red";
//         c2.style.color = "red";
//         c3.style.color = "red";
//     }
//     if(d == e && e == f && d == f){
//         document.write("win" + " " +  d + " " +  "fila 2") 
//         c4.style.color = "red";
//         c5.style.color = "red";
//         c6.style.color = "red";
//     }
//     if(g == h && g == i && g == i){
//         document.write("win" + " " +  g + " " +  "fila 3")
//         c7.style.color = "red";
//         c8.style.color = "red";
//         c9.style.color = "red";
//     }

//     if(a == d && d == g && a == g){
//         document.write("win" + " " +  a + " " +  "columna 1")
//         c1.style.color = "red";
//         c4.style.color = "red";
//         c7.style.color = "red";
//     }
//     if(b == e && e == h && b == h){
//         document.write("win" + " " +  b + " " +  "column 2")
//         c2.style.color = "red";
//         c5.style.color = "red";
//         c8.style.color = "red";
//     }
//     if(c == f && f == i && c == i){
//         document.write("win" + " " +  c + " " +  "columna 3")
//         c3.style.color = "red";
//         c6.style.color = "red";
//         c9.style.color = "red";
//     }

//     if(a == e && e == i && a == i){
//         document.write("win" + " " +  a + " " +  "Diagonal 1")
//         c1.style.color = "red";
//         c5.style.color = "red";
//         c9.style.color = "red";
//     }
//     if(g == e && e == c && c == g){
//         document.write("win" + " " +  g + " " +  "diagonal 2")
//         c3.style.color = "red";
//         c5.style.color = "red";
//         c7.style.color = "red";
//     }

// }

dibujar()
// comprobar()
