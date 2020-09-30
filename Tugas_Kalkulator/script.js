function tambah(){
    var bil1=parseFloat(document.calculator.bil1.value);
    var bil2=parseFloat(document.calculator.bil2.value);
    var hasil= bil1+bil2;
    document.calculator.hasil.value=hasil;
}

function kurang(){
    var bil1=parseFloat(document.calculator.bil1.value);
    var bil2=parseFloat(document.calculator.bil2.value);
    var hasil= bil1-bil2;
    document.calculator.hasil.value=hasil;
}

function kali(){
    var bil1=parseFloat(document.calculator.bil1.value);
    var bil2=parseFloat(document.calculator.bil2.value);
    var hasil= bil1*bil2;
    document.calculator.hasil.value=hasil;
}

function bagi(){
    var bil1=parseFloat(document.calculator.bil1.value);
    var bil2=parseFloat(document.calculator.bil2.value);
    var hasil= bil1/bil2;
    document.calculator.hasil.value=hasil;
}
