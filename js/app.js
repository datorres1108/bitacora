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
            const data = {
            fecha: document.getElementById("fecha").value,
            tipoId: document.getElementById("tipoId").value,
            identificacion: document.getElementById("identificacion").value,
            descripcion: document.getElementById("descripcion").value
            };

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

