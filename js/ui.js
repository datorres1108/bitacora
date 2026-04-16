const UI = {

  mostrarMensaje(msg, tipo = "success") {
    const modalTexto = document.getElementById("modalTexto");
    const modal = new bootstrap.Modal(document.getElementById("modalMensaje"));

    modalTexto.innerText = msg;

    const header = document.querySelector("#modalMensaje .modal-header");
    header.classList.remove("bg-success", "bg-danger");

    header.classList.add(tipo === "danger" ? "bg-danger" : "bg-success");

    modal.show();
  },

  limpiarFormulario() {
    document.getElementById("formBitacora").reset();

    document.getElementById("fecha").value =
      new Date().toISOString().split("T")[0];
  },

  mostrarCargando() {
    document.getElementById("btnGuardar").disabled = true;
    document.getElementById("textoBtn").innerText = "Guardando...";
    document.getElementById("spinnerBtn").classList.remove("d-none");
  },

  ocultarCargando() {
    document.getElementById("btnGuardar").disabled = false;
    document.getElementById("textoBtn").innerText = "Guardar Registro";
    document.getElementById("spinnerBtn").classList.add("d-none");
  }

};