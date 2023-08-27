
/* task 1: selection Sort */
function Selection_Sort(input_array=null) {
    var current, minimum, tmp,checked=0;
    var input_user;

    if (input_array==null){
        input_array = prompt("Please enter an array of numbers in the specific format like 4,3,2,1,-2,-3,-1,0...").split(",").map( e => parseInt( e, 10 ));
        // alert(input_array);
    }
    // alert("the input length is : "+ input_array.length)
    for (var i=0; i<input_array.length-1; i++) {
        minimum = input_array[i];
        for (var j=i; j<input_array.length; j++) {
            if (minimum > input_array[j]) {
                minimum = input_array[j];
                current = j;
                checked=1;
            }
        }
        if (checked){
            tmp = input_array[i];
            input_array[i] = input_array[current];
            input_array[current] = tmp;
            checked = 0;
        }
    }
    alert(`Here is you array of numbers sorted :${input_array}`);
    // alert(typeof input_array);
    return input_array;
}

/* task 2: Bubble Sort */

function Bubble_Sort (input_array=null) {
    var tmp;
    if (input_array==null){
        input_array = prompt("Please enter an array of numbers in the specific format like 4,3,2,1,-2,-3,-1,0...").split(",").map( e => parseInt( e, 10 ));
    }
    // alert("the input length is : "+ input_array.length)

    for(var i = 0; i < input_array.length-1; i++ ){
        j=0;
        while(j < input_array.length-1){
            if(input_array[j] > input_array[j+1]){
                tmp = input_array[j];
                input_array[j] = input_array[j+1];
                input_array[j+1] = tmp;
            }
            j++;
        }
    }
    alert(`Here is you array of numbers sorted :${input_array}`)
    return input_array;
}

/* Task 3: Insertion Sort */

function Insertion_Sort(input_array=null){
    var tmp;
    if (input_array==null){
        input_array = prompt("Please enter an array of numbers in the specific format like 4,3,2,1,-2,-3,-1,0...").split(",").map( e => parseInt( e, 10 ));
    }

    for(var i=0; i<input_array.length-1; i++){
        if(input_array[i] > input_array[i+1]){
            j=0;
            while(input_array[j] < input_array[i+1]){
                j++;
            }
            input_array.splice(j, 0,input_array[i+1]);
            input_array.splice(i+2, 1);

        }
    }
    alert(`Here is you array of numbers sorted :${input_array}`)
    return input_array;
}

/* task4: Linear Search */
function linear_search(input_array=null, element){
    var res;
    if (input_array==null){
        input_array = prompt("Please enter an array of numbers in the specific format like 4,3,2,1,-2,-3,-1,0...").split(",").map( e => parseInt( e, 10 ));
    }
    do {
        element = prompt("Please enter a correct element as second argument (as number) :");
    } while (element==null);

    for(var i=0; i<input_array.length-1; i++){
        if(input_array[i]==element){
            alert("the element has been found");
            return res=i;
            
        }
    }
    alert("the element has not been found");
    return false;
}

/* Task 5: */

function matrix_zero_occurrence(matrix=null){
    // var checked = false;
    var count=0;

    if (matrix==null){
        
        function built_matrix(row=null, col=null){
            do{
                col = parseInt(prompt("Enter the column number of the matrix"),10);
                row = parseInt(prompt("Enter the row number of the matrix"),10);
            }while (row==null || col == null)

            var res = [];
            var input;
             for(var i = 0; i < row; i++){
               res[i] = []
               input = prompt('Input: ')
               for(var j = 0; j < col; j++){
                 res[i][j] = input.split('');
               }
            }
            return res
        }
        matrix = built_matrix();
        // checked = true;
        alert(`${matrix}`);


    }
    
    for(var e of matrix){
        for (var in_e of e){
            if (in_e == 0){
                count++;
            }
        }
    }
    alert("The occurrence of the number 0 in the given matrix is :" + count);
    return count;
}