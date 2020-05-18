function diff_minutes(d1, d2) {

    var diff = d2 - d1;
    var diffInHours = diff/1000/60/60;
    return Math.abs(diffInHours);
  }

    d01= new Date("May 18, 2020 09:11:00"); //d1 = new Date(2020,05,18);
    d1 = d01.getTime();
    d11 = d01.getHours(); d11m= d01.getMinutes();

    d02= new Date("May 20, 2020 16:11:00"); //d2 = new Date(2020,05,19);
    d2= d02.getTime();
    d22= d02.getHours(); d22m= d02.getMinutes();

console.log( "From ("+d11+":"+d11m+") "+"to ("+d22+":"+d22m+") "+"Total ("+diff_minutes(d1, d2)+")");
