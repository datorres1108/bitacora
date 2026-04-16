const API_URL = "https://script.google.com/macros/s/AKfycbxTtofOn8qh6eqx0pkk6-UmrlH8mOdG_wGTZbvBd1Q2FxvsQb2qAa7_KWIaY6NX4fWUcQ/exec";
const API = {
  async guardar(data) {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(data)
      });

      return await res.json();

    } catch (error) {
      throw new Error("Error de conexión con el servidor");
    }
  }

};