// This prints 4 five times.
// let number;
//
// for (var i = 0; i< 5; i++){
//   number = i;
//   setTimeout(function(){
//     console.log(number);
//   },1000)
// }


// This prints 5 five times
// Without number;
// this is
// for (var i = 0; i< 5; i++){
//   setTimeout(function(){
//     console.log(i);
//   },1000)
// }

// fix - change let to var to allow block scoping
// for (let i = 0; i< 5; i++){
//   setTimeout(function(){
//     console.log(i);
//   },1000)
// }


// Create a user defined table accepting rows and columns:

// number of rows 4:
// number of columns 5:
// "submit"

//** print this:
1 8 9 16 17  even: rows * colIndex + 1 => 4*2 + 1 = 9 , odd: rows * (colIndex + 1) => 4*(1+1)  = 8
2 7 10 11 18 even: matrix[rowIndex-1][colIndex]+1  => 9+1 = 10, odd: matrix[rowIndex-1][colIndex]-1 =
3 6 11 14 19
4 5 12 13 20


<body>
  <form id="form">
    <label for="rows">number of rows: </label>
    <input type="text" name="rows" id="row"/>

    <label for="columns">number of columns: </label>
    <input type="text" name="columns" id="col"/>

    <input type="submit" onClick="createTable()" value="Submit" id="button" />
  </form>
  <table id="zigzagTable"></table>
</body>
<script>

  document.querySelector('#button').addEventListener('click', function(event){
      event.preventDefault();
    });

    function createTable(){
      let rows = document.getElementById("row").value; //4
      let cols = document.getElementById("col").value; // 5


      let matrix = [];
      for ( let rowIndex = 0; rowIndex < rows; rowIndex++){
        let currentRow =[];
        let r = document.getElementById("zigzagTable").insertRow(rowIndex);

        for (let colIndex =0; colIndex < cols; colIndex++){
          let c = r.insertCell(colIndex);

          if (colIndex === 0){
            currentRow.push(rowIndex + 1);
            c.innerHTML = rowIndex + 1;
          } else if (rowIndex === 0){
            if (colIndex % 2 === 0){
              currentRow.push(rows * colIndex + 1);
              c.innerHTML = rows * colIndex + 1;
            } else {
              currentRow.push(rows * (colIndex + 1));
              c.innerHTML = rows * colIndex + 1;
            }
          } else {
            if (colIndex % 2 === 0){
              currentRow.push(matrix[rowIndex -1][colIndex] + 1);
              c.innerHTML = matrix[rowIndex-1][colIndex] + 1;
            } else {
              currentRow.push(matrix[rowIndex-1][colIndex -1]);
              c.innerHTML = matrix[rowIndex-1][colIndex] -   1;
            }
          }
        }
        matrix.push(currentRow);
      }
    }

</script>
