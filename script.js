$(function() {
    console.log('Script linked correctly to web page');

    // an array of the rows present in the table
    let $arrayOfRows = $('tbody').find('tr').toArray();
    console.log($arrayOfRows);

    $('th').on('click', function() {
        console.log('clicked on the "' + $(this).data('sort') + '" header');
    });
});