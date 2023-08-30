let data = [];
let shi_keys = [];

async function getRental() {
    var temp = await fetch('./sigu.json').then((res) => res.json());
    return temp;
}

$(async function () {
    data = await getRental();

    shi_keys = Object.keys(data.시도);
    console.log(shi_keys);

    makeOptions();
});

function makeOptions() {
    $.each(shi_keys, function (i, item) {
        $('#si').append("<option value='" + item + "'>" + item + '</option>');
        $.each(data['군구']['서울특별시'], function (i, item) {
            $('#gu').append("<option value='" + item + "'>" + i + '</option>');
        });
    });

    $('#si').change(async function () {
        s = $('#si').val();
        $('#gu').empty();
        $.each(data['군수'][s], function (i, item) {
            $('#gu').append("<option value='" + item + "'>" + i + '</option>');
        });
    });
}
