jQuery(document).ready(function(){  
  function {{uc_id}}_start(){
    
    function startBar(){
      
      var waypoints = jQuery('#{{uc_id}}').waypoint({
        handler: function(direction) {
              jQuery('.progress-all').asProgress({'namespace': 'progressnew'});
            jQuery('.progress-all').asProgress('start');
          },
          offset: "80%"
       });
    }
    
    function isElementInViewport(objElement) {
        var elementTop = objElement.offset().top;
        var elementBottom = elementTop + objElement.outerHeight();
        var viewportTop = jQuery(window).scrollTop();
        var viewportBottom = viewportTop + jQuery(window).height();
        return (elementBottom > viewportTop && elementTop < viewportBottom);
    }
  
    var objBar = jQuery("#{{uc_id}}");
    var isVisible = isElementInViewport(objBar);
    
    if(isVisible)
       startBar();
    else{
      jQuery(window).on("scroll",function(){
          var isInited = objBar.data("inited");
          if(isInited == true)
            return(true);
              
          var isVisible = isElementInViewport(objBar);
          if(isVisible){
            objBar.data("inited", true);
              startBar();
        }  
      });
    }
    
  }if(jQuery("#{{uc_id}}").length) {{uc_id}}_start(); else
    jQuery( document ).on( 'elementor/popup/show', () => { if(jQuery("#{{uc_id}}").length) {{uc_id}}_start();});
  });
    // Generate a random number between 1 and 100 for example
    //var randomAmount = Math.floor(Math.random() * 70) + 30;
      var randomAmount = Math.floor(Math.random() * 10) + 81; // 81% to 90%
  
    // Set the random number as the data-goal attribute
    jQuery(document).ready(function () {
      jQuery('#{{uc_id}} .progress-all').attr('data-goal', randomAmount);
    });