const decryptionKey = {
  ai: "a",
  ober: "o",
  enter: "e",
  imes: "i",
  ufat: "u",
};
const encryptionKey = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const encryptBtnMobile = document.getElementById("encrypt-btn-mobile");
const decryptBtnMobile = document.getElementById("decrypt-btn-mobile");
const userInput = document.getElementById("user-input");
const resultDiv = document.getElementById("result");
const copyBtn = document.getElementById("copy-btn");

// Función para desencriptar una cadena reemplazando secuencias
function desencriptar(encryptedWord, decryptionKey) {
  // Reemplazar cada secuencia en la palabra
  for (const [key, value] of Object.entries(decryptionKey)) {
    encryptedWord = encryptedWord.split(key).join(value);
  }
  return encryptedWord;
}

// Función para encriptar una cadena reemplazando caracteres
function encriptar(inputUsuario) {
  // Dividir la entrada en caracteres
  let arrayInput = inputUsuario.split("");
  let encryptedWord = arrayInput.map((char) => encryptionKey[char] || char);
  return encryptedWord.join("");
}

// Función para copiar al portapapeles
function copiarAlPortapapeles(texto) {
  navigator.clipboard.writeText(texto);
  alert("Texto copiado al portapapeles");
}

// Manejar clics en los botones
document.addEventListener("DOMContentLoaded", () => {
  function handleEncrypt() {
    const inputText = userInput.value;
    resultDiv.textContent = encriptar(inputText);
  }

  function handleDecrypt() {
    const inputText = userInput.value;
    resultDiv.textContent = desencriptar(inputText, decryptionKey);
  }
  function handleCopy() {
    const resultText = resultDiv.textContent;
    copiarAlPortapapeles(resultText);
  }

  encryptBtn.addEventListener("click", handleEncrypt);
  decryptBtn.addEventListener("click", handleDecrypt);
  encryptBtnMobile.addEventListener("click", handleEncrypt);
  decryptBtnMobile.addEventListener("click", handleDecrypt);
  copyBtn.addEventListener("click", handleCopy);
});
