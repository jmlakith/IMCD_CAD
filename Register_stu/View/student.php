<!DOCTYPE html>

        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />	
        <title>COLOUR A DREAM</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link data-turbolinks-track="true" href="../../assets/application-b9abcf044a0bc3e705568d103eddd00e.css" media="all" rel="stylesheet" />
        <script data-turbolinks-track="true" src="../../assets/application-c19ca191fe14a22b6c3ee53ac5b340a6.js"></script>
        <meta content="authenticity_token" name="csrf-param" />
        <meta content="OszadhPDbPaLmettDOd3kDnS+XRVU5SVqyjBoVc8Tr8=" name="csrf-token" />

        <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
        
        <script>
            
            function okModel(heading, question, okButtonTxt, callback2) {

    var ok = $('<div class="modal fade">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
            '<h4 class="modal-title">' + heading + '</h4>' +
            '</div>' +
            '<div class="modal-body">' +
            '<p>' + question + '</p>' +
            '</div>' +
            '<div class="modal-footer">' +
            '<button type="button" class="btn btn-primary" id="okButton">' + okButtonTxt + '</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    ok.find('#okButton').click(function(event) {
        ok.modal('hide');
    });

    ok.modal('show');
}


            
         $(document).ready(function() {
             
              
              $('#submit').click(function() {
                  
                  var fname=$('#fname').val();
                  
                  var grade=$('#grade').val();
                  
                  var school=$('#school').val();
                  
                  var birth_day=$('#birth_day').val();
                  
                  var pnumber=$('#pnumber').val();
                  
                  var address=$('#address').val();
                  
                  var state=$('#state').val();
                  
                  var zip=$('#zip').val();
                  
            if(fname == "" || grade == "" || school == "" || birth_day=="" 
                    || pnumber=="" || nic=="" || address=="" || state=="" || zip==""){
                
                okModel("ERROR : Data incomplete ", "You should complete all fields before add progress ", "OK");
                
            return false;
          
        }
              else{
                  
                return true;
              }
                
                
            });
             
         });
        
        </script>
        
</head>
   
    <?php include("../../Common/alertify.php"); ?>     
    <body id="form-product">
	
	<div id="wrapper">

            <?php include("../../Common/short_menu.php"); ?>

            <div id="content">


                <div class="menubar">
                    <div class="sidebar-toggler visible-xs">
                        <i class="ion-navicon"></i>
                    </div>

                    <div class="page-title">
                        Add a Student  
                        <small class="hidden-xs">
                            <strong>Add student to system </strong>
                        </small>
                    </div>
                </div>

                <div class="content-wrapper">
                    <form id="new-product" class="form-horizontal" method="get" action="#" role="form">
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">Full name</label>
                            <div class="col-sm-10 col-md-8">
                                <input type="text" id="fname" class="form-control" name="fname" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 col-md-2 control-label">Grade</label>
                            <div class="col-sm-10 col-md-8">
                                <select class="form-control" id="grade" name="grade" data-smart-select>

                                    <!--- check -->
                                    <option value="Male"> Grade 1</option>
                                    <option value="Female">Grade 2</option>
                                    <option value="Male">Grade 3</option>
                                    <option value="Female">Grade 4</option>
                                    <option value="Male">Grade 5</option>
                                    <option value="Female">Grade 6</option>
                                    <option value="Male">Grade 7</option>
                                    <option value="Female">Grade 8</option>
                                    <option value="Male">Grade 9</option>
                                    <option value="Female">Grade 10</option>
                                    <option value="Male">Grade 11</option>
                                    <option value="Female">Grade 12</option>
                                    <option value="Male">Grade 13</option>
                                    <!--- check -->        
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">School</label>
                            <div class="col-sm-10 col-md-8">
                                <div class="has-feedback">
                                <input type="text" id="nic" class="form-control mask-nic" name="school"  id='school'/>
                                 <i class="ion-information-circled form-control-feedback" data-toggle="tooltip" title="Enter student'school ">
                                    </i>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
		    <label for="inputPassword3" class="col-sm-2 col-md-2 control-label">Birth Day</label>
		    <div class="col-sm-10 col-md-8">
		    	<div class="input-group">
				  	<span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                                        <input type="text" class="form-control datepicker" placeholder="<?php echo date('Y-m-d')?>" name="birth_day" id="birth_day"/>
				</div>
		    </div>
	  	</div>



                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">Phone number</label>
                            <div class="col-sm-10 col-md-8">
                                <div class="has-feedback">
                                    <input type="text" id="pnumber" class="form-control mask-phone" name="pnumber" id="pnumber"/>
                                    <i class="ion-information-circled form-control-feedback" data-toggle="tooltip" title="Enter home phone number of student">
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">National ID</label>
                            <div class="col-sm-10 col-md-8">
                                <div class="has-feedback">
                                    <input type="text" id="pnumber" class="form-control mask-phone" name="nic" id="nic"/>
                                    <i class="ion-information-circled form-control-feedback" data-toggle="tooltip" title="optional field">
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div class="address">
                            <div class="form-group">
                                <label class="col-sm-2 col-md-2 control-label">Home Address</label>
                                <div class="col-sm-10 col-md-8">
                                    <input type="text" id="address" class="form-control" placeholder="Address" name="address" id="address"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-3 col-sm-offset-2">
                                    <input type="text" id="city" class="form-control" placeholder="City" name="city" id="city"/>
                                </div>
                                <div class="col-sm-3">
                                    <input type="text" id="state" class="form-control" placeholder="State" name="state" id="state"/>
                                </div>
                                <div class="col-sm-2 col-md-2">
                                    <input type="text" id="zip" class="form-control" placeholder="Zip code" name="zip" id="zip"/>
                                </div>
                            </div>
                        </div>
                        <?php require_once 'ajax_upload_image_main.php'; ?>
                

                        <div class="form-group form-actions">
                            <div class="col-sm-offset-2 col-sm-10">

                                <button type="button" id="reset" class="btn btn-success">Reset</button>
                                <button type="submit" id="submit" class="btn btn-success">Add a student to system</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
        
        
        
        
        <!-- modal -->
    
        

        <script src="js/register.js"></script>
         <?php require_once '../../Common/all_js_links.php'; ?>

        <script type="text/javascript">

            (function() {

                $('.mask-age').mask('ZZ', {translation: {'Z': {pattern: /[0-9]/, optional: true}}});
                $('.mask-weight').mask('ZZZ', {translation: {'Z': {pattern: /[0-9]/, optional: true}}});
                $('.mask-nic').mask('ZZZZZZZZZV', {translation: {'Z': {pattern: /[0-9]/, optional: true}, 'V': {pattern: /[A-Za-z]/, optional: true}}});
                 $('.mask-phone').mask('000-0000000');
                   
      
        
                 
            })();
        
            (function() {
           $('#reset').click(function() {
                clear_register();                    
            });
            
            
    
             })();

        </script>
        
        
        <script>
         $(document).ready(function() {
             
             
              $('#register').click(function() {
                  
                  
               var fields = ["fname", "lname", "nic", "pnumber", "email", "password","re_password"]; 
               
               if(passwordCheck()===false){
                   
                   okModel("ERROR : Password Mismatch ", "Re-type the same password that you typed before ", "OK");
               }
                else if (requiredFields(fields) === 1) {

                   register_data_save();


                } else {

                    okModel("ERROR : Data incomplete ", "You should complete neccessary fields before register ", "OK");

                }

                  
                  
                
                
            });
             
             
             
             
         });
        
        </script>


    </body>

    
</html>
