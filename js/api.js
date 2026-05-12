const API_URL = "https://script.google.com/macros/s/AKfycbwlwLV6EmTOou8XVlS4dZ2h34o2gtsbdn7a0GS7jwJ2HZjh_0OPvLc9KKgzgQSvczA-RA/exec";
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