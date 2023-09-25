// WEB303 Assignment 2
var content = $('#content');

$('a[href="#"]').on('click',function(){
    var xhr = new XMLHttpRequest;
    console.log(xhr);

    var page = $(this).attr("id");
    xhr.open('GET',page+'.html',true);
    console.log(xhr);

    xhr.onload = function(){
        if(this.status === 200){
            var contentHTML = xhr.responseText;
            display(contentHTML);
        }
    }
    xhr.send();
})

function display(contentHTML){
    content.css('display','block');
    content.html(contentHTML);
}
