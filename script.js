
const imageArray = [
    {url: "./images/menu/Mask group.png"},
    {url: "./images/menu/Mask group (1).png"},
    {url: "./images/menu/Mask group (3).png"}
];

function showMoreProducts()
{
    const projectContainer = document.getElementById("menu-1"); 

    for(const item of imageArray)
    {
        const projectDivImage = document.createElement("div");

        projectDivImage.classList.add("menu-item");  
        
        projectDivImage.innerHTML = `<img src="${item.url}" alt="" >`;  

        projectContainer.appendChild(projectDivImage);
    }
}