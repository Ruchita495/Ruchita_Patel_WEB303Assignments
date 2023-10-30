/* Accordance */
$('.acc-label').on('click',function(e){
    e.preventDefault(); //prevent default function
    let $this = $(this);  //button that we are working for
    $('.acc-panel').each(function(){
        //make sure  that showing class is removed - no
        $this.removeClass('showing');

    })
    //showing the panel that is for the button that we calling
    
    $this.toggleClass('showing');
    $this.next().slideToggle();


    //hide other panel

    $('.acc-panel').not($this.next()).slideUp();
});

    
$('.tab-panel').hide();

$('#tab1').show(); //default tab 1 show
$('.tab-list li').on('click',function(e){
    e.preventDefault();
    //remove the active class
  $('.tab-list li').removeClass('active');
  //hide the panel
  $('.tab-panel').hide();

  //make li that is active
  $('.tab-panel').addClass('active');
    let panel=$(this).find('a').attr('href');
    $(panel).show();
    return false;
})

