document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("fecha").value =
    new Date().toISOString().split("T")[0];
  document.getElementById("formBitacora")
    .addEventListener("submit", async e => {
        e.preventDefault();
        UI.mostrarCargando();
        // 👇 permitir que el DOM se actualice
        await new Promise(resolve => setTimeout(resolve, 50));
        try 
        {
            const maquina = document.getElementById("maquina").value.split("|");
            const data = {
            fecha: document.getElementById("fecha").value,
            horaInicio: document.getElementById("horaInicio").value,
            horaFin: document.getElementById("horaFin").value,
            maquinaCodigo: maquina[0],
            maquinaNombre: maquina[1],
            tipoId: document.getElementById("tipoId").value,
            identificacion: document.getElementById("identificacion").value,
            descripcion: document.getElementById("descripcion").value
            };

            if (data.horaFin <= data.horaInicio) {
              throw new Error("La hora fin debe ser mayor que la hora inicio");
            }

            const res = await API.guardar(data);

            if (res.code !== 200) {
              throw new Error(res.message);
            }

            UI.mostrarMensaje("Registro guardado correctamente");
            UI.limpiarFormulario();

        } 
        catch (error) 
        {
          UI.mostrarMensaje(error.message, "danger");
        }finally
        {
          UI.ocultarCargando(); //SIEMPRE se ejecuta
        }

    });
});

