/*
   Returns the value selected in a single select
   list, where the list has the given id. If no
   single select element with the specified id is
   found, or if nothing is selected, this function
   returns null.
*/
function getListValue(id) {
   var listobj = document.getElementById(id);
   if (listobj == null) return null;
   if (listobj.type != 'select-one') return null;
   for (var i=0; i<listobj.options.length; i++) {
      if (listobj.options[i].selected) {
         return listobj.options[i].value;
      }
   }
   return null;
}

/*
   Returns an array of values in a multiple select
   list, where the list has the given id. If no
   multiple select element with the specified id is
   found, this function returns null. If no elements
   are selected, a zero-length array is returned.
*/
function getListValues(id) {
   var listobj = document.getElementById(id);
   var results = null;
   if (listobj != null && listobj.type == 'select-multiple') {
      results = new Array();
      for (var i=0; i<listobj.options.length; i++) {
         if (listobj.options[i].selected) {
            results.push(listobj.options[i].value);
         }
      }
   }
   return results;
}

/*
   Returns the value selected in a radio button group
   with the specified name. If no radio buttons have
   the specified name, or if none of the radio buttons
   with that name are selected, then null is returned.
   Otherwise, the value of the selected radio button is
   returned.
*/
function getRadioValue(nm) {
   var elems = document.getElementsByName(nm);
   for (var i=0; i<elems.length; i++) {
      if (elems[i].type=="radio" && elems[i].checked) {
         return elems[i].value;
      }
   }
   return null;
}
