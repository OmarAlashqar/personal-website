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
