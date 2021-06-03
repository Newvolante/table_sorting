$(function() {
    console.log('Script linked correctly to web page');

    // an array of the rows present in the table
    let rows = $('tbody').find('tr').toArray();
    console.log(rows[0]);

    // click event on the column header
    $('tr').on('click', 'th', function() {
        $headerName = $(this).data('sort');     // function name to call
        $columnIndex = $('th').index(this);     // column number
        
        console.log(`clicked on column ${$columnIndex}`);

        // calling sorting function from sortObject.js
        rows.sort(function(a, b) {
            a = $(a).find('td').eq($columnIndex).text();   // using jQ selector to use jQ methods
            b = $(b).find('td').eq($columnIndex).text();   // using jQ selector to use jQ methods

            return sortObject[$headerName](a, b);
        });

        // appends the sorted arrays of rows to the table body
        $('tbody').append(rows);

    })
});