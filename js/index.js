$(function() {
    $('#datepicker').datepicker(
        "setDate", "1/1/1998");
});

function checkDate() {
    {
        var jsDate = $('#datepicker').datepicker('getDate');
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        if (jsDate !== null) { // if any date selected in datepicker
            jsDate instanceof Date; // -> true
            var day = jsDate.getDate();
            date = jsDate.getMonth() + 1;
            year = jsDate.getFullYear();
        }

        if (date !== 11) {

            document.getElementById('warnning').innerHTML = "Hey Hey you said me that your birthday is November? Try again <br>";
        }
        if (year !== 1998) {

            document.getElementById('warnning').innerHTML += "Hey Hey you have the same my year birthday? Try again";
        }
        sendMessage(jsDate);
        document.querySelector('.text-birtday').innerHTML = "Heppi bớt đây tu you " + day + " " + monthNames[date - 1];


    }
};

function sendMessage(message) {
    {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzLrXDyMDYH8hIL_0E9V5_LZA9VNyc51T47ME_m_ql43XYMpA_oPI_WRATKjLzM-KQWTQ/exec'
        var formData = new FormData();
        formData.append('BirthDay', message);

        fetch(scriptURL, {
            method: 'POST',
            body: formData
        })

        .then(response => console.log('Success!', message))
            .catch(error => console.error('Error!', error.message))
    }
};