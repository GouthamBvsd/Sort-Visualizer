async function merge(arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await waitforme(delay);
        arr[l + i].style.background = 'orange';
        L[i] = arr[l + i].style.height;
    }

    for (let j = 0; j < n2; j++) {
        await waitforme(delay);
        arr[m + 1 + j].style.background = 'yellow';
        R[j] = arr[m + 1 + j].style.height;
    }

    await waitforme(delay);

    let i = 0;

    let j = 0;

    let k = l;

    while (i < n1 && j < n2) {
        await waitforme(delay);
        if (parseInt(L[i]) <= parseInt(R[j])) {
            //color
            if ((n1 + n2) === arr.length) {
                arr[k].style.background = 'green';
            }
            else {
                arr[k].style.background = 'lightgreen';
            }
            arr[k].style.height = L[i];
            i++;
            k++;
        }

        else {
            if ((n1 + n2) === arr.length) {
                arr[k].style.background = 'green';
            }
            else {
                arr[k].style.background = 'lightgreen';
            }
            arr[k].style.height = R[j];
            j++;
            k++;
        }

    }

    while (i < n1) {
        await waitforme(delay);
        //color
        if ((n1 + n2) === arr.length) {
            arr[k].style.background = 'green';
        }
        else {
            arr[k].style.background = 'lightgreen';
        }
        arr[k].style.height = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        await waitforme(delay);
        if ((n1 + n2) === arr.length) {
            arr[k].style.background = 'green';
        }
        else {
            arr[k].style.background = 'lightgreen';
        }
        arr[k].style.height = R[j];
        j++;
        k++;
    }
}

async function mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    let m = l + Math.floor((r - l) / 2);
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergesort");
mergeSortbtn.addEventListener('click', async function () {
    let arr = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(arr.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(arr, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();

});