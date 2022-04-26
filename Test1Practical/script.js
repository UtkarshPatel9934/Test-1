$(document).ready(function () {
    var $getApples = $('#apples');
    var $getBananas = $('#bananas');
    var $getOranges = $('#oranges');
    var $getGrapes = $('#grapes');

    var totalCollectedFruitsToday = 0;

    var $collectedAppleOnThatDay = 0;
    var $collectedBananasOnThatDay = 0;
    var $collectedOrangesOnThatDay = 0;
    var $collectedGrapesOnThatDay = 0;
    
    var $allTimeCollectedAppleOnThatDay = 0;
    var $allTimecollectedBananasOnThatDay = 0;
    var $allTimecollectedOrangesOnThatDay = 0;
    var $allTimeCollectedGrapesOnThatDay = 0;
    
    $getApples.on('click', function(){
        $collectedAppleOnThatDay++;
        $allTimeCollectedAppleOnThatDay++;

        $('span#apples-quantity').text($collectedAppleOnThatDay);
        $('span#apples-quantity-all-time').text($allTimeCollectedAppleOnThatDay);
        
        var savedAllTimeApplesCollected = localStorage.setItem("Apples", $allTimeCollectedAppleOnThatDay);

        let $calcTotalCollectedFruitsToday = $collectedAppleOnThatDay + $collectedBananasOnThatDay + $collectedOrangesOnThatDay + $collectedGrapesOnThatDay;
        $('span#totals-today').text($calcTotalCollectedFruitsToday);

        if($calcTotalCollectedFruitsToday == 30)
        {
            $('#next-day').show();
            $('#success-message').show();
        }
        // console.log('collected Apple', collectedAppleOnThatDay);
    });
    $getBananas.on('click', function(){
        $collectedBananasOnThatDay++;
        $allTimecollectedBananasOnThatDay++;

        $('span#bananas-quantity').text($collectedBananasOnThatDay);
        $('span#bananas-quantity-all-time').text($allTimecollectedBananasOnThatDay);

        var savedAllTimeBananasCollected = localStorage.setItem("Bananas", $allTimecollectedBananasOnThatDay);

        let $calcTotalCollectedFruitsToday = $collectedAppleOnThatDay + $collectedBananasOnThatDay + $collectedOrangesOnThatDay + $collectedGrapesOnThatDay;
        $('span#totals-today').text($calcTotalCollectedFruitsToday);


        if($calcTotalCollectedFruitsToday == 30)
        {
            $('#next-day').show();
            $('#success-message').show();
        }
        // console.log('collected Bananas', collectedBananasOnThatDay);
    });
    $getOranges.on('click', function(){
        $collectedOrangesOnThatDay++;
        $allTimecollectedOrangesOnThatDay++;

        $('span#oranges-quantity').text($collectedOrangesOnThatDay);
        $('span#oranges-quantity-all-time').text($allTimecollectedOrangesOnThatDay);

        var savedAllTimeOrangesCollected = localStorage.setItem("Oranges", $allTimecollectedOrangesOnThatDay);

        let $calcTotalCollectedFruitsToday = $collectedAppleOnThatDay + $collectedBananasOnThatDay + $collectedOrangesOnThatDay + $collectedGrapesOnThatDay;
        $('span#totals-today').text($calcTotalCollectedFruitsToday);


        if($calcTotalCollectedFruitsToday == 30)
        {
            $('#next-day').show();
            $('#success-message').show();
        }
        // console.log('collected Oranges', collectedOrangesOnThatDay);
    });
    $getGrapes.on('click', function(){
        $collectedGrapesOnThatDay++;
        $allTimeCollectedGrapesOnThatDay++;

        $('span#grapes-quantity').text($collectedGrapesOnThatDay);
        $('span#grapes-quantity-all-time').text($allTimeCollectedGrapesOnThatDay);

        var savedAllTimeGrapesCollected = localStorage.setItem("Grapes", $allTimeCollectedGrapesOnThatDay);

        let $calcTotalCollectedFruitsToday = $collectedAppleOnThatDay + $collectedBananasOnThatDay + $collectedOrangesOnThatDay + $collectedGrapesOnThatDay;
        $('span#totals-today').text($calcTotalCollectedFruitsToday);

        if($calcTotalCollectedFruitsToday == 30)
        {
            $('#next-day').show();
            $('#success-message').show();
        }
        // console.log('collected Grapes', collectedGrapesOnThatDay);
    });
    

    $retrieved_from_localstorageAppels = localStorage.getItem("Apples");
    $retrieved_from_localstorageAppels = localStorage.getItem("Bananas");
    $retrieved_from_localstorageAppels = localStorage.getItem("Oranges");
    $retrieved_from_localstorageAppels = localStorage.getItem("Grapes");
    
    $getAllTotalTimeSaved = parseInt($retrieved_from_localstorageAppels) + parseInt($retrieved_from_localstorageAppels) + parseInt($retrieved_from_localstorageAppels) + parseInt($retrieved_from_localstorageAppels);
   
        $('#totals-all-time').text($getAllTotalTimeSaved);

    // let selectTotalCollectedFruitsToday = ;
    // console.log(selectTotalCollectedFruitsToday);
   

    navigator.geolocation.getCurrentPosition(sucess, () => {
        console.log('Youy didnot provide your location');
    })

    function sucess(position)
    {
       
        if(position.coords.accuracy > 10)
        $('#location').html(`<strong>Current Location:</strong><br>Latitude: ${position.coords.latitude.toFixed(4)} <br> Longitude: ${position.coords.longitude.toFixed(4)}`).css({
            'color':'red'
        })
        else{
            $('#location').html(`<strong>Current Location:</strong><br>Latitude: ${position.coords.latitude.toFixed(4)} <br> Longitude: ${position.coords.longitude.toFixed(4)}`)
        }
    }




});