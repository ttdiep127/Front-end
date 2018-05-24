$(document).ready(function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/comments",
        method: "GET",
        dataType: "JSON",
        success: OnSuccess
    });
});

function ShorterString(string,maxLength){
    if(string.length > maxLength){
        var result ="";
        for (var i = 0; i<maxLength ; i++){
            result = result + string[i];
        }
        return result + "...";
    }
    
    return string;
}

function OnSuccess(data) {
    var posts = [];
    data.forEach(function(item) {
        var post = {
            postId: item.postId,
            userId: item.id,
            email: item.email,
            title: item.name,
            context: item.body
        };
        posts.push(post);
    });
    GetBodyTable(posts);
}

function GetBodyTable(listofObject) {

    listofObject.forEach(function(item) {
        const element = $(`
            <tr>
                <td class="col-sm-1">${item.postId}</td>
                <td class="col-sm-1">${item.userId}</td>
                <td class="col-sm-2">${item.email}</td>
                <td class="col-sm-3">${ShorterString(item.title,30)}</td>
                <td class="col-sm-5">${ShorterString(item.context,100)}</td>
            </tr>
            `)
        $('#table tbody').append(element);
    })
    $('#table').DataTable();
}
