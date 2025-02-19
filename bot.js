const axios = require('axios');

const keepServerAlive = () => {
  setInterval(() => {
    axios.get('https://colab.research.google.com/drive/1jxnXJIPDM5DRw6Le4Wd2TCsKfgNAhTjp?usp=sharing')  // Reemplaza con la URL de tu servidor de Aternos
      .then(response => {
        console.log("Solicitud exitosa, el servidor sigue activo.");
      })
      .catch(error => {
        console.error("Error al mantener el servidor activo:", error);
      });
  }, 5 * 60 * 1000);  // Enviar una solicitud cada 5 minutos
};

keepServerAlive();