document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#submit').disabled = true;
    document.querySelector('#task').onkeyup = ()=> {
        if(document.querySelector('#task').value.length > 0){
            document.querySelector('#submit').disabled = false;
        }
        else{
            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
        
       const task = document.querySelector('#task').value;
       const li = document.createElement('li');
       li.innerHTML = task;
       
       document.querySelector('#tasks').append(li);
       document.querySelector('#task').value = '';
       document.querySelector('#submit').disabled = true;
       
       // bug: the task gets deleted by clicking on the screen and not on the task itself.
       document.addEventListener('click', function(){
           li.style.textDecoration = 'line-through'
       })
       document.addEventListener('dblclick', function(){
        document.querySelector('#tasks').removeChild(li);
    })
       return false;
        }
    }
    

    
);


