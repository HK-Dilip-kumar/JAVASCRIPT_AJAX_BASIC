document.getElementById('button').addEventListener('click',loadData);


function loadData()
{
    //create the new XMLHTTPrequest Object 
    const xhr= new XMLHttpRequest();

    //open the connection
    xhr.open('GET','data.txt',true);

    //Execution of the ajax call
    // xhr.onload=function(){
    //     console.log(this.status) 
    //     //if file is found then 200 if 
    //     //invalid file then 404 error
    //     // 403 forbidden
    //     if(this.status===200){
    //             document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`;
    //         }
    // }

    
    //another way of ajax call 
    xhr.onreadystatechange=function(){
        console.log('ReadyState',xhr.readyState);
        if(this.status===200 && this.readyState===4)
        {
            document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`;  
        }

    }


    xhr.send();


}