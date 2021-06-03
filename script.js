$(function() {
    console.log('Script linked correctly to web page');

    // an array of the rows present in the table
    let rows = $('tbody').find('tr').toArray();

    // click event on the column header
    $('tr').on('click', 'th', function() {

        if($(this).is('.ascending') || $(this).is('.descending')) {
            $(this).toggleClass('ascending descending');
            $('tbody').append(rows.reverse());
        } else {
            $(this).addClass('ascending');
                        
            $headerName = $(this).data('sort');     // function name to call
            $columnIndex = $('th').index(this);     // column number
            
            rows.sort(function(a, b) {
                a = $(a).find('td').eq($columnIndex).text();   // using jQ selector to use jQ methods
                b = $(b).find('td').eq($columnIndex).text();   // using jQ selector to use jQ methods
                
                return sortObject[$headerName](a, b);
            });        
            $('tbody').append(rows);    // appends the sorted arrays of rows to the table body
        }
        })
    });