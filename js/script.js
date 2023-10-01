$(document).ready(function(){
    displayAJAX();
});

function displayJSON(){
    $.getJSON("team.json",function(data){
        $.each(data.member,function(index,obj){
            $("#team").append("<h2>"+ obj.name + "</h2> <h5>" + obj.position + "</h5> <p>" + obj.bio + "</p>");
        });
    });
}

function displayAJAX(){
    $.ajax({
        type:"GET",
        url:"team.json",
        dataType:"Json",
        beforSend: function(){
            $("#team").append("<h3> Loading....</h3>");
        },

        success : function(data){
            setTimeout(function(){
                $("#team").empty();
                $.each(data.members,function(index,obj){
                    $("#team").append("<h2>" + obj.name + "</h2> <h5>" + obj.position + "</h5> <p>" + obj.bio + "</p>");
                });
            }, 3000);
        },

        error : function(){
            $("#team").append("<h3> Some error Occured... </h3>");
        }
    });
}