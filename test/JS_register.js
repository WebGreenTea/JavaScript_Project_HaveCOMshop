const pwd1 = document.querySelector("#pwd1");
const pwd2 = document.querySelector("#pwd2");
const errpass = document.querySelector(".errpwd");
const btn = document.querySelector("button");
function passchek() {
    if (!pwd2.value) {
        errpass.textContent = "";
        btn.setAttribute("disabled", "");
    } else if (pwd1.value != pwd2.value) {
        errpass.textContent = "*ยืนยันรหัสผ่านผิด";
        btn.setAttribute("disabled", "");
    } else {
        errpass.textContent = "";
        btn.removeAttribute("disabled", "");
    }
}
