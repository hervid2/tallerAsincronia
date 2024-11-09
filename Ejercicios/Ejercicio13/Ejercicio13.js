function miPromesa() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Promesa resuelta!");
        resolve();
      }, 3000);
    });
  }
  
  miPromesa();