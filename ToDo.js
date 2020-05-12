/* Logic for addding an item */
function AddItem() {
    var tr = document.createElement('tr');
    var inputValue = document.getElementById('ItemName').value;
    var t = document.createTextNode(inputValue);
    tr.appendChild(t);
    if (inputValue === '') {
        alert('Helllo')
    } else {
        document.getElementById("mytd").appendChild(tr);
    }
    document.getElementById("ItemName");
console.log(inputValue);
}