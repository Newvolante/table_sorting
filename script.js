$(function() {
    console.log('Script linked correctly to web page');

    // an array of the rows present in the table
    let rows = $('tbody').find('tr').toArray();
    console.log(rows[0]);

    // click event on the column header
    $('tr').on('click', 'th', function() {
        console.log('clicked on the "' + $(this).data('sort') + '" header');

        $headerName = $(this).data('sort');
        // console.log($headerName);
        // console.log($(this).val());

        rows.sort( function(a, b) {
            a = $(a).find('td').eq(0).text();
            b = $(b).find('td').eq(0).text();

            console.log('a', a);
            console.log('b', b);

            if (a < b) {
                return -1;
            } else {
                return a > b ? 1 : 0;
            }
        });
        console.log(rows[0]);
        $('tbody').append(rows);

    })
});