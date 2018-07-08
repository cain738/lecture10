$(document).ready(function () {
    let input=$('#inp');
    let btn=$('#btn');
    let result= $('#result');

    btn.click(function(){
       add(input.val());


    })
});
function update(el){
    let sibling=$(el).prev();
    let grandSibling=$(el).prev().prev();
    let val=grandSibling.val();
    $(el).prev().text(val);
    grandSibling.attr('type','hidden');

}
function changeType() {
    $(el).prev.attr('type','text');
}
function delete1(el){
    $(el).parent().remove();
}
function add(val){
    $.ajax({
        url: '/add',
        method: 'post',
        data: {todo:val},
        success: function(data) {
            console.log(data);
            let value=`<li><input type="hidden">
        <span onclick="changeType(this)">${data}</span>
        <button onclick="update(this)">Update</button>
        <button onclick="delete1(this)">Delete</button>
        </li>`;
        $(result).append(value);

        }
    })

}