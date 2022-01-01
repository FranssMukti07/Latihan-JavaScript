function verif() {
    let username = "ahmad2017"
    let password = "integrity"
    let uname = document.getElementById("uname").value
    let pw = document.getElementById("pw").value
    if (uname == username && pw == password) {
        window.open(
            'login2.html','_blank'
        )
    } else {
        window.alert("Login Gagal. Username/Password salah!!")
    }
}