async function selection() {
    console.log('In selection()');
    const arr = document.querySelectorAll(".bar");
    for (let i = 0; i < arr.length; i++) {
        console.log('In the ith loop');
        let min_index = i;
        arr[i].style.background = 'orange';
        for (let j = i + 1; j < arr.length; j++) {
            console.log('In the jth loop');
            arr[j].style.background = 'red';
            await waitforme(delay);
            if (parseInt(arr[min_index].style.height) > parseInt(arr[j].style.height)) {
                if (min_index !== i) {
                    arr[min_index].style.background = '#8338ec';
                }
                min_index = j;
            }

            else {
                arr[j].style.background = '#8338ec';
            }

        }
        await waitforme(delay);
        swap(arr[min_index], arr[i]);
        arr[min_index].style.background = '#8338ec';
        arr[i].style.background = 'green';

    }
}
const seSortbtn=document.querySelector(".selectionsort");
seSortbtn.addEventListener('click',async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
