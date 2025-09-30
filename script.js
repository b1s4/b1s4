function copiarMail() {
  const mail = "contact@adriian.xyz";
  navigator.clipboard.writeText(mail).then(() => {
    mostrarToast();
  }).catch(err => {
    console.error("Error al copiar: ", err);
  });
}

function mostrarToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // desaparece a los 3s
}
