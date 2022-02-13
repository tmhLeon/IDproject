const canvas = document.getElementById('garfield');
const ctx = canvas.getContext('2d');

let garfield = drawImg(300, canvas.height - 50, 250, "images/garfield_close.png");
let food = drawImg(canvas.width - 100, canvas.height - 50, 150, "images/food.png");

function drawImg(x, y, width, src) {
    ctx.beginPath();
    var img = new Image();

    img.onload = function () {
        let hightToWidthRatio = this.height / this.width;

        let imgWidth = width;
        let imgHeight = imgWidth * hightToWidthRatio;

        ctx.drawImage(img, x - imgWidth, y - imgHeight, imgWidth, imgHeight);
    };

    img.src = src;
    ctx.beginPath();
    return img;
}

function feedGarfield() {
    addVoucher(1);
    
    $("#feed").attr("disabled", true);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    garfield.src = "images/garfield_open.png";
    setTimeout(
        function () {
            food = drawImg(300, canvas.height - 180, 150, "images/food.png");

            setTimeout(
                function () {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    garfield.src = "images/garfield_close.png";
                    // $("#feed").attr("disabled", false);

                    ctx.fillStyle = 'black';
                    ctx.font = '24px arial';
                    ctx.fillText('You have received $1 voucher!', canvas.width/2 - 150, canvas.height - 20);
                }, 150);
        }, 500);

}

function addVoucher(voucherAmt) {

    if (sessionStorage.getItem("voucheramt") == null)
    {
        sessionStorage.setItem("voucheramt", 1);
    }
    console.log(sessionStorage);

    // let jsondata = {
    //     "voucheramt": voucherAmt
    // }
    
    // let post_settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://vouchersystem-33fb.restdb.io/rest/voucher",
    //     "method": "POST",
    //     "headers": {
    //       "content-type": "application/json",
    //       "x-apikey": "61ffd9406a79155501021857",
    //       "cache-control": "no-cache"
    //     },
    //     "processData": false,
    //     "data": JSON.stringify(jsondata),
    // }
    
    // $.ajax(post_settings).done(function (response) {
    //     console.log("Successfully posted data");
    
    //     // Get data from rest db
    
    //     let settings = {
    //         "async": true,
    //         "crossDomain": true,
    //         "url": "https://vouchersystem-33fb.restdb.io/rest/voucher",
    //         "method": "GET",
    //         "headers": {
    //         "content-type": "application/json",
    //         "x-apikey": "61ffd9406a79155501021857",
    //         "cache-control": "no-cache"
    //         },
    //     }
    
    //     $.ajax(settings).done(function (response) {
    //         response.forEach(user => {
    //             console.log(user._id + " " + user.voucheramt);
    //         });
    //     });
    // });
    
 }
