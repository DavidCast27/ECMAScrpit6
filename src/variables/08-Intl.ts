(() => {
//INTERNACIONALIZACION Y LOCALIZACION
    let lista = ['ä', 'a', 'z'];
    let l10nDE = new Intl.Collator('de');
    let l10nSV = new Intl.Collator('sv');
    console.log(l10nDE.compare('ä', 'z'));
    console.log(l10nSV.compare('ä', 'z'));
    //    console.log(lista.sort(l10nDE.compare)); 
    //    console.log(lista.sort(l10nDE.compare)); 

    let l10nEN = new Intl.NumberFormat('en-US');
    let l10nDE2 = new Intl.NumberFormat('de-DE');

    console.log(l10nEN.format(1234567.89));
    console.log(l10nDE2.format(1234567.89));

    let l10nUSD = new Intl.NumberFormat('en-US',{style:'currency', currency:'USD'});
    let l10nGBP = new Intl.NumberFormat('en-GB',{style:'currency', currency:'GBP'});
    let l10nEUR = new Intl.NumberFormat('de-DE',{style:'currency', currency:'EUR'});

    console.log(l10nUSD.format(1234567.89));
    console.log(l10nGBP.format(1234567.89));
    console.log(l10nEUR.format(1234567.89));

    let l10nMX = new Intl.DateTimeFormat('es-MX');
    let l10nEN2 = new Intl.DateTimeFormat('en-US');
    let l10nDE3 = new Intl.DateTimeFormat('de-DE');

    console.log(l10nMX.format(new Date('2020-12-3')));
    console.log(l10nEN2.format(new Date('2020-12-3')));
    console.log(l10nDE3.format(new Date('2020-12-3')));




})();

