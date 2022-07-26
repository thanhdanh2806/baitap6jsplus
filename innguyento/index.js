function inSoNguyenTo() {
    for (var e = document.getElementById("inputN2").value, t = "", n = 1; n <= e; n++) {
        checkPrime(n) && (t += " " + n)
    }
    document.getElementById("txtResult7").innerHTML = t
}

function checkPrime(e) {
    if (e < 2)
        return !1;
    for (var t = 2; t <= Math.sqrt(e); t++)
        if (e % t == 0)
            return !1;
    return !0
}