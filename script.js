/*
    Assignment 05
    Name: Ruchita Patel
*/

$(document).ready(function () {

    class ContentItem {
        id;
        name;
        desc;
        genre;
    
        constructor(id, name, desc, genre) {
            this.id = id;
            this.name = name;
            this.desc = desc;
            this.genre = genre;
        }
    
        updateContentItem(id, name, desc, genre) {
            if((this.id == id) && (this.name != null) && (desc != null) && (genre != null)){
                this.name = name;
                this.desc = desc;
                this.genre = genre;
            }
        }
    
    
        toString(){
            $("#content-item-list").append("<div class='content-item-wrapper' id='content-item-"+ this.id +"'><h2>"+ this.name +"</h2><p>"+ this.desc +"</p><div>"+ this.genre +"</div></div>");
            
    
         }
    }


    let contentItemList = [
        new ContentItem(1,"Dilwale Dulhania Le Jayenge"," A timeless love story set in Europe, where a young couple fights for their love against traditional Indian values.","Romance"),

        new ContentItem(2,"Lagaan","A captivating epic about a village challenging British rulers to a cricket match to escape oppressive taxes.","Sports Drama"),

        new ContentItem(3,"PK","An alien's humorous quest for answers on Earth raises thought-provoking questions about religion and society.", "Comedy Drama"),

        new ContentItem(4,"Bajrangi Bhaijaan","A heartwarming journey of a man who helps a mute Pakistani girl reunite with her family in India, despite political tensions.", "Drama"),

        new ContentItem(5,"Baahubali: The Beginning","An epic tale of betrayal, valor, and revenge, as a young hero seeks to reclaim his kingdom from a tyrant.", "Epic Fantasy")
    ];

    for(let content in contentItemList) {
        contentItemList[content].toString();
    }

    $(".content-item-wrapper").css({"border" : "2px solid #cc1c0d", "width": "95%", "padding" : "10px", "margin-bottom" : "10px"});

});


