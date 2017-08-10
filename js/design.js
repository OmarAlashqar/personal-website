$(function() {
  loadImages("img/graphics/", "graphics")
  loadImages("img/logos/", "logos")
})

function loadImages(dir, id){
  // var container = document.getElementById(id)
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

  // $.get(dir + "fileList.txt", function(data) {
  //    var textByLine = data.split("\n")
  //    var container = document.getElementById(id)
  //    textByLine.forEach(function(file){
  //      if (file.includes(".png"))
  //        $('#' + id).append("<a href=" + dir + file + " data-rel='lightcase'><img src=" + dir + file + " alt=''></a>")
  //        $('a[data-rel^=lightcase]').lightcase()
  //    })
  // })
  // var xhr = new XMLHttpRequest();
  // xhr.addEventListener('readystatechange', (output) => {
  //   if (xhr.readyState === 4) {
  //     var response = xhr.responseText;
  //     var textByLine = response.split('\n');
  //     textByLine.forEach(function(file){
  //       if (file.includes(".png"))
  //       $('#' + id).append("<a href=" + dir + file + " data-rel='lightcase'><img src=" + dir + file + " alt=''></a>")
  //       $('a[data-rel^=lightcase]').lightcase()
  //     })
  //   }
  // })
  //
  // xhr.open('GET', dir + "fileList.txt", true);
  // xhr.send();
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
