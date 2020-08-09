Date.prototype.format = function(dateStr) {
    var month = [ "January", "February", "March", "April",
        "May", "June", "July", "August", "September",
        "October", "November", "December"];
    var shortMonth = [ "Jan", "Feb", "Mar", "Apr", "May",
        "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var day = [ "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday" ];
    var shortDay = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
    var suffix = [ "st", "nd", "rd", "th", "th", "th", "th", 
        "th", "th", "th", "th", "th", "th", "th", "th", "th", 
        "th", "th", "th", "th", "st", "nd", "rd", "th", "th",
        "th", "th", "th", "th", "th", "st" ];
    var _hour = this.getHours();
    var _minute = this.getMinutes();
    var _second = this.getSeconds();
    var _day = this.getDay();
    var _month = this.getMonth();
    var _year = this.getFullYear();
    var _dom = this.getDate();
    var _ampm = _hour < 12 ? "AM" : "PM";
    var _hour12 = _hour == 0 ? 12 : _hour > 12 ? _hour - 12 : _hour;
    
    
    function padleft(ch, n, str) {
        str = "" + str;
        if (str.length > 2 || ch.length > 1) return str;
        while (str.length < 2) str = ch + str;
        return str;
    }
    
    var s = dateStr.
        replace("%a", shortDay[_day]).
        replace("%A", day[_day]).
        replace("%b", shortMonth[_month]).
        replace("%B", month[_month]).
        replace("%C", Math.floor(_year / 100)).
        replace("%d", padleft("0", 2, _dom)).
        replace("%D", padleft("0", 2, _month+1) + "/" + padleft("0", 2, _dom) + "/" + padleft("0", 2, Math.floor(_year % 100))).
        replace("%e", padleft(" ", 2, _dom)).
        replace("%F", _year + "-" + padleft("0", 2, _month+1) + "-" + padleft("0", 2, _dom)).
        replace("%h", shortMonth[_month]).
        replace("%H", padleft("0", 2, _hour)).
        replace("%I", padleft("0", 2, _hour12)).
        replace("%k", _hour).
        replace("%l", _hour12).
        replace("%m", padleft("0", 2, _month+1)).
        replace("%M", padleft("0", 2, _minute)).
        replace("%n", "\n").
        replace("%p", _ampm).
        replace("%P", _ampm.toLowerCase()).
        replace("%r", padleft("0", 2, _hour12) + ":" + padleft("0", 2, _minute) + ":" + padleft("0", 2, _second) + " " + _ampm).
        replace("%R", padleft("0", 2, _hour) + ":" + padleft("0", 2, _minute)).
        replace("%S", padleft("0", 2, _second)).
        replace("%t", "\t").
        replace("%T", padleft("0", 2, _hour) + ":" + padleft("0", 2, _minute) + ":" + padleft("0", 2, _second)).
        replace("%w", _day).
        replace("%x", padleft("0", 2, _month+1) + "/" + padleft("0", 2, _dom) + "/" + padleft("0", 2, _year % 100)).
        replace("%X", padleft("0", 2, _hour) + ":" + padleft("0", 2, _minute) + ":" + padleft("0", 2, _second)).
        replace("%y", padleft("0", 2, _year % 100)).
        replace("%Y", _year).
        replace("%$", suffix[this.getDate()-1]).
        replace("%%", "%");
    return s;
}
