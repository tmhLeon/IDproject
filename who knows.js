var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://vouchersystem-33fb.restdb.io/rest/voucher",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "<your CORS apikey here>",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });