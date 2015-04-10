function voiceCmd(){
            if (annyang) {
			
                var isRecording = false;	
				
			$("#voice").click(function(event){
					
						event.preventDefault();
						// if we're recording when the button is clicked
						if(isRecording) {
						//alert("kooooo");
							$('#micon').attr('src', '../../Common/img/shortcuts/mic2.gif');
							
							annyang.abort();	// stop listening
							isRecording = false;	// set recording var to false
							
							} else {
							
							$('#micon').attr('src', '../../Common/img/shortcuts/mic3.gif');
							annyang.start();	// start listening
							isRecording = true;	// set recording var to true
							
							}
					});
					
                var commands = {
                    'family': function() {
                       window.location.replace("../../Eligible_Family_Registration/View/EFReg.php");
                       
                    },
                     'home': function() {
                        window.location.replace("../../Login/View/login.php");
                       
                    },
                    'exit': function() {
                        window.location.replace("../../Login/Controller/logout.php");
                       
                    },
                    'slide': function() {
                        $('#menu-toggle').click();

                       
                    },
                    'navigation': function() {
                        window.location.replace("../../Eligible_Family_Registration/View/RevisitGuide.php");
 
                    },
                    'diary': function() {
                        window.location.replace("../../PHM_Diary/View/phmDiary.php");
 
                    },
                    'cloud': function() {
                        window.location.replace("../../File_Handler/View/file-manager.php");
 
                    },
                    'clinic': function() {
                        window.location.replace("../../Care_At_Clinic/View/clinicCare.php");
 
                    },
                    'mother': function() {
                        window.location.replace("../../Pregnant_Mother_Registration/View/PMReg.php");
 
                    }
                    
                    
                    
                };
				
				
					
                
              
                // Initialize annyang with our commands
                annyang.init(commands);

            }


};