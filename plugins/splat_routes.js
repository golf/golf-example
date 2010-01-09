(function() {

  $.map($.golf.controller, function(v,k) {
    if (v.splat_route)
      v.route = "^" + $.map(v.splat_route.split(""), function(w,i) {
        return (w == "*" ? "([^/]*)" : (w.match(/[a-zA-Z1-9]/) ? w : "\\"+w));
      }).join("") + "$";
  });

})();
