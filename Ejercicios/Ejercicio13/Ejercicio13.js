function miPromesa() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Promise resuelta");
        resolve();
      }, 3000);
    });
  }
  
  miPromesa();