/*let login = localStorage.getItem("login");
let userDetails = null;
if (login === null) {
  window.location.replace("INDEX.html");
} else {
  userDetails = localStorage.getItem("users");
  userDetails = JSON.parse(userDetails);
  userDetails = userDetails[login];
  /*document.querySelector("#welcome-txt").innerHTML = `Welcome, <b>${
    userDetails.fullname.split(" ")[0]
  }</b>`;*/


/*console.log(userDetails);
let logoutBtn = document.querySelector("#logout");
let title = document.querySelector("#title");
let Description = document.querySelector("#Description");
let url = document.querySelector("#url");
let saveBlogBtn = document.querySelector("#saveblg");
let img=document.querySelector(".image")
let author=document.querySelector("#author")
let addtodo=document.querySelector("#addtodo")
url.addEventListener("blur",()=>{
  document.querySelector(".image").src=url.value;
})

saveBlogBtn.addEventListener("click", () => {
  let newBlog = {
    title: title.value,
    Description: Description.value,
    url: url.value,
    id: login,
    //author: userDetails.fullname,
  };
  let blogs = localStorage.getItem("blogs"); // null;
  blogs = blogs === null ? [] : JSON.parse(blogs);

  blogs.unshift(newBlog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  alert("Blog Saved Successfully");

  
  title.value=description.value=url.value="";
  //document.querySelector(".image").src=url.value;
  img.src="images/771190_people_512x512.png";

});

logoutBtn.addEventListener("click", () => {
  
 
  let isLogout = confirm("Are you sure to logout")
  /*Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Logout Successful!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  },2000);*/
  /*if (isLogout === true) {
  localStorage.removeItem("login");
  window.location.replace("INDEX.html");;
  }*/
  let addtodo=document.querySelector("#addtodo")
  addtodo.addEventListener("click",()=>{
    localStorage.removeItem("login");
  window.location.replace("INDEX.html");;

  })
