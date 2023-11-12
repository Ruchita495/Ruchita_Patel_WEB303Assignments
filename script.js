
let $table = $('<table/>');

$('body').append($table);

$('table').before('<h1/>');
$('h1').text('Ruchita Patel Doraemon');

$('table').append('<thead/>');
$('table').append('<tbody/>');
$('table').addClass('tbl');

let $headingRow = $('<tr/>').addClass('headingRow');

$('thead').append($headingRow);
$headingRow.append($('<td/>').text('First Name'));
$headingRow.append($('<td/>').text('Last Name'));
$headingRow.append($('<td/>').text('Status'));
$headingRow.append($('<td/>').text('Species'));
$headingRow.append($('<td/>').text('Gender'));

$('h1').after('<input/>');
$('input').attr('id', 'search');

$('table').after('<button id="lastname"> A-M (5) </button>')
$('button').after('<button id="lstname"> N-Z (2) </button>')

$.ajax({
    type: "get",
    url: "character.json",
    error: function(){
        $('.tbl').empty().append('<h1> Content can not be retrieved</h1>');
    },
    success: function(response){
     
        $.each(response, function(index, value){
            
            let $row = $('<tr/>').addClass('row');
            $row.append($('<td id="finame"></td>').text(value.fname));
            $row.append($('<td></td>').text(value.lname));
            $row.append($('<td> </td>').text(value.status));
            $row.append($('<td></td>').text(value.species));
            $row.append($('<td></td>').text(value.gender));

            $('tbody').append($row);
        });

        let $finames = $('tbody #finame');
        let $search = $('#search');
        let char = [];
        let trr = $('tr');

        $finames.each(function(){
            char.push({
                element: this,
                text: this.textContent.trim().toLowerCase()
            });
        });
        console.log(char);
        function searchFname(){
            let query = this.value.trim().toLowerCase();
            char.forEach(function(finame){
                let index=0;
                if(query){
                    index = finame.text.indexOf(query);
                }
                finame.element.style.background = index === -1 ? 'darkgreen' : 'black';
                finame.element.style.color = index === -1 ? 'black' : 'white';
                if($(search).val() == " "){
                    finame.element.style.color = 'blue';
                    finame.element.style.background = 'darkgreen'
                }
            });
        }
       if('oninput' in $search[0]){
           $search.on('input', searchFname);
        }else{
            $search.on('input', searchFname);
        }
        $('#lastname').on('click', function(){
         
                $('tbody tr').find(('td:nth-child(2)')).filter(function(){
                               
                    if($(this).text() === "Dora"){
                    
                     $(this).parent().show();
                    }else if ($(this).text() === "Gouda"){
                        $(this).parent().show();
                    }else if ($(this).text() === "Honekawa"){
                        $(this).parent().show();
                    }
                    else if ($(this).text() === "Minamoto"){
                        $(this).parent().show();
                    }
                    else{
                        $(this).parent().hide();                      
                    }                   
                })            
        });
        $('#lstname').on('click', function(){         
            $('tbody tr').find(('td:nth-child(2)')).filter(function(){           
                if($(this).text() === "Nobi"){
                
                 $(this).parent().show();
                }else{
                    $(this).parent().hide();                  
                }              
            })       
    });
    }
})
