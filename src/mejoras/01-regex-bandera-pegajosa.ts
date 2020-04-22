
(() => {
  // prueba si soporta la bandera pegajosa y
    let sticky;
    try {
        RegExp('','y');
        sticky = true;
    } catch (error) {
        sticky = false;
    }
    console.log(sticky);

    const str = 'Primera linea\nSegunda linea';
    let regex = /(\S+) linea\n?/y
    let match = regex.exec(str);
    console.log(match);
    console.log(regex.lastIndex);

    let match2 = regex.exec(str);
    console.log(match2);
    console.log(regex.lastIndex);

    let match3 = regex.exec(str);
    console.log(match3);





})();





