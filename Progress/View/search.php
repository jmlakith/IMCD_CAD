<html>
    <body>
          	<link data-turbolinks-track="true" href="../../assets/application-b9abcf044a0bc3e705568d103eddd00e.css" media="all" rel="stylesheet" />

<link href="css/style.css" rel="stylesheet" type="text/css" />
<link href="css/jquery.autocomplete.css" rel="stylesheet">
<script src="js/jquery.js" type="text/javascript"></script>
<script src="jquery.autocomplete.js"  type="text/javascript"></script>
<script type="text/javascript">
    $().ready(function() {
            $("#full_name_rep").autocomplete("../Controller/get_Student.php", {
                    width: 260,
                    matchContains: true,
                    //mustMatch: true,
                    //minChars: 0,
                    //multiple: true,
                    //highlight: false,
                    //multipleSeparator: ",",
                    selectFirst: false
            });
    });
</script>


<!--<script>
     function getCustomerDetails(customerName){
           if(customerName!=""){
           var request = $.ajax({
                url: "../controller/customer.php",
                type: "POST",
                data: {customer_name:customerName,action:'get_details'},
                dataType: "json",
                });
            request.done(function(json_return){
              $('#a_contact1').val(json_return['mobile']);
            
            }); 

            request.fail(function(jqXHR, textStatus) {
            alert( "Request failed: " + textStatus );
            return false;
            });
            }
            else{
            $('#a_contact1').val('');
           
            }
     }
</script> -->

            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">Search</button>
<form action="../Controller/student.php" method="post">
            <div class="form-group">
		    <label class="col-sm-2 col-md-2 control-label">Full Name</label>
		    <div class="col-sm-10 col-md-8">
		      <input type="text" class="form-control fa fa-search" name="full_name_rep" id="full_name_rep" />
                      <input type="hidden" name="action" value="search" />
                    </div>
	  	</div><br/>
    <div class="form-group form-actions">
        <div class="col-sm-offset-2 col-sm-10 col-md-offset-2 col-md-10">
            <button type="submit" class="btn btn-primary"  id="next1">Submit to progress form</button>
        </div>
    </div>
       
</form>
    
                
    </body>
</html>
