get_css();
get_js();
document.getElementById('css_body').addEventListener('keydown',update_code , false);
document.getElementById('js_body').addEventListener('keydown',updata , true);
var website = document.getElementById('website');
function addElement(elem_name)
{
    if (elem_name == "header")
    {
        website.innerHTML += `<div contenteditable="true" class="header-gui">Edit me</div><br><br>`;
    }
    else if (elem_name == "heading")
    {
        website.innerHTML += `<h1 contenteditable="true">Click me to edit</h1>`;
    }
    else if (elem_name == "image")
    {
        var img_src = prompt("Type image link")
        var img_width = prompt("Type image width in (px,%,ch,pc,cm,m)")
        website.innerHTML += `<img src="`+img_src+`" width="`+img_width+`">`;
    }
    else if (elem_name == "button")
    {
        website.innerHTML += `<button contenteditable="true">Edit Me</button>`
    }
    else if(elem_name == "input")
    {
        input_id = prompt("Type id for input (if you dont know then leave this empty)","(optional)");
        input_ph = prompt("Type placeholder(text before typing)" , "(optional)");
        website.innerHTML += `<input placeholder="`+input_ph+`"  id="`+input_id+`">`;
    }
    else if (elem_name == "container")
    {
        cont_url = prompt("Type banner Wallpaper Wallpaper");
        website.innerHTML += `<div class="container" contenteditable="true" style="background-image:url('`+cont_url+`');">Edit Here</div>`;
    }
    else if (elem_name == "paragraph")
    {
        website.innerHTML += `<p style="font-family:monospace;" contenteditable="true">Type Here</p>`;
    }
}

function get_css()
{
    document.getElementById('css_body').innerHTML = document.getElementById('body_style').innerHTML;
}
function get_js()
{
    document.getElementById('js_body').innerHTML = document.getElementById('body_script').innerHTML;
}
function update_code()
{
    document.getElementById('body_style').innerHTML = document.getElementById('css_body').innerText;
    
}
function updata()
{
    document.getElementById('body_script').innerHTML = document.getElementById('js_body').innerText;

}
var fs = false;
function fullscreen_now()
{
    if (fs == false){
    website.style = "width:100%;height:100%;z-index:100;";
    website.innerHTML = website.innerHTML.replace('contenteditable="true"','contenteditable="false"')
fs = true;    
}
    else if(fs == true)
{
    fs = false;
    website.style ="";
    website.innerHTML = website.innerHTML.replace('contenteditable="false"','contenteditable="true"')

}
}