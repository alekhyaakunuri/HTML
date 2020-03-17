function converter() {
    var amt = parseInt(document.getElementById("amount").value);
    var src = document.getElementById("p1").value;
    var trg = document.getElementById("p2").value;
    var result = 0;
    var currency = {
      USD: { CAD: 1.3443563815, INR: 72.228295527, JPY: 108.7364489387 },
      INR: { CAD: 0.0186126001, JPY: 1.5054550041, USD: 0.0138449896 },
      CAD: { CAD: 1.0, INR: 53.7270447923, USD: 0.7438503761 },
      JPY: { CAD: 0.0123634383, INR: 0.6642510054, USD: 0.0091965483 }
    };
    if (src == trg) {
      result = amt;
    } else {
      result = amt * currency[src][trg];
    }
    return alert(result);
  }
  
  