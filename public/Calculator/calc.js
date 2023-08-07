let string = "";
let str2 = "";
let num = 0;
let buttons = document.querySelectorAll('.button');
let inputSpace = document.querySelector('.input');
buttons.forEach(buttonItem => {
    buttonItem.addEventListener('click', function clickEvent(e){
        switch (e.target.innerHTML) {
            case '=':
                num = eval(str2);
                string = num.toString();
                str2=string;
                break;
            
            case '×':
                string = string + e.target.innerHTML;
                str2 = str2 + "*";
                break;
                
            case '÷':
                string = string + e.target.innerHTML;
                str2= str2 + "/";
                break;

            case '%':
                string = string + e.target.innerHTML;
                str2 = str2 + "/100";
                break;

            case 'backspace':
                string = string.substring(0, string.length-1);
                str2 = str2.substring(0, string.length-1);
                break;

            case '<i class="material-icons">backspace</i>':
                string = string.substring(0, string.length-1);
                str2 = str2.substring(0, string.length-1);
                break;

            case 'C':
                string = "";
                str2 = "";
                break;

            default:
                string = string + e.target.innerHTML;
                str2 = str2 + e.target.innerHTML;
                break;
        }
        inputSpace.value = string;
    })
});