function add(id) {
  let el = document.getElementById(id);
  el.value++;
  total();
}

function remove(id) {
  let ell = document.getElementById(id);
  if (ell.value >= 1) {
    ell.value--;
  }
  total();
}

function total() {
  let all = document.querySelectorAll("input");
  sum = 0;
 
  sum += parseInt(all[0].value) + parseInt((all[1].value)* 2) + parseInt((all[2].value)* 3);

  let tot = document.querySelector("p");
  tot.innerHTML = sum + "dt";
}
// function total() {
//   let all = document.querySelectorAll("input");
//   let values = Array.from(all).map((input, index) => parseInt(input.value) * (index + 1));
//   let sum = values.reduce((acc, value) => acc + value, 0);

//   let tot = document.querySelector("p");
//   tot.innerHTML = sum + "dt";
// }

