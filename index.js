function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('.ranked-list li');
  for(let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = (parseInt(ranked[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  let grandNode = document.querySelector('div#grand-node');
  let end = false;
  while(end === false) {
      if(grandNode.querySelector('div') !== null)
        grandNode = grandNode.querySelector('div')
      else {
        end = true;
      }
  }
  return grandNode;
}
