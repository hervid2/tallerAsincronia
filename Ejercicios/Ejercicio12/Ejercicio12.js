
function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  delay(3000).then(() => alert("se ejecuta después de 3 segundos"));