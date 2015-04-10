<!DOCTYPE html>

        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />	
        <title>COLOUR A DREAM</title>
       <script type="text/javascript" src="common/new.js"></script>
        <!--facebox script-->
    <link href="common/facebox/facebox.css" media="screen" rel="stylesheet" type="text/css" />
    <script src="js/jquery_1.js" type="text/javascript"></script>
    <script src="common/facebox/facebox.js" type="text/javascript"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
        $('a[rel*=facebox]').facebox(
             {
        loadingImage : 'common/facebox/loading.gif',
        closeImage   : 'common/facebox/closelabel.png'
            })
        })
        </script> <!--
        facebox_script_end-->
        
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
             
                $('#next_1').show();
                
                $('#next_2').hide();       
               
                $('#next_3').hide();
             
              $('#next1').click(function() {
                  
                  var reg_no=$('#reg_no').val();
                  
                  var term=$('#term').val();
                  
            if(reg_no == "" || term == ""){
                
                okModel("ERROR : Data incomplete ", "You should complete all fields before add progress ", "OK");
                
            return false;
          
        }
              else{
                  
                $('#next_1').hide();       
               
                $('#next_2').show();
              }
                
                
            });
             
             $('#next2').click(function() {
                  
                $('#next_2').hide();       
               
                $('#next_3').show();
            
            });
             
           $('#back2').click(function() {
                  
                $('#next_2').hide();       
               
                $('#next_1').show();
            
            });
            
            $('#back3').click(function() {
                  
                $('#next_3').hide();       
               
                $('#next_2').show();
            
            });
            
         });
        
        </script>
        
</head>
<body id="form-product">
	
	<div id="wrapper">
    
        <?php include("../../Common/short_menu.php"); ?>

        <div id="content">
          

<div class="menubar">
	<div class="sidebar-toggler visible-xs">
		<i class="ion-navicon"></i>
	</div>

	<div class="page-title">
		Add progress details 
		
		<small class="hidden-xs">
			<strong>Auto fill function included</strong>
		</small>
	</div>
</div>

<div class="content-wrapper">
    
	<form id="new-product" class="form-horizontal" method="POST" action="../Controller/student.php" role="form">
            
            <div id="next_1">
                <div class="form-group">
		    <label class="col-sm-2 col-md-2 control-label">Register no</label>
		    <div class="col-sm-10 col-md-8">
                        
		      <input type="text" class="form-control" name="stu_id" id="reg_no" value="<?php 
                      if(isset($_REQUEST['stu_id']))
                      echo base64_decode($_REQUEST['stu_id']) ?>"/>
                    </div>
                </div>	
                <div class="form-group">
		    <label class="col-sm-2 col-md-2 control-label">Full Name</label>
		    <div class="col-sm-10 col-md-8">
		      <input type="text" class="form-control fa fa-search" name="full_name" id="full_name" value="<?php 
                      if(isset($_REQUEST['full_name']))
                      echo base64_decode($_REQUEST['full_name']) ?>"/>
                      <a href="search.php" rel="facebox"><div class="fa fa-search" style="position: relative;top: -26px;left: 660px;"></div></a>
                    </div>
	  	</div>
                <div class="form-group">
		    <label class="col-sm-2 col-md-2 control-label">Grade</label>
		    <div class="col-sm-10 col-md-8">
		      <input type="text" class="form-control fa fa-search" name="full_name" id="full_name" value="<?php 
                      if(isset($_REQUEST['grade']))
                      echo base64_decode($_REQUEST['grade']) ?>"/>
                    </div>
	  	</div>
                <div class="form-group">
		    <label for="inputPassword3" class="col-sm-2 col-md-2 control-label">Term of Test</label>
		    <div class="col-sm-10 col-md-8">
		    	<select class="form-control" name="term" id="term">
                                <option></option>
                                <option value="1">First term</option>
                                <option value="2">Mid Term</option>
                                <option value="3">End Term</option>
                                <option value="4">Ordinary Level</option>
                                <option value="5">Advanced Level</option>
		    	</select>
		    </div>
	  	</div>
                <div class="form-group">
		    <label for="inputPassword3" class="col-sm-2 col-md-2 control-label">Date of Test</label>
		    <div class="col-sm-10 col-md-8">
		    	<div class="input-group">
				  	<span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                                        <input type="text" class="form-control datepicker" placeholder="<?php echo date('Y-m-d')?>" name="date_of_test"/>
				</div>
		    </div>
	  	</div>
                <div class="form-group form-actions">
	    	<div class="col-sm-offset-2 col-sm-10 col-md-offset-2 col-md-10">
                        <button type="button" class="btn btn-success"  id="next1">Next >></button>
                </div>
	  	</div>
                
            </div>
            <div id="next_2">
	  	
                <div class="address">
	  		<div class="form-group">
			    <label class="col-sm-2 col-md-2 control-label">Core Subject</label>
			</div>
			<div class="form-group">
			    <div class="col-sm-3 col-sm-offset-2">
			      	<input type="text" class="form-control" placeholder="Subject" name="subject1" />
			    </div>
			    <div class="col-sm-3">
			      	<input type="text" class="form-control" placeholder="Marks" name="marks1" />
			    </div>
		  	</div>
                </div>
                <div class="address">
	  		<div class="form-group">
			</div>
			<div class="form-group">
			    <div class="col-sm-3 col-sm-offset-2">
			      	<input type="text" class="form-control" placeholder="Subject" name="subject2" />
			    </div>
			    <div class="col-sm-3">
			      	<input type="text" class="form-control" placeholder="Marks" name="marks2" />
			    </div>
		  	</div>
                </div>
                <div class="address">
	  		<div class="form-group">
			</div>
			<div class="form-group">
			    <div class="col-sm-3 col-sm-offset-2">
			      	<input type="text" class="form-control" placeholder="Subject" name="subject3" />
			    </div>
			    <div class="col-sm-3">
			      	<input type="text" class="form-control" placeholder="Marks" name="marks3" />
			    </div>
		  	</div>
                </div>
                <div class="address">
	  		<div class="form-group">
			</div>
			<div class="form-group">
			    <div class="col-sm-3 col-sm-offset-2">
			      	<input type="text" class="form-control" placeholder="Subject" name="subject4" />
			    </div>
			    <div class="col-sm-3">
			      	<input type="text" class="form-control" placeholder="Marks" name="marks4" />
			    </div>
		  	</div>
                </div>
                <div class="address">
	  		<div class="form-group">
			</div>
			<div class="form-group">
			    <div class="col-sm-3 col-sm-offset-2">
			      	<input type="text" class="form-control" placeholder="Subject" name="subject5" />
			    </div>
			    <div class="col-sm-3">
			      	<input type="text" class="form-control" placeholder="Marks" name="marks5" />
			    </div>
		  	</div>
                </div>
                <div class="address">
	  		<div class="form-group">
			</div>
			<div class="form-group">
			    <div class="col-sm-3 col-sm-offset-2">
			      	<input type="text" class="form-control" placeholder="Subject" name="subject6" />
			    </div>
			    <div class="col-sm-3">
			      	<input type="text" class="form-control" placeholder="Marks" name="marks6" />
			    </div>
		  	</div>
                </div>
                <div class="address">
	  		<div class="form-group">
			    <label class="col-sm-2 col-md-2 control-label">Extra Subjects</label>
			</div>
			<div class="form-group">
			    <div class="col-sm-3 col-sm-offset-2">
			      	<input type="text" class="form-control" placeholder="Subject" name="customer[city]" />
			    </div>
			    <div class="col-sm-3">
			      	<input type="text" class="form-control" placeholder="Marks" name="customer[state]" />
			    </div>
		  	</div>
                </div>
                <div class="address">
	  		<div class="form-group">
			</div>
			<div class="form-group">
			    <div class="col-sm-3 col-sm-offset-2">
			      	<input type="text" class="form-control" placeholder="Subject" name="customer[city]" />
			    </div>
			    <div class="col-sm-3">
			      	<input type="text" class="form-control" placeholder="Marks" name="customer[state]" />
			    </div>
		  	</div>
                </div>
                <div class="address">
	  		<div class="form-group">
			    <label class="col-sm-2 col-md-2 control-label">Art Subjects</label>
			</div>
			<div class="form-group">
			    <div class="col-sm-3 col-sm-offset-2">
			      	<input type="text" class="form-control" placeholder="Subject" name="customer[city]" />
			    </div>
			    <div class="col-sm-3">
			      	<input type="text" class="form-control" placeholder="Marks" name="customer[state]" />
			    </div>
		  	</div>
                </div>
                <div class="form-group">
		    <label class="col-sm-2 col-md-2 control-label">Total marks</label>
		    <div class="col-sm-10 col-md-8">
		      <input type="text" class="form-control" name="full_name" id="full_name"/>
		    </div>
	  	</div>
                <div class="form-group">
		    <label class="col-sm-2 col-md-2 control-label">Position in class</label>
		    <div class="col-sm-10 col-md-8">
		      <input type="text" class="form-control" name="position" id="position"/>
		    </div>
	  	</div>
                    <div class="form-group">
		    <label class="col-sm-2 col-md-2 control-label">Total marks of 1st place in class</label>
		    <div class="col-sm-10 col-md-8">
		      <input type="text" class="form-control" name="total_marks_of_first_place" id="total_marks_of_first_place"/>
		    </div>
	  	</div>
                <div class="form-group form-actions">
	    	<div class="col-sm-offset-2 col-sm-10 col-md-offset-2 col-md-10">
	    		<button type="button" class="btn btn-success" id="back2"><< Back </button>
                        <button type="button" class="btn btn-success" id="next2">Next >></button>
                </div>
	  	</div>
            </div>
            <div id="next_3">
	  	
	  	<div class="form-group">
	  		<label class="col-sm-2 col-md-2 control-label">Comments</label>
	  		<div class="col-sm-10 col-md-8">
	  			<div id="summernote"></div>
	  		</div>
	  	</div>
	  	<div class="form-group">
		    <label for="inputPassword3" class="col-sm-2 col-md-2 control-label">Student tags</label>
		    <div class="col-sm-10 col-md-8">
		      	<input type="hidden" id="product-tags" style="width:100%" value="good" name="student_tags" />
		    </div>
	  	</div>
	  	<div class="form-group">
		    <div class="col-sm-offset-2 col-sm-10 col-md-offset-2 col-md-10">
		      	<div class="checkbox">
		        	<label>
		          		<input type="checkbox" name="product[send_marketing]" /> send this report to donner via email now
	        		</label>
		      	</div>
		    </div>
	  	</div>
	  	<div class="form-group form-actions">
	    	<div class="col-sm-offset-2 col-sm-10 col-md-offset-2 col-md-10">
	    		<button type="button" class="btn btn-success" id="back3"><< Back </button>
	      		<button type="submit" class="btn btn-success" id="next3">Save Progress</button>
                        <input type="hidden" name="action" value="add_progress" />
                </div>
	  	</div>
	</form>
</div>
    </div>
        </div>  
    </div>

    

    
</body>

<!-- Mirrored from wolfadmin.herokuapp.com/1.1/forms/new_product by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 14 May 2014 02:34:08 GMT -->
</html>
