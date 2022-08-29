function DataFormat(dateTimeInput) {
    var dataResult;

    if (dateTimeInput.toString().length > 10) {
        var year = dateTimeInput.getFullYear();
        //----------------------------------------------------
        var month = (dateTimeInput.getMonth() + 1).toString();

        if (dateTimeInput.getMonth() + 1 < 10) {
            month = '0' + (dateTimeInput.getMonth() + 1).toString();
        }
        //----------------------------------------------------
        var day = dateTimeInput.getDate().toString();
        if (dateTimeInput.getDate() < 10) {
            day = '0' + dateTimeInput.getDate().toString();
        }
        //----------------------------------------------------
        var hours = dateTimeInput.getHours();

        if (hours < 10) {
            hours = '0' + hours.toString();
        }
        //--------------------------------------
        var minutes = dateTimeInput.getMinutes();

        if (minutes < 10) {
            minutes = '0' + minutes.toString();
        }

        var secunds = dateTimeInput.getSeconds();
        if (secunds < 10) {
            secunds = '0' + secunds.toString();
        }

        dataResult = day + '.' + month + '.' + year; // + ' ' + hours + ':' + minutes + ':' + secunds;

    }
    else {
        dataResult = dateTimeInput;
    }

    return dataResult;
}

function GetDate() {
    var inputDate2 = new Date();
    var year = inputDate2.getFullYear();

    var month = (inputDate2.getMonth() + 1).toString();

    if (inputDate2.getMonth() + 1 < 10) {
        month = '0' + (inputDate2.getMonth() + 1).toString();
    }

    var day = inputDate2.getDate().toString();

    if (inputDate2.getDate() < 10) {
        day = '0' + inputDate2.getDate().toString();
    }

    var result = day + '.' + month + '.' + year;

    return result;
}

function GetDateTime() {
    var inputDate2 = new Date();
    var year = inputDate2.getFullYear();

    var month = (inputDate2.getMonth() + 1).toString();

    if (inputDate2.getMonth() + 1 < 10) {
        month = '0' + (inputDate2.getMonth() + 1).toString();
    }

    var day = inputDate2.getDate().toString();

    if (inputDate2.getDate() < 10) {
        day = '0' + inputDate2.getDate().toString();
    }

    var hour = inputDate2.getHours();

    if (inputDate2.getHours() < 10) {
        hour = '0' + inputDate2.getHours().toString();
    }

    var minutes = inputDate2.getMinutes().toString();

    if (inputDate2.getMinutes() < 10) {
        minutes = '0' + inputDate2.getMinutes().toString();
    }

    var result = day + '.' + month + '.' + year + ' ' + hour + ':' + minutes;

    return result;
}

function ConvertToDate(strInput)
{

    var strSubstring = strInput.substring(6, 19);
    var intInput = parseInt(strSubstring);
    var inputDate2 = new Date(intInput);

    var year = inputDate2.getFullYear();

    var month = (inputDate2.getMonth() + 1).toString();

    if (inputDate2.getMonth() + 1 < 10) {
        month = '0' + (inputDate2.getMonth() + 1).toString();
    }

    var day = inputDate2.getDate().toString();

    if (inputDate2.getDate() < 10) {
        day = '0' + inputDate2.getDate().toString();
    }

    var result = day + '.' + month + '.' + year;


    return result.toString();
}

function ConvertStringData(strDataInput) {

    var year = strDataInput.substring(0, 4);

    var month = strDataInput.substring(5, 7);
    var day = strDataInput.substring(8, 10);

    return day + '.' + month + '.' + year;
}

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            let encoded = reader.result.replace(/^.*;base64/, '');
            if ((encoded.length % 4) > 0) {
                encoded += '='.repeat(4 - (encoded.length % 4));
            }
            resolve(encoded);
        };
        reader.onerror = error => reject(error);
    });
}

function DateTimeFormat(dateTimeInput) {
    var dataResult;

    if (dateTimeInput.toString().length > 10) {
        var year = dateTimeInput.getFullYear();
        //----------------------------------------------------
        var month = (dateTimeInput.getMonth() + 1).toString();

        if (dateTimeInput.getMonth() + 1 < 10) {
            month = '0' + (dateTimeInput.getMonth() + 1).toString();
        }
        //----------------------------------------------------
        var day = dateTimeInput.getDate().toString();
        if (dateTimeInput.getDate() < 10) {
            day = '0' + dateTimeInput.getDate().toString();
        }
        //----------------------------------------------------
        var hours = dateTimeInput.getHours();

        if (hours < 10) {
            hours = '0' + hours.toString();
        }
        //--------------------------------------
        var minutes = dateTimeInput.getMinutes();

        if (minutes < 10) {
            minutes = '0' + minutes.toString();
        }

        var secunds = dateTimeInput.getSeconds();
        if (secunds < 10) {
            secunds = '0' + secunds.toString();
        }

        dataResult = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes; // + ':' + secunds;

    }
    else {
        dataResult = dateTimeInput;
    }

    return dataResult;
}