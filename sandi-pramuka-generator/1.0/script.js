let abjad = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let abjad_terbalik = [...abjad].reverse();

// DOM
const FormSandiBalik = document.getElementById("form-sandi-balik");
const FormSandiBalikReverse = document.getElementById(
  "form-sandi-balik-reverse"
);
const FormSandiAngka = document.getElementById("form-sandi-angka");
const FormSandiAngkaReverse = document.getElementById(
  "form-sandi-angka-reverse"
);

FormSandiBalik.addEventListener("submit", function (e) {
  e.preventDefault();
  let words = document.getElementById("sandi-balik-input").value;
  alert(balik(words));
});

FormSandiBalikReverse.addEventListener("submit", function (e) {
  e.preventDefault();
  let words = document.getElementById("sandi-balik-reverse-input").value;
  alert(balikLagi(words));
});

FormSandiAngka.addEventListener("submit", function (e) {
  e.preventDefault();
  let words = document.getElementById("sandi-angka-input").value;
  alert(keAngka(words));
});

// Functions terkait sandi

function balik(str) {
  str = str.toUpperCase();
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (abjad.filter((e) => e === str[i]).length > 0) {
      let index = abjad.findIndex((e) => e === str[i]);
      newStr += str[i].replace(str[i], abjad_terbalik[index]);
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

function balikLagi(str) {
  str = str.toUpperCase();
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (abjad_terbalik.filter((e) => e === str[i]).length > 0) {
      let index = abjad_terbalik.findIndex((e) => e === str[i]);
      newStr += str[i].replace(str[i], abjad[index]);
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

function keAngka(str) {
  str = str.toUpperCase();
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (abjad.filter((e) => e === str[i]).length > 0) {
      let index = abjad.findIndex((e) => e === str[i]);
      newStr += str[i].replace(str[i], index) + "-";
    } else {
      newStr += str[i];
    }
  }
  newStr = newStr.replaceAll(/(- )[\d]/g, " ");
  newStr = newStr.replaceAll(/-$/g, "");
  return newStr;
}

function angkaKeKata(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (abjad.filter((e) => e === str[i]).length > 0) {
      let index = abjad.findIndex((e) => e === str[i]);
      newStr += str[i].replace(str[i], index) + "-";
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}
