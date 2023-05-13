let count = 0
let countEl=document.getElementById("count-el")
let messageEl=document.getElementById("message")
let arr=[messageEl.textContent]
function increment(){
    count += 1
    countEl.textContent = count
}
function decrement(){
    count -= 1
    countEl.textContent = count
}
function save(){
     messageEl.textContent += countEl.textContent + " - "
     arr.push(messageEl.textContent)
     countEl.textContent = 0
     count=0
}
function deleteEntry(){
        if(arr.length>1){
            arr.pop() 
            messageEl.textContent=arr[arr.length-1]   
        }else{
            deletebtn()
        }          
}
function deletebtn(){
    messageEl.textContent=arr[0]

}