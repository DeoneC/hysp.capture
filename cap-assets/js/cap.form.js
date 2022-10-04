new JustValidate('.cap-form-class', {
    rules: {
        "Name": {
            "required": true,
            "minLength": 1,
            "maxLength": 100
        },
        "Email": {
            "required": true,
            "minLength": 1,
            "maxLength": 100,
            "email": true
        },
        "Message": {
            "required": true,
            "minLength": 1,
            "maxLength": 3000
        }
    },
    colorWrong: '#dc3545',
    focusWrongField: true,
    submitHandler: function (cform, values, ajax) {

        var button_value = getButtonValue('cap-button');
        disableButton('cap-button');
        ajax({
            url: cform.getAttribute('action'),
            method: 'POST',
            data: values,
            async: true,
            callback: function (response) {
                var done = false;
                if (response.indexOf('Fail:') == 0) {
                    // configration problem
                    showFailMessage(response);
                    enableButon('cap-button', button_value);
                    done = true;
                }

                if (response.indexOf('Error:') == 0) {
                    // validation problem
                    showErrorMessage(response);
                    enableButon('cap-button', button_value);
                    done = true;
                }

                if (response.indexOf('Success') == 0) {
                    showSuccessMessage(response);
                    done = true;
                }

                if (response.indexOf('Debug:') == 0) {
                    showDebugMessage(response);
                    enableButon('cap-button', button_value);
                    done = true;
                }

                if (done == false) {
                    showErrorMessage('Error:Unexpected error occurred. Try again later.');
                    enableButon('cap-button', button_value);
                }

            }
        });

    },
});

function getButtonValue(id) {
    return document.getElementById(id).innerText;
}

function disableButton(id) {
    document.getElementById(id).innerText = 'Please wait...';
    document.getElementById(id).disabled = true;
}

function enableButon(id, val) {
    document.getElementById(id).innerText = val;
    document.getElementById(id).disabled = false;
}

function showFailMessage(message) {
    var display = '<strong>Unexpected errors. </strong>(form is misconfigured)<br>';
    display += message.substring(5);
    document.getElementById('cap-status').innerHTML = display;
}

function showErrorMessage(message) {
    var display = '<strong>Validation issue:</strong><br>';
    display += message.substring(6);
    document.getElementById('cap-status').innerHTML = display;
}

function showDebugMessage(message) {
    var display = '<strong>Debug details.</strong><br>(Remember to switch off DEBUG mode when done!)<br>';
    display += message.substring(6);
    document.getElementById('cap-status').innerHTML = display;
}

var creditcontainer = document.querySelector(".buttons");
var creditdiv = document.createElement('div');
creditdiv.innerHTML = '<div class="field" style="font-size:0.9em;color:#aaa;padding-top:15px;padding-bottom:10px">Data Capture example by Hypersoup.</div>';
creditcontainer.parentNode.insertAdjacentElement('afterend', creditdiv);

function showSuccessMessage(message) {
    var message = '<br><br>' + message.substring(8);
    var content = document.getElementById('cap-thank-you').innerHTML;
    document.getElementById('cap-thank-you').innerHTML = content + message;
    document.getElementById('cap-status').innerHTML = '';
    document.getElementById('cap-form').style.display = 'none';
    document.getElementById('cap-thank-you').style.display = 'block';
}