// const body = document.querySelector("section");
// console.time();

// for (let i = 0; i < 100; i++) {
//     const div = document.createElement("div");
//     div.innerText = ("Salam")
//     div.classList.add("level");
//     div.setAttribute("id", "div1");
//     div.addEventListener("click", () => {
//         console.log(div.closest("section"));
//     });
//     div.remove()
//     body.appendChild(div);
//     body.innerHTML += "<div>Salam</div>"
// }
// console.timeEnd();



document.getElementById('elave_btn').addEventListener('click', function () {
    let elave = document.getElementById('input_one').value.trim();
    elave && (document.querySelector('#div_one').innerHTML += `<div>${elave}</div>`);
});
document.getElementById('sil_btn').addEventListener('click', function () {
    let divOne = document.querySelector('#div_one');
    let sil = divOne.querySelectorAll('div');
    if (sil.length > 0) {
        sil[sil.length - 1].remove();
    }
});