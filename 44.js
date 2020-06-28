function p(x) {
    return x * (3 * x - 1) / 2;
  }
  
  function q(x) {
    return Math.sqrt(24 * x + 1) % 6 == 5;
  }
  
  ans = 0;
  for (var k = 1; ans == 0; k++) {
    var pk = p(k);
    for (var j = 1; j < k; j++) {
      var pj = p(j);
      if (q(pk - pj) && q(pk + pj)) {
        ans = pk - pj;
        break;
      }
    }
  }
  
  document.write('ANS: ', ans);