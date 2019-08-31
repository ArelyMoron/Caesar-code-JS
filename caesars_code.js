// Elaborado por Arely M.

"use strict";
var SelectDesp = document.getElementById("select_desp");
var TxtOriginal = document.getElementById("txt_original");
var TxtCifrado = document.getElementById("txt_cifrado");
var ChkbAleatorio = document.getElementById("chkb_aleatorio");
const ABC_MIN = "abcdefghijklmnñopqrstuvwxyz";
const ABC_MAY = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

function start()
{
    SelectDesp = document.getElementById("select_desp");
    TxtOriginal = document.getElementById("txt_original");
    TxtCifrado = document.getElementById("txt_cifrado");
    ChkbAleatorio = document.getElementById("chkb_aleatorio");

    for(var i = 1; i <= 26; i++)
    {
        var option = document.createElement("option");
        option.text = i.toString();
        option.value = i;
        SelectDesp.add(option);
    }
}

function OnClick_btnCifrar()
{
    let texto = TxtOriginal.value;
    let desp = parseInt(SelectDesp.value);
    let cifrado = Cifrar(texto, desp);
    TxtCifrado.value = cifrado;
}

function OnClick_btnDecifrar()
{
    let texto = TxtCifrado.value;
    let desp = parseInt(SelectDesp.value);
    let decifrado = Decifrar(texto, desp);
    TxtOriginal.value = decifrado;
}

function OnCheckedChange_chkbAleatorio()
{
    let num = parseInt(SelectDesp.value);
    if(ChkbAleatorio.checked == true)
    {
        num = Math.round(Math.random() * (27 - 1) + 1);
        SelectDesp.value = num.toString();
    }
    else
    {
        SelectDesp.value = num.toString();
    }
}

function Cifrar(texto, desplazamiento)
{
    let pos = 0;
    let aux = 0;
    let cifrado = "";
    for(var i = 0; i < texto.length; i++)
    {
        let letra = texto.charAt(i);
        if(IsUpper(letra))
        {
            pos = getPosMay(letra)
            if(pos != -1)
            {
                aux = pos + desplazamiento;
                if(aux >= 26)
                {
                    aux -= 26;
                    cifrado += ABC_MAY[aux];
                }

                else
                {
                    cifrado += ABC_MAY[aux];
                }
            }
            else
            {
                cifrado += letra;
            }
        }

        else if(IsLower(letra))
        {
            pos = getPosMin(letra)
            if(pos != -1)
            {
                aux = pos + desplazamiento;
                if(aux >= 26)
                {
                    aux -= 26;
                    cifrado += ABC_MIN[aux];
                }

                else
                {
                    cifrado += ABC_MIN[aux];
                }
            }
            else
            {
                cifrado += letra;
            }
        }

        else
        {
            cifrado += letra;
        }

    }

    return cifrado;
}

function Decifrar(texto, desplazamiento)
{
    let pos = 0;
    let aux = 0;
    let decifrado = "";
    for(var i = 0; i < texto.length; i++)
    {
        let letra = texto.charAt(i);
        if(IsUpper(letra))
        {
            pos = getPosMay(letra)
            if(pos != -1)
            {
                aux = pos - desplazamiento;
                if(aux < 0)
                {
                    aux = pos + 26 - desplazamiento; 
                    decifrado += ABC_MAY[aux];
                }

                else
                {
                    decifrado += ABC_MAY[aux];
                }
            }
            else
            {
                decifrado += letra;
            }
        }

        else if(IsLower(letra))
        {
            pos = getPosMin(letra)
            if(pos != -1)
            {
                aux = pos - desplazamiento;
                if(aux < 0)
                {
                    aux = pos + 26 - desplazamiento; 
                    decifrado += ABC_MIN[aux];
                }

                else
                {
                    decifrado += ABC_MIN[aux];
                }
            }
            else
            {
                decifrado += letra;
            }
        }

        else
        {
            decifrado += letra;
        }

    }

    return decifrado;
}

function IsUpper(letter)
{
    return /[A-Z]|[\u0080-\u024F]/.test(letter) && letter === letter.toUpperCase();
}

function IsLower(letter)
{
    return /[a-z]/.test(letter) && letter === letter.toLowerCase();
}

function getPosMin(letra)
{
    let check = false;
    for(var i = 0; i <= ABC_MIN.length; i++)
    {
        if(letra == ABC_MIN[i])
        {
            check = true;
            break;
        }
    }

    if(check == true)
    {
        return i;
    }

    else
    {
        return -1;
    }
}

function getPosMay(letra)
{
    let check = false;
    for(var i = 0; i <= ABC_MAY.length; i++)
    {
        if(letra == ABC_MAY[i])
        {
            check = true;
            break;
        }
    }

    if(check == true)
    {
        return i;
    }

    else
    {
        return -1;
    }
}