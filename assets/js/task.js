//deleting tasks
//instead of instant removal added a fadeout effect
//using 'on' instead of 'click' for listener to include all new li added in the future, not just the existing ones  

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
// stop bubbling effect (otherwise the effect would spread outward to li, ul, div, body, html)
    event.stopPropagation();
});

//assigning task when clicking on the item on the dropdown menu

function assignM1(obj){
    let thisText = obj.parentNode.parentNode.outerHTML,
        parentText = obj.parentNode.parentNode.parentNode.innerHTML;
        task = parentText.replace(thisText, "");
    $("ul.member1list").append("<li>" + task + "</li>")
};

function assignM2(obj){
    let thisText = obj.parentNode.parentNode.outerHTML,
        parentText = obj.parentNode.parentNode.parentNode.innerHTML;
        task = parentText.replace(thisText, "");
    $("ul.member2list").append("<li>" + task + "</li>")
};

function assignM3(obj){
    let thisText = obj.parentNode.parentNode.outerHTML,
        parentText = obj.parentNode.parentNode.parentNode.innerHTML;
        task = parentText.replace(thisText, "");
    $("ul.member3list").append("<li>" + task + "</li>")
};

//making the dropdown menu for assignment

let dropDownButton =`
    <div class="btn-group dropright rightbutton">
    <button type="button" class="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    assign
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#" onclick="assignM1(this);return false;">member 1</a>
    <a class="dropdown-item" href="#" onclick="assignM2(this);return false;">member 2</a>
    <a class="dropdown-item" href="#" onclick="assignM3(this);return false;">member 3</a>
    </div>
    </div>`;

//adding examples to the task pool

$("ul.taskPool").append("<li><span><i class='fas fa-trash-alt'></i></span>" + "example 1" + dropDownButton + "</li>");
$("ul.taskPool").append("<li><span><i class='fas fa-trash-alt'></i></span>" + "example 2" + dropDownButton + "</li>");
$("ul.taskPool").append("<li><span><i class='fas fa-trash-alt'></i></span>" + "example 3" + dropDownButton + "</li>");

//adding new task to the end of the list

$("input[type='text']").keypress(function(event){
// event in case we hit enter (code 13)
   if(event.which === 13){
// grab the entered text and add it to a variable       
       let taskText = $(this).val();
// emptying the text field       
       $(this).val("");
//create a new li and add it to the ul
       $("ul.taskPool").append("<li><span><i class='fas fa-trash-alt'></i></span>" + taskText + dropDownButton + "</li>")
   } 
});

// making the input field fade in and out when we click on the plus sign

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});

