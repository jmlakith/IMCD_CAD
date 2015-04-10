<?php session_start();  ?>
<!DOCTYPE html>
<html>

<!-- Mirrored from wolfadmin.herokuapp.com/1.1/features/signin by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 14 May 2014 02:33:10 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
<head>
  <meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />	
	<title>Colour a Dream</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  	
  <link data-turbolinks-track="true" href="../../assets/application-b9abcf044a0bc3e705568d103eddd00e.css" media="all" rel="stylesheet" />
  <script data-turbolinks-track="true" src="../../assets/application-c19ca191fe14a22b6c3ee53ac5b340a6.js"></script>
  <meta content="authenticity_token" name="csrf-param" />
<meta content="OszadhPDbPaLmettDOd3kDnS+XRVU5SVqyjBoVc8Tr8=" name="csrf-token" />

  <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  
  
    <style>			
        .panel
        {
            padding:5px;
            text-align:center;
            background-color:#e5eecc;
            border:solid 1px #c3c3c3;
            padding:20px;
            display:none;
            height: 5px;
            background-color: #FF4D4D;
            font-weight: bolder;
            color:white;
        }

    </style>

  <?php include("../../Common/alertify.php"); ?>
</head>

<body id="signin">


    <div id="panel1" class="panel">Wrong Password, Login Unsuccess </div>
    <div id="panel2" class="panel">Wrong username , Login unsuccessful </div>
	<div class="bg clear">
		

		<a href="../../1.html" class="logo">
			<i class="brankic-pen"></i>
		</a>

		<h3>Welcome back to Colour a Dream</h3>

		<div class="content">
			<form>
				<div class="fields">
					<strong>Email</strong>
					<input class="form-control" type="text" id="uname" placeholder="Your Email" />
				</div>
				<div class="fields">
					<strong>Password</strong>
					<input class="form-control" type="password" id="pword" placeholder="Password" />
				</div>
				<div class="info">
					<label>
						<input type="checkbox" name="remember" checked />
						Remember me
					</label>
				</div>
				<div class="actions">
					<a href="#" class="btn btn-primary btn-lg" id="check">Sign in to your account</a>
				</div>
			</form>
		</div>

		<div class="bottom-wrapper">
			<div class="message">
				<span>Don't have an account?</span>
				<a href="signup.html">Sign up here</a>.
			</div>
		</div>
	</div>
	
	
	
	  <!--  Form Related -->
    <script src="../../Common/js/icheck.js"></script> <!-- Custom Checkbox + Radio -->

    <!-- All JS functions -->
    <script src="../../Common/js/functions.js"></script>

	<script type="text/javascript">
		$(function () {
			var $switcher = $(".signup-switcher a");
			$switcher.click(function (e) {
				e.preventDefault();
				$switcher.removeClass("active");
				$(this).addClass("active");
				$(".bg").attr("class", "bg " + $(this).data("class"));
			});
		});
	</script>
	
	
	
	
	<script>


        $(document).ready(function() {

            $("#uname,#pword").keyup(function(event) {
                if (event.keyCode == 13) {
                    $("#check").click();
                }
            });


            $('#check').click(function() {
			

                var uname = $('#uname').val();
                var pword = $('#pword').val();

                //send a POST request to the loginControl.php;
                $.post("../Controller/loginControl.php", {login: 'data', uname: uname, pword: pword}, function(delMsg) {

                    //display errors according the returning JSON array values;
                    if (delMsg.msgType === 1) {

                        if (delMsg.level === "ADMIN") {
                            window.location.replace("../../Dashboard/View/dashboard.php");

                        } else if (delMsg.level === "CAD") {
                            window.location.replace("../../Register/View/slipUpload.php");
                        } else if (delMsg.level === "DONNER") {
                            window.location.replace("../../Dashboard/View/dashboard.php");
                        }

                        //Re direct to index;

                    } else if (delMsg.msgType === 2) {

                        //Error panel shows;
                        $("#panel1").slideDown("slow");
                        clear();



                    } else if (delMsg.msgType === 3) {

                        $("#panel2").slideDown("slow");
                        clear();
                    }


                }, "json");


            });

            function clear() {

                $('#pword').val('');
                $('#uname').val('');

            }





        });

    </script>

</body>

<!-- Mirrored from wolfadmin.herokuapp.com/1.1/features/signin by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 14 May 2014 02:33:10 GMT -->
</html>
