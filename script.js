$(function() {
    console.log('Script linked correctly to web page');

    // an array of the rows present in the table
    let rows = $('tbody').find('tr').toArray();
    console.log(rows[0]);

    // click event on the column header
    $('tr').on('click', 'th', function() {

        $headerName = $(this).data('sort');
        // console.log($headerName);
        // console.log($(this).val());

        // calling sorting function from sortObject.js
        rows.sort(sortObject.name);

        // appends the sorted arrays of rows to the table body
        $('tbody').append(rows);

    })
});