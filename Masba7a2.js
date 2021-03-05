$(document).ready(function () {
    var total = localStorage.getItem("total");
    if (typeof total == undefined || total == null)
        total = 0;
    localStorage.setItem("total", total);
    $(".total-count").html(total);
});
var dataMasba7a = [{
        id: "1",
        name: "الحمدلله",
        count: 33
    },
    {
        id: "2",
        name: "الله أكبر",
        count: 33
    }, {
        id: "3",
        name: "سبحان الله",
        count: 33
    }
];
var indexMasba7aData = 0;

function increment() {
    // $('.count').html(function (i, val) {
    //     return val * 1 + 1
    // });
    var count = parseInt($('.count').text());
    if (count + 1 == dataMasba7a[indexMasba7aData]['count']) {
        $('.toast-container').fadeIn().delay(1000).fadeOut();
        count = 0;
        $('.toast-body span').text(dataMasba7a[indexMasba7aData]['name']);

        indexMasba7aData++;
        //check if done 
        if (indexMasba7aData == 3) {
            $('.congratulation').fadeIn();
            return;
        }
        $('.big-btn-txt').html('<span style=\'font-size:70px\'>' + dataMasba7a[indexMasba7aData]['name'] + '</span>');
    }


    count++;
    //update progress 
    var percentage = (count+1) * 100 / dataMasba7a[indexMasba7aData]['count'];
    $(".prog" + dataMasba7a[indexMasba7aData]['id']).attr("style", "width:" + percentage + "%;")
    $('.count').text(count);

    var total = localStorage.getItem("total");
    if (typeof total == undefined || total == null)
        total = 0;
    total++;
    localStorage.setItem("total", total);
    $(".total-count").html(total);
}
