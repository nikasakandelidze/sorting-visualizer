let elements = [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
const visualDelay = 60;


const elementsContainer = document.getElementById('elements-container');
const insertionSortButton = document.getElementById('insertion_sort_button');
const bubbleSortButton = document.getElementById('bubble_sort_button')
const selectionSortButton = document.getElementById('selection_sort_button')
const resetButton = document.getElementById('reset_button')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function drawElements(elements){
    let maxElement = Math.max(...elements);
    elements.forEach( (element,idx) => {
        let column = document.createElement('div');
        column.className = 'column';
        let heightInPixels = calculateHeightInPixels(element, maxElement);
        column.style.height = `${heightInPixels}px`;
        column.style.top = `${window.innerHeight - heightInPixels}px`
        column.style.left = `${idx * 20}px`
        elementsContainer.appendChild(column);
    });
}

function calculateHeightInPixels(value, maxValue){
    let innerHeight = window.innerHeight;
    let result = (value * innerHeight) / maxValue;
    return result;
}

function setupListeners(){
    window.addEventListener('resize', event => {
        elementsContainer.innerHTML='';
        drawElements(elements);
    });
    insertionSortButton.addEventListener('click', event => {
        insertionSort(elements);
    });
    bubbleSortButton.addEventListener('click', event => {
        bubbleSort(elements);
    });
    selectionSortButton.addEventListener('click', event => {
        selectionSort(elements);
    });
    resetButton.addEventListener('click', event => {
        shuffleArray(elements);
    });
    window.dispatchEvent(new Event('resize'))
}

async function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            let current = inputArr[i];
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
            window.dispatchEvent(new Event('resize'))
            await sleep(visualDelay);
        }
    return inputArr;
}

async function bubbleSort(inputArr){
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
                window.dispatchEvent(new Event('resize'))
                await sleep(visualDelay);
            }
        }
    }
    return inputArr;
};

async function selectionSort (array){
    for(var i = 0; i < array.length; i++){
      //set min to the current iteration of i
      var min = i;
      for(var j = i+1; j < array.length; j++){
        if(array[j] < array[min]){
         min = j;
        }
      }
      var temp = array[i];
      array[i] = array[min];
      array[min] = temp;
      window.dispatchEvent(new Event('resize'))
      await sleep(visualDelay);
    }
}

async function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        window.dispatchEvent(new Event('resize'));
        await sleep(visualDelay);
    }
}

setupListeners();




