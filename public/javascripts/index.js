var thirstyLottie = bodymovin.loadAnimation({
    container: document.getElementById('thirstyLottie'), 
    path: "77-im-thirsty.json", 
    renderer: 'svg',
    loop: true, 
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'none'
    }
  });  

  var motorcycleLottie = bodymovin.loadAnimation({
    container: document.getElementById('motorcycleLottie'), 
    path: "29-motorcycle.json", 
    renderer: 'svg',
    loop: true, 
    autoplay: false,
    rendererSettings: {
        preserveAspectRatio: 'none'
    }
  });  

  var successLottie = bodymovin.loadAnimation({
    container: document.getElementById('successLottie'), 
    path: "25016-confetti-falling.json", 
    renderer: 'svg',
    loop: true, 
    autoplay: false,
    rendererSettings: {
        preserveAspectRatio: 'none'
    }
  });  

  

  
  
  $(document).ready(function(){
    $('#motorcycleLottie').hide();
    

    $('#generate').click(function(){        
        $('#thirstyLottie').hide();
        motorcycleLottie.play();
        $('#motorcycleLottie').show();
        $('#response').addClass('invisible').removeClass('visible');
        $('#successLottie').hide();

        var jqxhr = $.ajax( "api/getRandomRecord" )
            .done(function(response) {
                $('#motorcycleLottie').hide();
                $('#response').addClass('visible').removeClass('invisible');
                successLottie.play();
                $('#successLottie').show();
                const profilePic =  response.selected.profilepic ? response.selected.profilepic :'https://cdn0.iconfinder.com/data/icons/streamline-emoji-1/48/222-man-gesturing-NO-1-512.png';
                imageLoad(profilePic , function(){
                    $('#profilePic').attr('src' , profilePic);
                    $('#ProfileName').text(response.selected.name);
                });                                                
            })
            .fail(function(jqXHR, textStatus) {
                $('#motorcycleLottie').hide();
                $('#response').show().addClass('visible').removeClass('invisible');;
                $('#response').text(jqXHR + textStatus);
            });
    });
    
  });

  function imageLoad(url, callback)
{
    var img=new Image();
    img.src=url;
    img.onload = callback;
}