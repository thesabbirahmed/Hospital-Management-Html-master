
function userlogin(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "nozibullah@gmail.com" && form.usrpsw.value == "123")
  {
    window.open('https://drive.google.com/drive/folders/1jXU6O9ZUl-oKOJPaIdGBzvjzVyZTUPr4?usp=sharing')/*opens the target page while Id & password matches*/
  }
 else
 {
  window.open('blog.html')/*displays error message*/
  }
}