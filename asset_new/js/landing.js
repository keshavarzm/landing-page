$(document).ready(function(){

	$('.navList li').click(function(){
		$('.navList li').removeClass('current');
		$(this).addClass('current');
	});
	//section2 click event
	$('#tBtn button').click(function(){
		var btnIdx = $(this).index() + 1;
		$('#tBtn button').removeClass('current');
		$(this).addClass('current');
		$('#section2 .secCon p').hide();
		$('#hCon' + btnIdx).show();
	});
	var agent = navigator.userAgent.toLowerCase();

	if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
			if(navigator.userAgent.match('CriOS') || navigator.userAgent.match('FxiOS')) {
				$('#browser_nm').text('This browser doesn’t support video conversation. To use roundee please try:');
			 	$('.unsupport , .ns').show();
			 	$('#browser_type').html('<a href="https://support.apple.com/downloads/safari">Safari</a> browser.');
				$('#startmeetingarea').hide();
			}
	} else if(navigator.userAgent.match(/Android/i)) {
				if(navigator.userAgent.indexOf('Chrome') <= -1) {
					$('#browser_nm').text('This browser doesn’t support video conversation. To use roundee please try:');
				 	$('.unsupport , .ns').show();
				 	$('#browser_type').html('<a href="https://www.google.com/chrome/">Chrome</a>');
					$('#startmeetingarea').hide();

				} else if(navigator.userAgent.indexOf('OPR') > -1) {
					$('#browser_nm').text('This browser doesn’t support video conversation. To use roundee please try:');
				 	$('.unsupport , .ns').show();
				 	$('#browser_type').html('<a href="https://www.google.com/chrome/">Chrome</a>');
					$('#startmeetingarea').hide();
				}
	} else if (agent.indexOf("chrome") != -1) {
				if(agent.indexOf("edge") !== -1){
		       $('#browser_nm').text('This browser(Edge) doesn’t support video conversation. To use roundee please try:');
					 $('.unsupport , .ns').show();
			 		 $('#startmeetingarea').hide();
		    }
	} else {
				if(!!window.MSInputMethodContext && !!document.documentMode) {  //IE 11
		      $('#browser_nm').text('This browser(IE) doesn’t support video conversation. To use roundee please try:');
					$('.unsupport , .ns').show();
					$('#startmeetingarea').hide();
		    }
	 }

	$('.faqList li').click(function(){
		var faqCls = $(this).attr('class');
		$('.faqList li').removeClass('on')
		$(this).addClass('on');
		if(faqCls == 'on'){
			$(this).removeClass('on');
		}
	});

	var winWidth = $(window).width();
	var boxHeight = $('.subBox').outerHeight();
	if(winWidth > 1530 && boxHeight < 503){
		$('.subBox').addClass('bxBg');
	} else {
		$('.subBox').removeClass('bxBg');
	}

});

function fnToggleMenu(){
	$('#m_lnb').toggleClass('mOpen');
}

function fnCpBtn(Idx){
	var copyText = document.getElementById(Idx);
	copyText.select();
	document.execCommand("copy");
	$('.cpc').show();
}


function fnToggleFeatures(){
	var btnTxt = $('#fBtn button').text();
	if(btnTxt == 'Show more +'){
		$('#fBtn button').text('Show less -');
		$('.flexColumnItem .fItem').show();
	} else {
		$('#fBtn button').text('Show more +');
		$('.flexColumnItem .fItem').hide();
		$('.flexColumnItem .fItem.first').show();
		var fTop = $('#Features').offset();
		$('html').animate({scrollTop : fTop.top} , 100);
	}
}

function fnReLoad(){
	//location.reload();
	//$('html').scrollTop(0);
	window.location.replace('/');
}

//-------------------------------------------------------------------
function checkEmailRegex_start(_email) {
    var result = false;
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if (regex.test(_email) === false) {
      result = false;
    } else {
      result = true;
    }
    return result;
}

function startmeeting() {
    var emailInput = $('#YE').val().trim();
    if (emailInput == '') {
				$('.emsg').show();
    } else {
        if (checkEmailRegex_start(emailInput)) {
						gtag_report_conversion();
						if(navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i)){
                 window.location.replace("https://roundee.io/mobile/sign-in?id=" + emailInput);
						} else {
								window.location.replace("https://roundee.io/openvc/sign-in?id=" + emailInput);
						}
        } else {
					$('.emsg').show();
        }
    }
}

function startmeeting_submit() {
		var emailInput = $('#YE').val().trim();
		if (emailInput == '') {
				$('.emsg').show();
		} else {
				if (checkEmailRegex_start(emailInput)) {
						gtag_report_conversion();
						if(navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i)){
								 window.location.replace("https://roundee.io/mobile/sign-in?id=" + emailInput);
						} else {
								window.location.replace("https://roundee.io/openvc/sign-in?id=" + emailInput);
						}
				} else {
					$('.emsg').show();
				}
			return false;
		}
}

function schedulebtn() {
  var emailInput = $('#YE').val().trim();
  if (emailInput == '') {
    	window.location.replace("./schedule-a-meeting");
  } else {
  	if (checkEmailRegex_start(emailInput)) {
      window.location.replace("./schedule-a-meeting?id=" + emailInput);
    } else {
      $('.emsg').show();
    }
  }
}

function getDevice() {
    var userAgent = navigator.userAgent;
    var device = '';
    if(userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i) ){
        if(userAgent.match(/iPhone|iPod/i)){
          device ='Mobile_iOS'
        } else {
          device ='Mobile_Android'
        }
    } else {
        if(userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR") !== -1){
            device ='PC_opera';
        }
        else if (userAgent.indexOf("Firefox") !== -1){
            device ='PC_firefox';
        }
        else if (userAgent.indexOf("Chrome") !== -1){
            device ='PC_chrome';
        }
        else if(userAgent.indexOf("Safari") !== -1){
            device ='PC_safari';
        }
    }
    return device;
}
//-------------------------------------------------------------------
//send feedback, feature, questions
function send_feedback() {
		var feedback_msg =  $('#feedback_txt').val().trim();
		if(feedback_msg == '') {
			$('.ms2').show();
			$('.ms3').hide();
			return;
		}

		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == XMLHttpRequest.DONE) {
				if (xmlhttp.status == 200) {
					$('#feedback_txt').val('');
					$('.ms2').hide();
					$('.ms3').show();
				} else if (xmlhttp.status == 400) {
						console.log('There was an error 400');
				} else {
						console.log('something else other than 200 was returned');
					}
			}
		};
		xmlhttp.open("POST", "https://www.roundee.io/landing/feedback", true);
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xmlhttp.send('fe_msg=' + feedback_msg);
}

function send_feature() {
		var feature_msg =  $('#feature_txt').val().trim();
		if(feature_msg == '') {
			$('.ms2').show();
			$('.ms3').hide();
			return;
		}

		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == XMLHttpRequest.DONE) {
				if (xmlhttp.status == 200) {
					$('#feature_txt').val('');
					$('.ms2').hide();
					$('.ms3').show();
				} else if (xmlhttp.status == 400) {
						console.log('There was an error 400');
				} else {
						console.log('something else other than 200 was returned');
					}
			}
		};
		xmlhttp.open("POST", "https://www.roundee.io/landing/feature", true);
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xmlhttp.send('fe_msg=' + feature_msg);
}

function send_question() {
	var u_email = $('#aEmail').val().trim();
	var u_question = $('#queText').val().trim();

	if (checkEmailRegex_start(u_email)) {
		if (u_question.length == 0) {
				$('.ms2').show();
				$('.ms3').hide();
				$('.ms1').hide();
		} else {
				$('.ms2').hide();
				$('.ms3').hide();
				$('.ms1').hide();

			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function () {
				if (xmlhttp.readyState == XMLHttpRequest.DONE) {
					if (xmlhttp.status == 200) {
							 $('#aEmail').val('');
							 $('#queText').val('');
							 $('.ms3').show();
					} else if (xmlhttp.status == 400) {
							console.log('There was an error 400');
					} else {
							console.log('something else other than 200 was returned');
						}
				}
			};
			xmlhttp.open("POST", "https://www.roundee.io/landing/faq", true);
			xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xmlhttp.send('qa_msg=' + u_question + "&qa_email=" + u_email);
		}
	} else {
		$('.ms2').hide();
		$('.ms3').hide();
		$('.ms1').show();
	}
}
//-------------------------------------------------------------------
//schedule scripts
function create_schedule() {

		var owner =  $( "#sEmail").val().trim();
		if (owner == '') {
			$('.emsg').show();
			return;
		}
		else {
			if (!checkEmailRegex_start(owner)) {
				$('.emsg').show();
				return;
			}
		}

    var ismobiletype = false;
    if($(window).width()< 769) {
      ismobiletype = true;
    }

    var selected_time='';

    if(!ismobiletype) {
      selected_time = document.getElementById('sel_time').innerHTML;
      if(selected_time=='0') {
				$('.msg').show();
				$('.msg').html('Please select a time for this meeting.');
        return;
      }
    } else {
				if(document.getElementById('date-and-time').value.trim()=='') {
					$('.mb_msgBox .msg').show();
					$('.mb_msgBox .msg').html('Please select a time for this meeting.');
					return;
				}
		}


    var tm = document.getElementById('time');
    for(var i=0;i<tm.length;i++) {
      var optiontext = tm.options[i].text;
      if(optiontext==selected_time) {
        selected_time = tm.options[i].value;
      }
    }

    var date_selected = document.getElementById('datepicker').value;
    if(ismobiletype) {
      var date_selected_str = document.getElementById('date-and-time').value;
      //var temp_dt =  new Date(document.getElementById('date-and-time').value);
      date_selected = moment(date_selected_str).format('MM')+'/' + moment(date_selected_str).format('DD') +'/' + moment(date_selected_str).format('YYYY');
    }
    var title =  document.getElementById('meetingtitle').value;
    if(!title) {
			title = owner.split('@')[0] +"'s meeting";
    }
    //var time =  $( "#time option:selected" ).val();
    //var time_str =  $( "#time option:selected" ).text();

    var time =  selected_time;

    if(ismobiletype) {
      var temp_str = document.getElementById('date-and-time').value;
      time = moment(temp_str).format('HH:mm');
      //time = document.getElementById('date-and-time').value;
    }
    var dur =  $( "#duration option:selected" ).val();

    var reminder = document.getElementById("reminder");
    //var time_zone =  $( "#set-time-zone option:selected" ).val();
    var time_offset = document.getElementById('sel_set-time-zone').innerHTML;
    if(ismobiletype) {
       time_offset = $( "#set-time-zone option:selected" ).text();
    }

    if(!dur) {
      dur = '15';
    }

    //var owner =  getQueryString('id');
    sessionStorage.setItem('date_selected', date_selected);
    sessionStorage.setItem('conf_title', title);
    sessionStorage.setItem('time', time);
    sessionStorage.setItem('dur', dur);
    sessionStorage.setItem('time_zone', time_offset);
    //sessionStorage.setItem('time_offset', time_offset.substring(1,10));

    var timeString = time + ':00';
    var dateObj = new Date(date_selected + ' ' + timeString);

    var selected_str = moment(dateObj).format('YYYY-MM-DDTHH:mm')+':00';

    if(ismobiletype) {
      dateObj = moment(document.getElementById('date-and-time').value).format('YYYY-MM-DDTHH:mm')+':00';
      selected_str = dateObj;
    }

    var nowdate = new Date(Date.parse(dateObj) + (1000*60*dur));


    var hour = nowdate.getHours();
    if(hour < 9) {
      hour = '0' + hour;
    }

    //var min = nowdate.getUTCMinutes();
    var min = nowdate.getMinutes();
    if(min < 9) {
      min = '0' + min;
    }

    if(ismobiletype) {
       var dt_str = document.getElementById('date-and-time').value;
       var date = moment(dt_str).add(dur, 'minutes');
       var my_end_dt = date.format('HH:mm');
       sessionStorage.setItem('end_date', my_end_dt);
    } else {
      sessionStorage.setItem('end_date', hour + ":"+ min);
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
            sessionStorage.setItem('conf_id', xmlhttp.response);
						window.location.replace("./conference-call-created");
        } else if (xmlhttp.status == 400) {

					if(!ismobiletype) {
							$('.msg').show();
 					 		$('.msg').html('You can only schedule a meeting more than 15 min from now.');
			    } else {
							$('.mb_msgBox .msg').show();
							$('.mb_msgBox .msg').html('You can only schedule a meeting more than 15 min from now.');
					}
        } else {
						if(!ismobiletype) {
								$('.msg').show();
	 					 		$('.msg').html('Can not create a meeting at this time.');
				    } else {
								$('.mb_msgBox .msg').show();
								$('.mb_msgBox .msg').html('Can not create a meeting at this time.');
						}
        }
      }
    };

    var dateObj_iso = '';
    if(ismobiletype) {
      var systemtimezone = getTimezoneOffset();
      var timezoneoffset = time_offset.substring(4,10).replace(':','');
      if(timezoneoffset==systemtimezone) {
          dateObj_iso = moment(document.getElementById('date-and-time').value).utc().format();
      }
      else {
          if(timezoneoffset.indexOf('+') !==-1) {
            var se_hour = timezoneoffset.substring(1,3);
            var se_min = timezoneoffset.substring(3,5);
            var sys_min = systemtimezone.substring(3,5);
            var dif = (systemtimezone - timezoneoffset) / 100;

            if(se_min=='30') {
              dif = dif - 0.2;
            }
            else if(se_min=='45') {    //Asia/Kathmandu
              dif = dif - 0.3;
            }

            if(sys_min=='30') {
              dif = dif + 0.2;
            }

            var m = moment(dateObj).add(dif,'hours');
            dateObj_iso = m.toISOString();
          } else {
            var se_hour = timezoneoffset.substring(1,3);
            var se_min = timezoneoffset.substring(3,5);
            var system_hour = systemtimezone.substring(1,3);
            var sys_min = systemtimezone.substring(3,5);
            var diff_btw = system_hour - se_hour;
            if(sys_min=='30') {
              diff_btw = diff_btw + 0.50;
            }

            if(se_min=='30') {
              diff_btw = diff_btw + 0.50;
            }
            //var dif = (systemtimezone - timezoneoffset) / 100;
            //var m = moment(dateObj).add(se_hour * 2 + diff_btw ,'hours');

            var m ='';
            if(timezoneoffset.substring(0,1) !== systemtimezone.substring(0,1)) {
              m = moment(dateObj).add(se_hour * 2 + diff_btw  ,'hours');
            } else {
              if(diff_btw<0) {
                diff_btw = Math.abs(diff_btw);
                m = moment(dateObj).add(diff_btw ,'hours');
              } else {
                diff_btw = Math.abs(diff_btw);
                m = moment(dateObj).subtract(diff_btw  ,'hours');
              }
            }

            dateObj_iso = m.toISOString();


          }
      }
      //dateObj_iso = moment(document.getElementById('date-and-time').value).utc().format();
    } else {
      var timezoneoffset = time_offset.substring(4,10).replace(':','');
      var systemtimezone = getTimezoneOffset();
      if(timezoneoffset==systemtimezone) {
        dateObj_iso = dateObj.toISOString();
      } else {
        //dateObj_iso = dateObj.toISOString();
        if(timezoneoffset.indexOf('+') !==-1) {
          var se_hour = timezoneoffset.substring(1,3);
          var se_min = timezoneoffset.substring(3,5);
          //var sys_hour = systemtimezone.substring(1,3);
          var sys_min = systemtimezone.substring(3,5);
          var dif = (systemtimezone - timezoneoffset) / 100;
          if(se_min=='30') {
            dif = dif - 0.2;
          }
          else if(se_min=='45') {    //Asia/Kathmandu
            dif = dif - 0.3;
          }

          if(sys_min=='30') {
            dif = dif + 0.2;
          }

          var m = moment(dateObj).add(dif,'hours');
          dateObj_iso = m.toISOString();
        } else {
          var se_hour = timezoneoffset.substring(1,3);
          var se_min = timezoneoffset.substring(3,5);
          var system_hour = systemtimezone.substring(1,3);
          var sys_min = systemtimezone.substring(3,5);
          var diff_btw = system_hour - se_hour;
          //var dif = (systemtimezone - timezoneoffset) / 100;
          if(sys_min=='30') {
            diff_btw = diff_btw + 0.50;
          }
          if(se_min=='30') {
            diff_btw = diff_btw + 0.50;
          }

          //var m = moment(dateObj).subtract(se_hour,'hours').add(dif, 'hours');
          //var m = moment(dateObj).add(se_hour * 2 + diff_btw ,'hours');
          var m ='';
          if(timezoneoffset.substring(0,1) !== systemtimezone.substring(0,1)) {
            m = moment(dateObj).add(se_hour * 2 + diff_btw  ,'hours');
          } else {
            if(diff_btw<0) {
              diff_btw = Math.abs(diff_btw);
              m = moment(dateObj).add(diff_btw ,'hours');
            } else {
              diff_btw = Math.abs(diff_btw);
              m = moment(dateObj).subtract(diff_btw  ,'hours');
            }
          }

          dateObj_iso = m.toISOString();
        }
      }
    }

    var device_type = getDevice();

    xmlhttp.open("POST", "https://www.roundee.io/landing/cr_schedule", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send('title=' + title + "&owner=" + owner + "&startdt=" + dateObj_iso + "&selected_time=" + selected_str +"&dur=" + dur + "&tzoffset=" + time_offset.substring(4,10) +"&tzname=" + time_offset.substring(12) +"&reminder=" + reminder.checked + "&device_type=" + device_type);
}

function edit_schedule() {

    var userAgent = navigator.userAgent;
    var ismobiletype = false;

    if($(window).width()< 769) {
      ismobiletype = true;
    }

    var selected_time='';

		if(!ismobiletype) {
      selected_time = document.getElementById('sel_time').innerHTML;
      if(selected_time=='0') {
				$('.msg').show();
				$('.msg').html('Please select a time for this meeting.');
        return;
      }
    } else {
				if(document.getElementById('date-and-time').value.trim()=='') {
					$('.mb_msgBox .msg').show();
					$('.mb_msgBox .msg').html('Please select a time for this meeting.');
					return;
				}
		}

    var tm= document.getElementById('time');
    for(var i=0;i<tm.length;i++) {
      var optiontext = tm.options[i].text;
      if(optiontext==selected_time) {
        selected_time = tm.options[i].value;
      }
    }

    var date_selected = document.getElementById('datepicker').value;

    if(ismobiletype) {
      var date_selected_str = document.getElementById('date-and-time').value;
      date_selected = moment(date_selected_str).format('MM')+'/' + moment(date_selected_str).format('DD') +'/' + moment(date_selected_str).format('YYYY');
    }

    var title =  document.getElementById('meetingtitle').value;
    if(!title) {
      title = getQueryString('id').split('@')[0] +"'s meeting";
    }

    var time = selected_time;

    if(ismobiletype) {
      var temp_str = document.getElementById('date-and-time').value;
      time = moment(temp_str).format('HH:mm');
    }

    var dur = document.getElementById('sel_duration').innerHTML.split(' min')[0];
    if(ismobiletype) {
      dur = $( "#duration option:selected" ).val();
    }

    var reminder = document.getElementById("reminder");

    var time_offset = document.getElementById('sel_set-time-zone').innerHTML;
    if(ismobiletype) {
       time_offset = $( "#set-time-zone option:selected" ).text();
    }

    if(!dur) {
      dur = '15';
    }

    var owner =  document.getElementById('uEmail').value;
    sessionStorage.setItem('date_selected', date_selected);
    sessionStorage.setItem('conf_title', title);
    sessionStorage.setItem('time', time);
    sessionStorage.setItem('dur', dur);
    sessionStorage.setItem('time_zone', time_offset);
    //sessionStorage.setItem('time_offset', time_offset.substring(1,10));

    var timeString = time + ':00';
    var dateObj = new Date(date_selected + ' ' + timeString);
    var selected_str = moment(dateObj).format('YYYY-MM-DDTHH:mm')+':00';

    var nowdate = new Date(Date.parse(dateObj) + (1000*60*dur));
    var hour = nowdate.getHours();
    if(hour < 9) {
      hour = '0' + hour;
    }

    //var min = nowdate.getUTCMinutes();
    var min = nowdate.getMinutes();
    if(min < 9) {
      min = '0' + min;
    }

    sessionStorage.setItem('end_date', hour + ":"+ min);
    var room_id =  getQueryString('room_id');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
            sessionStorage.setItem('conf_id', room_id);
            window.location.replace("./conference-call-updated");
        } else if (xmlhttp.status == 400) {
					if(!ismobiletype) {
							$('.msg').show();
 					 		$('.msg').html('You can only schedule a meeting more than 15 min from now.');
			    } else {
							$('.mb_msgBox .msg').show();
							$('.mb_msgBox .msg').html('You can only schedule a meeting more than 15 min from now.');
					}
        } else {
						if(!ismobiletype) {
								$('.msg').show();
	 					 		$('.msg').html('Can not create a meeting at this time.');
				    } else {
								$('.mb_msgBox .msg').show();
								$('.mb_msgBox .msg').html('Can not create a meeting at this time.');
						}
        }
      }
    };

    var dateObj_iso = '';
    if(ismobiletype) {
      //dateObj_iso = moment(document.getElementById('date-and-time').value).utc().format();

      var systemtimezone = getTimezoneOffset();
      var timezoneoffset = time_offset.substring(4,10).replace(':','');
      if(timezoneoffset==systemtimezone) {
          dateObj_iso = moment(document.getElementById('date-and-time').value).utc().format();
      }
      else {
          if(timezoneoffset.indexOf('+') !==-1) {
            var se_hour = timezoneoffset.substring(1,3);
            var se_min = timezoneoffset.substring(3,5);
            var sys_min = systemtimezone.substring(3,5);
            var dif = (systemtimezone - timezoneoffset) / 100;

            if(se_min=='30') {
              dif = dif - 0.2;
            }
            else if(se_min=='45') {    //Asia/Kathmandu
              dif = dif - 0.3;
            }

            if(sys_min=='30') {
              dif = dif + 0.2;
            }

            var m = moment(dateObj).add(dif,'hours');
            dateObj_iso = m.toISOString();
          } else {
            var se_hour = timezoneoffset.substring(1,3);
            var se_min = timezoneoffset.substring(3,5);
            var system_hour = systemtimezone.substring(1,3);
            var sys_min = systemtimezone.substring(3,5);
            var diff_btw = system_hour - se_hour;
            if(sys_min=='30') {
              diff_btw = diff_btw + 0.50;
            }

            if(se_min=='30') {
              diff_btw = diff_btw + 0.50;
            }

            var dif = (systemtimezone - timezoneoffset) / 100;
            //var m = moment(dateObj).add(se_hour * 2 + diff_btw ,'hours');

            var m ='';
            if(timezoneoffset.substring(0,1) !== systemtimezone.substring(0,1)) {
              m = moment(dateObj).add(se_hour * 2 + diff_btw  ,'hours');
            } else {
              if(diff_btw<0) {
                diff_btw = Math.abs(diff_btw);
                m = moment(dateObj).add(diff_btw ,'hours');
              } else {
                diff_btw = Math.abs(diff_btw);
                m = moment(dateObj).subtract(diff_btw  ,'hours');
              }
            }
            dateObj_iso = m.toISOString();
          }
      }


    } else {
      //dateObj_iso = dateObj.toISOString();
      var timezoneoffset = time_offset.substring(4,10).replace(':','');
      var systemtimezone = getTimezoneOffset();
      if(timezoneoffset==systemtimezone) {
        dateObj_iso = dateObj.toISOString();
      } else {
        dateObj_iso = dateObj.toISOString();
        if(timezoneoffset.indexOf('+') !==-1) {
          var se_hour = timezoneoffset.substring(1,3);
          var se_min = timezoneoffset.substring(3,5);
          var sys_min = systemtimezone.substring(3,5);
          var dif = (systemtimezone - timezoneoffset) / 100;
          if(se_min=='30') {
            dif = dif - 0.2;
          }
          else if(se_min=='45') {    //Asia/Kathmandu
            dif = dif - 0.3;
          }

          if(sys_min=='30') {
            dif = dif + 0.2;
          }
          var m = moment(dateObj).add(dif,'hours');
          dateObj_iso = m.toISOString();
        } else {
          var se_hour = timezoneoffset.substring(1,3);
          var se_min = timezoneoffset.substring(3,5);
          var system_hour = systemtimezone.substring(1,3);
          var sys_min = systemtimezone.substring(3,5);
          var diff_btw = system_hour - se_hour;
          var dif = (systemtimezone - timezoneoffset) / 100;
          if(sys_min=='30') {
            diff_btw = diff_btw + 0.50;
          }

          if(se_min=='30') {
            diff_btw = diff_btw + 0.50;
          }

          //var m = moment(dateObj).subtract(se_hour,'hours').add(dif, 'hours');
          //var m = moment(dateObj).add(se_hour * 2 + diff_btw ,'hours');

          var m ='';
          if(timezoneoffset.substring(0,1) !== systemtimezone.substring(0,1)) {
            m = moment(dateObj).add(se_hour * 2 + diff_btw  ,'hours');
          } else {
            if(diff_btw<0) {
              diff_btw = Math.abs(diff_btw);
              m = moment(dateObj).add(diff_btw ,'hours');
            } else {
              diff_btw = Math.abs(diff_btw);
              m = moment(dateObj).subtract(diff_btw  ,'hours');
            }
          }

          dateObj_iso = m.toISOString();
        }
      }
    }

    xmlhttp.open("POST", "https://www.roundee.io/landing/mod_schedule", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send('title=' + title + "&owner=" + owner + "&room_id=" + room_id + "&startdt=" + dateObj_iso + "&selected_time=" + selected_str +"&dur=" + dur +"&tzoffset=" + time_offset.substring(4,10) +"&tzname=" + time_offset.substring(12) +"&reminder=" + reminder.checked);
}

function cancel_meeting() {
  console.log(getQueryString('room_id') + '   ' + getQueryString('id'));

  if(getQueryString('room_id')) {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
          if (xmlhttp.status == 200) {
              window.location.replace("./meeting-canceled");
          } else if (xmlhttp.status == 400) {
            console.log('delete: 400');
            window.location.replace("./noteditcancel");
          } else {
            console.log('delete: Not done');
            window.location.replace("./noteditcancel");
            }
        }
      };

      xmlhttp.open("POST", "https://www.roundee.io/landing/del_schedule", true);
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlhttp.send('room_id=' + getQueryString('room_id') + '&owner=' +  getQueryString('id'));
  }
}

function changemobiledt() {
  var dt = document.getElementById('date-and-time').value;
  if(dt) {
      var weekName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var monthName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var starttime = new Date(dt);
      var returnvalue = moment(dt).format('dddd')+", "+moment(dt).format('MMMM') +" "+moment(dt).format('DD') + " " + moment(dt).format('YYYY');
      sessionStorage.setItem('select_dt', returnvalue);
      document.getElementById('selecteddate').innerHTML = returnvalue;
  }
}

function getTimezoneOffset() {
	function z(n){return (n<10? '0' : '') + n}
	var offset = new Date().getTimezoneOffset();
	var sign = offset < 0? '+' : '-';
	offset = Math.abs(offset);
	return sign + z(offset/60 | 0) + z(offset%60);
}

//---------------------------------------------------------------------
//Global functions
function CopyToClipboard_inputtext(Idx){
	var copyText = document.getElementById(Idx);
	copyText.select();
	document.execCommand("copy");
	$('.cpc').show();

	iosCopyToClipboard(copyText)
}

function iosCopyToClipboard(el) {
		var oldContentEditable = el.contentEditable,
				oldReadOnly = el.readOnly,
				range = document.createRange();
		el.contenteditable = true;
		el.readonly = false;
		range.selectNodeContents(el);
		var s = window.getSelection();
		s.removeAllRanges();
		s.addRange(range);
		el.setSelectionRange(0, 999999);
		el.contentEditable = oldContentEditable;
		el.readOnly = oldReadOnly;
		document.execCommand('copy');
}

function CopyToClipboard(containerid) {
	var el = document.getElementById(containerid);
	var range = document.createRange();
	range.selectNodeContents(el);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
	document.execCommand('copy');
	$('.cpc').show();
}

function getQueryString(field, url) {
		var href = url ? url : window.location.href;
		var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
		var string = reg.exec(href);
		return string ? string[1] : null;
}

$(window).resize(function(){
	var winWidth = $(window).width();
	var boxHeight = $('.subBox').outerHeight();
	if(winWidth > 1530 && boxHeight < 503){
		$('.subBox').addClass('bxBg');
	} else {
		$('.subBox').removeClass('bxBg');
	}
});

//--------------------------------------------------------------
//google Convertion traker
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-781194399/YMpJCL3fzIwBEJ-pwPQC',
      'event_callback': callback
  });
  return false;
}
