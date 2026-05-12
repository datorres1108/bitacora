const API_URL = "https://script.google.com/macros/s/AKfycbyBVDM-PcEUN3jMWH3uFf0Ei3b63oD-NOLn14md7FJmo4GqZvPQeuOzTq2smZG9hUaTvw/exec";
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