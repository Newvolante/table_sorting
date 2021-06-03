$(function() {
    console.log('Script linked correctly to web page');

    // an array of the rows present in the table
    let rows = $('tbody').find('tr').toArray();
    console.log(rows[0]);

    // click event on the column header
    $('tr').on('click', 'th', function() {

        $(this).siblings().removeClass('sorted');

        if($(this).hasClass('sorted')) {
            rows.reverse();
        }
        
        // calling sorting function from sortObject.js
        if(!$(this).hasClass('sorted')) {
            $headerName = $(this).data('sort');     // function name to call
            $columnIndex = $('th').index(this);     // column number

            rows.sort(function(a, b) {
                a = $(a).find('td').eq($columnIndex).text();   // using jQ selector to use jQ methods
                b = $(b).find('td').eq($columnIndex).text();   // using jQ selector to use jQ methods
                
                return sortObject[$headerName](a, b);
            });        
            
            $(this).addClass('sorted');
        }        
        $('tbody').append(rows);    // appends the sorted arrays of rows to the table body
    })
});