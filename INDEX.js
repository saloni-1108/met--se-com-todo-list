let savebtn=document.queryselector("#savebtn")
savebtn.addEventListener("click", () => {
    let newBlog = {
      title: title.value,
      Description: Description.value,
      
    };
    let blogs = localStorage.getItem("blogs"); // null;
    blogs = blogs === null ? [] : JSON.parse(blogs);
  
    blogs.unshift(newBlog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    alert("Blog Saved Successfully");
  
    
    title.value=description.value=url.value="";
    //document.querySelector(".image").src=url.value;
    
  
  });