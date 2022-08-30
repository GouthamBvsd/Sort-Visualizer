async function partition(arr,l,r){
    console.log('In partition()')
    let i=l-1;
    arr[r].style.background='red';
    for(let j=l;j<=r-1;j++)
    {
        console.log('In partition for j');
        arr[j].style.background='yellow';
        await waitforme(delay);
        if(parseInt(arr[j].style.height) < parseInt(arr[r].style.height)){
            console.log('In partitionL for j if');
            i++;
            swap(arr[i], arr[j]);
            arr[i].style.background = 'orange';
            if(i != j) arr[j].style.background = 'orange';
            await waitforme(delay);
        }
        else{
            arr[j].style.background = 'pink';
        }
    }
    i++;
    await waitforme(delay);
    swap(arr[i],arr[r]);
    arr[r].style.background = 'pink';
    arr[i].style.background = 'green';

    await waitforme(delay);
    
    for(let k = 0; k < arr.length; k++){
        if(arr[k].style.background != 'green')
            arr[k].style.background = '#8338ec';
    }

    return i;
    }
    async function quick(arr,l,r){
        if(l<r)
        {
            let pivot=await partition(arr,l,r);
            await quick(arr,l,pivot-1);
            await quick(arr,pivot+1,r);
        }
        else{
            if(l >= 0 && r >= 0 && l <arr.length && r <arr.length){
                arr[r].style.background = 'green';
                arr[l].style.background = 'green';
            }
        }

    }

    const quickSortbtn=document.querySelector(".quicksort");
quickSortbtn.addEventListener('click',async function(){
    let arr=document.querySelectorAll('.bar');
    let l=0;
    let r=arr.length-1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quick(arr,l,r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

