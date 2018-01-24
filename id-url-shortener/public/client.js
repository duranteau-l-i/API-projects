
function createLink(text) {

  const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);

  return text.replace(regex, "<a href='$1'>$1</a>");
}

let pre = document.querySelector("pre");

createLink(pre.innerHTML);
    