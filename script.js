let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
screenValue = ""
for(item of buttons)
{
    item.addEventListener('click',(e)=>
    {
        buttontext = e.target.innerText;
        console.log('button text is ',buttontext);
        if(buttontext=='X')
        {
            buttontext= '*';
            screenValue += buttontext;
            screen.value = screenValue;
        }
        else if(buttontext=='C')
        {
            screen.value = "";
            screenValue = screen.value;

        }
        else if(buttontext=='=')
        {
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttontext;
            screen.value = screenValue;
        }
    })
}