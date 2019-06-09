function lerJS(){
$(document).ready(function () {
    $.ajax({
        type:'GET',
        url:'https://bannetloja.herokuapp.com/produtos',
        data:data,
        dataType:'json',
        success: function (data) {
            $.each(data,function (index,element) {
                console.log(element[index].nome);
            })

        }
    })
})
}
