$(function() {
    console.log('Script linked correctly to web page');

    $('th').on('click', function() {
        console.log('clicked on the "' + $(this).data('sort') + '" header');
    });
});