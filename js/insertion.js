async function insertion(){
    console.log('In insertion()');
    const arr=document.querySelectorAll(".bar");
    arr[0].style.background='green';
    for(let i=1;i<arr.length;i++)
    {   
        console.log('In the ith loop');
        let key=arr[i].style.height;
        let j=i-1;
        
        arr[i].style.background='orange';
        await waitforme(delay);
        
        while (j>=0 && parseInt(arr[j].style.height) > parseInt(key)) 
        {  
            console.log('In the while loop');
            arr[j].style.background='orange';
            arr[j+1].style.height = arr[j].style.height;  
            j = j - 1; 
            await waitforme(delay);
            
            for(let k=i;k>=0;k--)
            {
                arr[k].style.background='green';
            }
        }  
        arr[j + 1].style.height = key; 
        arr[i].style.background='green'; 
            

        
    }
}
const inSortbtn=document.querySelector(".insertionsort");
inSortbtn.addEventListener('click',async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});