function checkMesPasado(mespasado){
  switch (mespasado) {
case "ENE":
mes_pasado="DIC";
break;
case "FEB":
mes_pasado="ENE";
break;
case "MAR":
mes_pasado="FEB";
break;
case "ABR":
mes_pasado="MAR";
break;
case "MAY":
mes_pasado="ABR";
break;
case "JUN":
mes_pasado="MAY";
break;
case "JUL":
mes_pasado="JUN";
break;
case "AGO":
mes_pasado="JUL";
break;
case "SEP":
mes_pasado="AGO";
break;
case "OCT":
mes_pasado="SEP";
break;
case "NOV":
mes_pasado="OCT";
break;
case "DIC":
mes_pasado="NOV";
break;
  }
  return mes_pasado;
}

checkMesPasado(mes_actual);