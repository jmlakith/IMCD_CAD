<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />	
        <title>COLOUR A DREAM</title>
 <script type="text/javascript">
$(function() {

$("#data").click(function() {



var element = $(this);
   
    var test = $("#content1").val();
	var test2=$("#name").val();
	var test3=$("#age").val();
	var action="add_book";
	
	
   
    var dataString = 'content1='+ test +'& name='+test2 + '& age='+test3 + '& action='+action;
	
	if(test=='')
	{
	alert("Please Enter Some Text");
	
	}
	else
	{
	$("#flash").show();
	
	
		
	$.ajax({
	
	type: "GET",
  url: "../controller/book.php",
   data: dataString,
  cache: false,
  success: function(html){
  
 
  
  
    $("#display").after(html);
/*
 document.getElementById('content').value='';
 $("#flash").hide();
  document.getElementById('name').value='';
 $("#flash").hide();
	document.getElementById('age').value='';
 $("#flash").hide();  */
  }
  
  
});
	}
		

    return false;
	});



});

</script>



</head>

<body>
<body id="form-product">
	
	<div id="wrapper">
<div align="center">
    <table cellpadding="0" cellspacing="0" width="500px" border="1">
<tr>
<td>

<div class="content-wrapper">
<div id="content">	
<form  method="post" name="form" action="../controller/book.php" id="new-product" class="form-horizontal"  role="form">
<table cellpadding="0" cellspacing="0" width="500px">

<tr>
<td>
    <div class="address">
        <div class="form-group">
            <label class="col-sm-2 col-md-2 control-label">Core Subject</label>
        </div>
        <div class="form-group">
        <div class="col-sm-3 col-sm-offset-2">
            <input type="text" class="form-control" placeholder="Subject" name="content1" id="content1" />
        </div>
        <div class="col-sm-3">
            <input type="text" class="form-control" placeholder="Marks" name="marks1" />
        </div>
        </div>
    </div>
 <input type="submit" value="Add" id="data" name="submit" class="btn btn-primary"/>
   <input type="hidden" name="action" value="add_book" /> 
</td>
</tr>

</table>
</form>

</div>
<div style="height:7px"></div>
<div id="flash" align="left"  ></div>

<div id="display" align="left"></div>

</td>
</tr>
</table>


</div></div></div>




</div>
</body>
</html>
