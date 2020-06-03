$(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();

        const $bill = $('.billAmount').val();
        const $tip = $('.tipAmount').val();
        const $numOfPeople = $('.numOfPeople').val();
        const $finalTip = $('.tip');

        if($bill === "" || $tip == 0) {
            alert('Please enter a valid amount');
        };

        if($numOfPeople === "" || $numOfPeople <= 1) {
            $numOfPeople = 1;
        };

        let total = ($bill * $tip) / $numOfPeople;
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);

        $finalTip.text(total); 
    });
});

