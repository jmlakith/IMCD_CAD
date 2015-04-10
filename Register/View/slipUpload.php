<!DOCTYPE html>
<html>

    <!-- Mirrored from wolfadmin.herokuapp.com/1.1 by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 14 May 2014 02:30:32 GMT -->
    <!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
    <head>
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
        
        <!-- All Required CSS files-->
        <?php require_once '../../Common/all_css_links.php'; ?> 

        <![endif]-->
    </head>


    <?php include("../../Common/alertify.php"); ?>  
    <body id="dashboard"  >





        <div id="content">


            <div class="menubar">
                <div class="sidebar-toggler visible-xs">
                    <i class="ion-navicon"></i>
                </div>

                <div class="page-title">
                    Upload The Image of Bank Deposit Slip
                </div>


            </div>

            <div class="content-wrapper">


                <hr class="margin-bottom-30">

     

                <div class="row">
                    <div class="col-sm-10 col-md-2"></div>
                    <div class="col-sm-10 col-md-5" style="background-color: grey;padding: 30px">
                        <form action="../Model/upload.php" method="post" enctype="multipart/form-data">
                        <h2 align="center">Upload The Slip</h2>
                        <p>Image Preview</p>
                        <div  class="fileupload fileupload-new" data-provides="fileupload">
                            <div class="fileupload-preview thumbnail form-control"></div>

                            <div>
                                <span class="btn btn-file btn-alt btn-sm">
                                    <span class="fileupload-new">Select image</span>
                                    <span class="fileupload-exists">Change</span>
                                     <input type="file" name="fileToUpload" id="fileToUpload">
                                </span>
                                <a href="#" class="btn fileupload-exists btn-sm" data-dismiss="fileupload">Remove</a>
                            </div>
                        </div>

                        <button  name="upload" type="submit" id="upload" class="btn btn-success">Finish</button>
                        </form>
                    </div>
                </div>

                </div>
            </div>  

            <script src="js/dashboard.js"></script>
            <?php require_once '../../Common/all_js_links.php'; ?> 

            <script>
                $(document).ready(function() {

                    // confirm("test","test","cancel","OK");


                    $('#upload').click(function() {



                        okModel("Thank You! ", "You Helped to Colour a Dream of a innocent life ", "OK");




                    });




                });

            </script>




    </body>

    <!-- Mirrored from wolfadmin.herokuapp.com/1.1 by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 14 May 2014 02:31:26 GMT -->
</html>
