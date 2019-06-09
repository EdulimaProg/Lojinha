function lerJS() {
    $(document).ready(function () {
        $.getJSON("ttps://bannetloja.herokuapp.com/produtos", {format: "json"}).done(function (data) {
            console.log(data);
        });


    });
}
