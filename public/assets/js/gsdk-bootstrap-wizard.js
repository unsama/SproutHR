searchVisible = 0;
transparent = true;
//count=0;
companyList = '';
someRandomInt = 2;
user_id = 0;
var selected = false;

$(document).ready(function(){
    $("#loaderDiv").hide();
    $('#password').bind("enterKey",function(e){
        $('#next').click();
    });
    $('#password').keyup(function(e){
        if(e.keyCode == 13)
        {
            $(this).trigger("enterKey");
        }
    });
    function showNotification(from, align, type,messageText){
        //type = ['','info','success','warning','danger','rose','primary'];

        //color = Math.floor((Math.random() * 6) + 1);

        $.notify({
            icon: "notifications",
            //message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
            message: messageText
        },{
            type: type,
            timer: 3000,
            placement: {
                from: from,
                align: align
            }
        });
    }

    //showNotification('top','right','danger');


    /*  Activate the tooltips      */
    $('[rel="tooltip"]').tooltip();

    // Code for the Validator
    var $validator = $('.wizard-card form').validate({
		  rules: {
             username: {
		      required: true,
		      email: true,
		      minlength: 3,
		    }
        }
	});


    $('input[name="finish"]').click(function(){
        databaseName = $('#companyListDiv').find('.active').attr("name");

        if(user_id == 0){
            showNotification('top','right','info',"Info: <b>No Company Regestered</b> - You are not regestered to any company.");
        }
        else if(selected==false){
            showNotification('top','right','rose',"Error: <b>No Company Selected</b> - Please select a company to log into.");
        }
        else{
            console.log(databaseName);
            $.ajax({
                async: false,
                type: "POST",
                dataType: "json",
                data: {db_name: databaseName},
                url: '/create-session',
                success: function(data){
                    if(!(data.length == 0)){
                        console.log(data);
                        window.location.href = "setting";
                    }
                    else{
                        showNotification('top','right','rose',"Error: <b>Session Can't be Started</b> - Report to administrator.");
                    }
                },
                error : function(xhr,err) {
                    console.log(xhr.status);
                    if(xhr.status == "401"){
                        return_val = false;
                        //console.log("invalid user_id or password");
                        showNotification('top','right','rose',"Error: <b>Access Denied</b>  Invalid username and password.");
                    }
                    else if (xhr.status == "500"){
                        return_val = false;
                        showNotification('top','right','primary',"Error: <b>500</b> - Database is Down.");
                        //console.log("Database is down!");
                    }
                    else{
                        return_val = false;
                        showNotification('top','right','warning',"Error: <b>Unidentified</b> - An unidentified error occured. We are looking into this.");
                        //console.log("Unidentified Error");
                        console.log("error is:" + err);
                    }
                }
            });

        }


        /*emailJson = $("#email").val();
        passwordJson = $("#pass").val();
        //databaseName = $('input[name=companyRadioBtn]:checked', '#companyListDiv').val();
        //databaseName = $('input[name=companyRadioBtn]:checked').val();
        //console.log(databaseName);
        console.log(passwordJson);
        databaseName = $('#companyListDiv').find('.active').attr("name");

        $.ajax({
            type: "POST",
            dataType: "json",
            data: {username: emailJson, password: passwordJson, database: databaseName},
            url: '/signin',
            success: function(data){
                window.location.href = "Setting";
            },
            error: function(error) {
                //window.location.replace(window.location.protocol + "//" + window.location.host + error.responseText);
                console.log(error.responseText);
            }
        });*/
    });



    // Wizard Initialization
  	$('.wizard-card').bootstrapWizard({
        'tabClass': 'nav nav-pills',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',

        onNext: function(tab, navigation, index) {

            $.ajaxSetup({
                headers: {"X-CSRF-Token": $("#_csrf").val()}
            });

            $("input[id=password]").rules("add", "required");
        	var $valid = $('.wizard-card form').valid();
			//console.log(count);

            if(!$valid) {
        		$validator.focusInvalid();
        		return false;
        	}
        	else{
                $("#content").addClass("blur");
                $("#loaderDiv").show();
                var return_val = false;
                emailJson = $("#email").val();
                passwordJson = $("#password").val();

                $.ajax({
                    async: true,
                    type: "POST",
                    dataType: "json",
                    data: {username : emailJson, password: passwordJson},
                    url: '/signin',
                    success: function(data){
                            user_id = data;
                            $.ajax({
                                async: true,
                                type: "POST",
                                dataType: "json",
                                data: {user_id: user_id},
                                url: '/get-companies',
                                success: function(data2){
                                    $("#content").removeClass("blur");
                                    $("#loaderDiv").hide();
                                    companyList=data2;
                                    if(!(companyList.length == 0)){
                                        showNotification('top','right','success',"Info: <b>Login Sucessful</b> - Select Company.");
                                        companyList.forEach(function(entry) {
                                            $('#companyListDiv').append('<div class="col-sm-4"><div class="choice" name="'+entry.database_name+'" data-toggle="wizard-radio"><input type="radio" id="companyRadioBtn" name="companyRadioBtn" ><div class="icon"><i class="" style="background-image:url("'+entry.company_image_url+'")"></i></div><h6>'+entry.company_name+' <br><small>'+entry.role+'</small></h6></div></div><script>radio();</script>');
                                        });
                                        $('.wizard-card').bootstrapWizard('show',1);
                                    }
                                    else{
                                        showNotification('top','right','info',"Info: <b>No Company Regestered</b> - You are not regestered to any company.");
                                    }

                                },/*
                                beforeSend: function(){
                                    $("content").addClass("blur");
                                    $("#loaderDiv").append('<div style="color: #ff9501" class="la-pacman la-3x"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div> <div class="loaderSubtext"> <h1>Please Wait. We are working on it.</h1> </div>');
                                    console.log("spiner started");
                                },
                                complete: function(){
                                    $("content").removeClass("blur");
                                    $("#loaderDiv").hide();
                                    console.log("spiner ended");
                                },*/
                                error : function(xhr,err) {
                                    console.log(xhr.status);
                                    $("#content").removeClass("blur");
                                    $("#loaderDiv").hide();
                                    if(xhr.status == "401"){
                                        return_val = false;
                                        //console.log("invalid user_id or password");
                                        showNotification('top','right','rose',"Error: <b>Access Denied</b>  Invalid username and password.");
                                    }
                                    else if (xhr.status == "500"){
                                        return_val = false;
                                        showNotification('top','right','primary',"Error: <b>500</b> - Database is Down.");
                                        //console.log("Database is down!");
                                    }
                                    else if (xhr.status == "403"){
                                        return_val = false;
                                        showNotification('top','right','info',"Error: <b>unauthorized</b> - CSRF failed. Please Refresh the page.");
                                        //console.log("Database is down!");
                                    }
                                    else{
                                        return_val = false;
                                        showNotification('top','right','warning',"Error: <b>Unidentified</b> - An unidentified error occured. We are looking into this.");
                                        //console.log("Unidentified Error");
                                        console.log(err);
                                    }
                                }
                            });

                        //return_val = true;
                    },

                    error : function(xhr) {
                        $("#content").removeClass("blur");
                        $("#loaderDiv").hide();
                        console.log(xhr.status);
                        if(xhr.status == "401"){
                            return_val = false;
                            //console.log("invalid user_id or password");
                            showNotification('top','right','rose',"Error: <b>Access Denied</b> - Invalid username and password.");
                        }
                        else if (xhr.status == "500"){
                            return_val = false;
                            //console.log("Database is down!");
                            showNotification('top','right','primary',"Error: <b>500</b> - Database is Down.");
                        }
                        else if (xhr.status == "403"){
                            return_val = false;
                            showNotification('top','right','info',"Error: <b>unauthorized</b> - CSRF failed. Please Refresh the page.");
                            //console.log("Database is down!");
                        }
                        else{
                            return_val = false;
                            //console.log("Unidentified Error");
                            showNotification('top','right','warning',"Error: <b>Unidentified</b> - An unidentified error occured. We are looking into this.");
                        }
                    }
                });
                return return_val;
            }


        	/*else{
	        	if(count == 0){
		        	emailJson = $("#email").val();
		        	//alert(emailJson);
					$.ajax({
					  type: "POST",
					  dataType: "json",
					  data: {email : emailJson},
					  url: '/login-user-meta',
					  success: function(data){
						  companyList=data;
						  count++;
						  console.log(companyList);

						  if(!(companyList.length == 0)){
							  counterForCompanyList = 0;
							   companyList.forEach(function(entry) {
								     $('#companyListDiv').append('<div class="col-sm-4"><div class="choice" name="'+companyList[counterForCompanyList][0].schema_name+'" data-toggle="wizard-radio"><input type="radio" id="companyRadioBtn" name="companyRadioBtn"><div class="icon"><i class="" style="background-image:url("'+companyList[counterForCompanyList][0].image_url+'")"></i></div><h6>'+companyList[counterForCompanyList][0].company_name+'</h6></div></div><script>radio();</script>');
								     counterForCompanyList++;
								});
						  }


						  						   console.log(companyList[0][0]);
						  $('.wizard-card').bootstrapWizard('next');
						  return;
					  }
					});
					return false;
	        	}

	        	count++;
	        	console.log(count);
        	}*/
        	return false;
        },
		onPrevious: function(tab, navigation, index) {
            $('#companyListDiv').empty();
	        return true;
        },
        onFinish: function(tab, navigation, index) {
            alert("aaa");
            return false;
        },

        onInit : function(tab, navigation, index){

          //check number of tabs and fill the entire row
          var $total = navigation.find('li').length;
          $width = 100/$total;
          var $wizard = navigation.closest('.wizard-card');

          $display_width = $(document).width();

          if($display_width < 600 && $total > 3){
              $width = 50;
          }

           navigation.find('li').css('width',$width + '%');
           $first_li = navigation.find('li:first-child a').html();
           $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
           $('.wizard-card .wizard-navigation').append($moving_div);
           refreshAnimation($wizard, index);
           $('.moving-tab').css('transition','transform 0s');
       },

        onTabClick : function(tab, navigation, index){
            var $valid = $('.wizard-card form').valid();

            if(!$valid){
                return false;
            } else {

                return false;
            }
        },

        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;

            var $wizard = navigation.closest('.wizard-card');

            // If it's the last tab then hide the last button and show the finish instead
            if($current >= $total) {
                $($wizard).find('.btn-next').hide();
                $($wizard).find('.btn-finish').show();
            } else {
                $($wizard).find('.btn-next').show();
                $($wizard).find('.btn-finish').hide();
            }

            button_text = navigation.find('li:nth-child(' + $current + ') a').html();

            setTimeout(function(){
                $('.moving-tab').text(button_text);
            }, 150);

            var checkbox = $('.footer-checkbox');

            if( !index == 0 ){
                $(checkbox).css({
                    'opacity':'0',
                    'visibility':'hidden',
                    'position':'absolute'
                });
            } else {
                $(checkbox).css({
                    'opacity':'1',
                    'visibility':'visible'
                });
            }

            refreshAnimation($wizard, index);
        }
  	});


    // Prepare the preview for profile picture
    $("#wizard-picture").change(function(){
        readURL(this);
    });

    $('[data-toggle="wizard-radio"]').click(function(){
        //console.log("selected");
        wizard = $(this).closest('.wizard-card');
        wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
        $(this).addClass('active');
        $(wizard).find('[type="radio"]').removeAttr('checked');
        $(this).find('[type="radio"]').attr('checked','true');
    });

    $('[data-toggle="wizard-checkbox"]').click(function(){
        if( $(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).find('[type="radio"]').removeAttr('checked');
        } else {
            $(this).addClass('active');
            $(this).find('[type="checkbox"]').attr('checked','true');
        }
    });

    $('.set-full-height').css('height', 'auto');

});



 //Function to show image before upload

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}



$(window).resize(function(){
    $('.wizard-card').each(function(){
        $wizard = $(this);
        index = $wizard.bootstrapWizard('currentIndex');
        refreshAnimation($wizard, index);

        $('.moving-tab').css({
            'transition': 'transform 0s'
        });
    });
});

function refreshAnimation($wizard, index){
    total_steps = $wizard.find('li').length;
    move_distance = $wizard.width() / total_steps;
    step_width = move_distance;
    move_distance *= index;

    $wizard.find('.moving-tab').css('width', step_width);
    $('.moving-tab').css({
        'transform':'translate3d(' + move_distance + 'px, 0, 0)',
        'transition': 'all 0.3s ease-out'

    });
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};

function radio(){
	$('[data-toggle="wizard-radio"]').click(function(){
        selected = true;
        wizard = $(this).closest('.wizard-card');
        wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
        $(this).addClass('active');
        $(wizard).find('[type="radio"]').removeAttr('checked');
        $(this).find('[type="radio"]').attr('checked','true');
    });
};

