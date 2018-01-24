function url(query, url, host) {
  const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  
  if(regex.test(url)) {
    return { "original_url": query + url, "short_url": "https://" + host };
  } else {
    return { "error": "URL invalid" }
  }
  
}

module.exports = url;