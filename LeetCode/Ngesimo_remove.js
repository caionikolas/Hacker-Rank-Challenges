
function remove(head,n){
    if (n == head.length-1){
        head.splice(head[n-1],1)
    } else{
        head.splice(head[n],1)
    }
    console.log(head)
};

remove([1,2],1);

remove([1],1);

remove([1,2,3,4,5], 2);