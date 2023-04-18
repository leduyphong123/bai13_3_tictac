let show = document.getElementById("show");
let startArr = ["(.)", "(.)", "(.)", "(.)", "(.)"];
let arr=result = [];
for (let i = 0; i < startArr.length; i++) {
    arr[i] = startArr;
}

showValue();

let change = document.getElementById("change");
change.addEventListener("click", changeValue);

let count = 1;
function changeValue() {
    let x = parseInt(prompt("nhap toa do x"));
    let y = parseInt(prompt("nhap toa do y"));
    if (count % 2 != 0) {
        arr[x][y] = "o";
        showValue();
        checkWin();
        count++;
    } else {
        arr[x][y] = "x";
        showValue();
        checkWin();
        count++;
    }
}

function showValue() {
    let showValue = "";
    for (let i = 0; i < arr.length; i++) {
        showValue = showValue + arr[i] + "<br/>";
    }
    show.innerHTML = showValue;
}

function checkWin() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] == "o" && arr[i][j + 1] == "o" && arr[i][j + 2] == "o") {
                alert("o win");
                arr=result;
            } else if (arr[i][j] == "o" && arr[i + 1][j] == "o" && arr[i + 2][j] == "o") {
                alert("o win");
                arr=result;
            } else if (arr[i][j] == "x" && arr[i][j + 1] == "x" && arr[i][j + 2] == "x") {
                alert("x win");
                arr=result;
            } else if (arr[i][j] == "x" && arr[i + 1][j] == "x" && arr[i + 2][j] == "x") {
                alert("x win");
                arr=result;
            }
        }
    }
}