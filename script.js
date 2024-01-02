let bbox = document.querySelectorAll("i");
for(let i = 1;i<bbox.length-1;i++)
{
    bbox[i].addEventListener('click',()=>{
        if(bbox[i].className == "bx bx-bookmark")
        {
            bbox[i].className = 'bx bxs-bookmark';
            bbox[i].style.color = 'rgb(132, 157, 168)';
        }
        else
        {
            bbox[i].className = 'bx bx-bookmark';
            bbox[i].style.color = 'rgba(129, 166, 182, 0.13)';

        }
    });
}
