const puppeteer = require('puppeteer');

async function keepColabAlive() {
  const browser = await puppeteer.launch({
    headless: false, // Cambia a 'true' para ejecutar en modo sin cabeza
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.goto('https://colab.research.google.com/drive/1jxnXJIPDM5DRw6Le4Wd2TCsKfgNAhTjp?usp=sharing');

  // Mantener la página activa mediante desplazamiento
  setInterval(async () => {
    console.log("Simulando desplazamiento...");
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);  // Desplazar al final de la página
    });
  }, 60000);  // Desplazamiento cada minuto

  // Mantener el navegador abierto
  console.log("Colab está activo...");
}

keepColabAlive();