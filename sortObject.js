let sortObject = {
    name: function(a, b) {
        a = $(a).find('td').eq(0).text();   // using jQ selector to use jQ methods
        b = $(b).find('td').eq(0).text();   // using jQ selector to use jQ methods

        if (a < b) {
            return -1;
        } else {
            return a > b ? 1 : 0;
        }
    },
    duration: function () {

    },
    date: function() {
        
    }
}