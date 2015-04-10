<!DOCTYPE html>
<html>

    <!-- Mirrored from wolfadmin.herokuapp.com/1.1/lists/datatables by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 14 May 2014 02:33:15 GMT -->
    <!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />	
        <title>Approve Donor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link data-turbolinks-track="true" href="../../assets/application-b9abcf044a0bc3e705568d103eddd00e.css" media="all" rel="stylesheet" />
        <script data-turbolinks-track="true" src="../../assets/application-c19ca191fe14a22b6c3ee53ac5b340a6.js"></script>
        <meta content="authenticity_token" name="csrf-param" />
        <meta content="OszadhPDbPaLmettDOd3kDnS+XRVU5SVqyjBoVc8Tr8=" name="csrf-token" />

        <!-- from rugby site -->
        <link rel="stylesheet" href="../../assets/css/style.css">
        <link rel="stylesheet" href="../../assets/plugins/bootstrap/css/bootstrap.min.css">
        <!-- CSS Implementing Plugins -->
        <link rel="stylesheet" href="../../assets/plugins/line-icons/line-icons.css">
        <link rel="stylesheet" href="../../assets/plugins/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="../../assets/plugins/fancybox/source/jquery.fancybox.css">

        <!-- CSS Theme -->    
        <link rel="stylesheet" href="../../assets/css/themes/default.css" id="style_color">

        <!-- CSS Customization -->
        <link rel="stylesheet" href="../../assets/css/custom.css">
        <link rel="stylesheet" href="../../assets/css/jquery-ui.css">

        <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    </head>
    <?php include '../Model/dbc.php'; ?>
    <?php include("../../Common/alertify.php"); ?>     

    <body id="datatables">

        <div id="wrapper">

            <?php include("../../Common/short_menu.php"); ?>

            <div id="content">


                <div class="menubar">
                    <div class="sidebar-toggler visible-xs">
                        <i class="ion-navicon"></i>
                    </div>

                    <div class="page-title">
                        Confirm Donation
                    </div>
                </div>



                <!------------------------------->

                <!--=== Content Part ===-->
                <div class="container content">				
                    <div class="gallery-page">
                        <div class="row margin-bottom-20">

                            <div class="col-md-1 col-sm-6">

                            </div>

                            <div class="col-md-4 col-sm-6">
                                <a class="thumbnail fancybox-button zoomer" id="mainlink" data-rel="fancybox-button" title="Click to ZOOM" href="../../assets/bank_slips/index.jpg">
                                    <span class="overlay-zoom">  
                                        <img alt="SELECT PHOTO FROM DATATABLE" id="image"  src="../../assets/bank_slips/index.jpg" class="img-responsive">
                                        <span class="zoom-icon"></span>
                                    </span>                                              
                                </a>
                            </div>


                            <div class="col-md-7 col-sm-6">

                                <div class="content-wrapper">
                                    <form id="new-customer" class="form-horizontal" method="get" action="#" role="form">


                                        <div class="form-group">
                                            <label class="col-sm-2 col-md-2 control-label">Name</label>
                                            <div class="col-sm-10 col-md-8">
                                                <input type="text" id="name" class="form-control" name="fname" disabled/>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-sm-2 col-md-2 control-label">Phone number</label>
                                            <div class="col-sm-10 col-md-8">
                                                <div class="has-feedback">
                                                    <input type="text" id="pnumber" class="form-control" name="pnumber" disabled/>

                                                </div>
                                            </div>
                                        </div>


                                        <div class="form-group">
                                            <label for="inputPassword3" class="col-sm-2 col-md-2 control-label">Package</label>
                                            <div class="col-sm-10 col-md-8">
                                                <select id="package" class="form-control" data-smart-select>

                                                    <option  value="" >Select a Package</option>
                                                    <option  value="pkg1">Package 1 - Sponsor a child</option>
                                                    <option  value="pkg2">Package 2 - Donation to Cause</option>
                                                    <option  value="pkg3">Package 3 - Any kind of Donations</option>

                                                </select>
                                            </div>
                                        </div>


                                        <div class="form-group">
                                            <label id="lbl1" class="col-sm-2 col-md-2 control-label">Student Name</label>
                                            <div class="col-sm-10 col-md-8">
                                                <input id="autocomplete" class="form-control" name="fname" />
                                            </div>
                                        </div>

                                        <div class="form-group form-actions">
                                            <div class="col-sm-offset-2 col-sm-10">

                                                <input type="hidden" value="" style="display: none;" id="hidden_val"/>
                                                <button type="button" id="assign" class="btn btn-success">Assign Student</button>
                                            </div>
                                        </div>


                                    </form>


                                </div>


                            </div>



                        </div>


                        <hr class="margin-bottom-30">


                    </div>

                    <div class="content-wrapper">

                        <div class="block-area" id="defaultStyle">

                            <div class="dark-title">
                                <input type="text" class="main-search" id="dev-table-filter" data-action="filter" data-filters="#orders-datatable" placeholder="Search Records" />
                            </div>
                            <div class="clearfix"></div>
                            <table class="table table-bordered table-hover tile" id="orders-datatable">
                                <thead>
                                    <tr>
                                        <th tabindex="0" rowspan="1" colspan="1">Name
                                        </th>

                                        <th tabindex="0" rowspan="1" colspan="1">Phone
                                        </th>
                                        <th tabindex="0" rowspan="1" colspan="1">Email
                                        </th>
                                        <th tabindex="0" rowspan="1" colspan="1">City
                                        </th>
                                        <th tabindex="0" rowspan="1" colspan="1">SELECT
                                        </th>

                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>

                                        <th rowspan="1" colspan="1">Name</th>
                                        <th rowspan="1" colspan="1">Phone</th>
                                        <th rowspan="1" colspan="1">Email</th>
                                        <th rowspan="1" colspan="1">City</th>
                                        <th rowspan="1" colspan="1">SELECT</th>

                                    </tr>
                                </tfoot>
                                <tbody>                            
                                </tbody>
                            </table>
                        </div>
                    </div> 





                </div><!--/gallery-page-->








            </div>  
        </div>


        <?php require_once '../../Common/all_js_links.php'; ?>

        <script src="js/donnerdata.js"></script> 

        <script type = "text/javascript" src ="../../assets/plugins/jquery-migrate-1.2.1.min.js" ></script>
        <script type="text/javascript" src="../../assets/plugins/bootstrap/js/bootstrap.min.js"></script> 
        <!-- JS Implementing Plugins -->           
        <script type="text/javascript" src="../../assets/plugins/back-to-top.js"></script>
        <script type="text/javascript" src="../../assets/plugins/fancybox/source/jquery.fancybox.pack.js"></script>
        <!-- JS Page Level -->           
        <script type="text/javascript" src="../../assets/js/app.js"></script>
        <script type="text/javascript">
            jQuery(document).ready(function() {
                App.init();
                App.initFancybox();
            });
        </script>
        <!--[if lt IE 9]>
            <script src="assets/plugins/respond.js"></script>
        <![endif]-->

        <script type="text/javascript">
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-29166220-1']);
            _gaq.push(['_setDomainName', 'htmlstream.com']);
            _gaq.push(['_trackPageview']);

            (function() {
                var ga = document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            })();
        </script>




        <script type="text/javascript">
            $(document).ready(function() {


                $(function() {



                    donner_data_table();


                    $('#assign').click(function() {

                        if ($('#package').val() !== "") {
                            assign_student();
                        } else {


                            okModel("ERROR : Fill Essential Feilds ", "Package and Student Id fields are compulsory", "OK");
                        }

                    });


                    //$("#package option[value='pkg1']").text()
                    $("#package").change(function() {
                        //... do stuff
                        var selVal = $(this).val();
                        if (selVal == "pkg2" || selVal == 'pkg3') {
                           // alert("hello kitty");
                            $('#autocomplete').hide();
                            $('#lbl1').hide();
                        } else {
                            
                            $('#autocomplete').show();
                             $('#lbl1').show();
                            
                        }
                        
                    });





                });




            });

        </script>



        <!---------------------------------------------------------------------------------------------->

        <script>
            $(document).ready(function() {

                var availableTags = [
<?php
$str1 = mysql_query("SELECT DISTINCT `student_name`,`student_id` FROM `student_info`;")or die('query error');

$resultStr = "";


while ($row = mysql_fetch_array($str1)) {


    $resultStr.= " ' " . $row['student_name'] . " ', ";
}


echo $resultStr;
?>];
                var set = "Test";
                $("#autocomplete").autocomplete({
                    source: availableTags, select: function(event, ui) {

                        $("#idNo").val('');
                        var set = ui.item.value;
                        // get_area_code(set);
                        // get_max_RegId();
                    }
                });




            });

        </script>










    </body>

    <!-- Mirrored from wolfadmin.herokuapp.com/1.1/lists/datatables by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 14 May 2014 02:33:15 GMT -->
</html>
