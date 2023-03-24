 function checkMesCompleto(monthAbbr){
 switch(monthAbbr) {
    case '01 ENE':
      monthName = '01 ENERO';
      break;
    case '02 FEB':
      monthName = '02 FEBRERO';
      break;
    case '03 MAR':
      monthName = '03 MARZO';
      break;
    case '04 ABR':
      monthName = '04 ABRIL';
      break;
    case '05 MAY':
      monthName = '05 MAYO';
      break;
    case '06 JUN':
      monthName = '06 JUNIO';
      break;
    case '07 JUL':
      monthName = '07 JULIO';
      break;
    case '08 AGO':
      monthName = '08 AGOSTO';
      break;
    case '09 SEP':
      monthName = '09 SEPTIEMBRE';
      break;
    case '10 OCT':
      monthName = '10 OCTUBRE';
      break;
    case '11 NOV':
      monthName = '11 NOVIEMBRE';
      break;
    case '12 DIC':
      monthName = '12 DICIEMBRE';
      break;
  }

  return monthName;
}


// Example usage
checkMesCompleto(mes_conciliar);