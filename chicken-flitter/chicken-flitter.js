(function () {
  'use strict';
  const chickenButton = document.getElementById('button');
  const resultArea = document.getElementById('result-area');
  const chbox = document.getElementById('chbox');

  chickenButton.onclick = function() {
    const header = document.createElement('h3');
    const result = boxCheck();
    header.innerText = result;
    resultArea.appendChild(header);
  };

  const answers = [
    'ジューシーさよりも見た目のゴツゴツ感を重視するタイプです。',
    '少なめの衣でジューシーさを楽しむタイプです。',
    'ガッつかずに上品にからあげを楽しめるタイプです。',
    '家庭的なからあげが好きなタイプです'
  ]

  function boxCheck() {
    var str = '';
    if(chbox.check1.checked) {
      if(str != '') {
        str = str + ',';
      }
      str += answers[0];
    } else if(chbox.check2.checked) {
      if(str != '') {
        str = str + ',';
      }
      str += answers[1];
    } else if(chbox.check3.checked) {
      if(str != '') {
        str = str + ',';
      }
      str += answers[2];
    } else if(chbox.check4.checked) {
      if(str != '') {
        str = str + ',';
      }
      str += answers[3];
    }
    return str;
  }

})();