function diff_minutes(d1, d2) {
    var diff = d2 - d1;
    var diffInHours = diff/1000/60/60;
    return Math.abs(diffInHours); }

    d01= new Date("May 18, 2020 17:30:00");   d1 = d01.getTime();//d1 = new Date(2020,05,18);
    d11 = d01.getHours();  d11m= d01.getMinutes();
    // Military Add 2 hrs  5-17
    
    d02= new Date("May 18, 2020 19:45:00");   d2= d02.getTime();//d2 = new Date(2020,05,19);
    d22= d02.getHours();   d22m= d02.getMinutes();

//console.log( "from ("+d11+":"+d11m+") "+"to ("+d22+":"+d22m+") "+"total ("+diff_minutes(d1, d2)+")");
// afternoon
console.log( "from ("+(d11-12)+":"+d11m+") "+"to ("+(d22-12)+":"+d22m+") "+"total ("+diff_minutes(d1, d2)+")");
/*  01 p.m. 1300  
    02 p.m. 1400
    03 p.m. 1500
    04 p.m. 1600
    05 p.m. 1700
    06 p.m. 1800
    07 p.m. 1900
    08 p.m. 2000
    09 p.m. 2100
    10 p.m. 2200
    11 p.m. 2300
    12 p.m. 2400    */
