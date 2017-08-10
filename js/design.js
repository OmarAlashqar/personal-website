$(function() {
    loadImages("/img/graphics/", "graphics")
    loadImages("/img/logos/", "logos")
})

function loadImages(dir, id){
  var container = document.getElementById(id)
  $.ajax({
      url : dir,
      success: function (data) {
          $(data).find("a").attr("href", function (i, val) {
              if( val.match(/\.(png)$/) ){
                $('#' + id).append("<a href=" + dir + val + " data-rel='lightcase'><img src=" + dir + val + " alt=''></a>")
                $('a[data-rel^=lightcase]').lightcase()
              }
          })
      }
  })
}

function changeTab(tab){
  var contents = document.getElementsByClassName("gallery")
  for (var i = 0; i < contents.length; i++)
    contents[i].style.display = "none"
  document.getElementById(tab).style.display = "block"

  var tabs = document.getElementsByClassName("selection")
  for (var i = 0; i < tabs.length; i++)
    tabs[i].classList.remove("active")
  document.getElementById(tab+"-select").classList.add("active")
}
