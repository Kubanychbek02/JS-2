document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('guess-input');
    const message = document.querySelector('.message');
    const btn = document.getElementById('guess-btn');
    let click = 3;

    const randomNum = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    console.log(randomNum)

    btn.addEventListener('click', () => {
        const userNum = input.value;
        click -= 1;

        if (userNum == randomNum) {
            message.innerHTML = `${userNum} Вы угадали`;
            input.style.border = 'solid 1px green'
            message.style.color = 'green';
            btn.innerHTML = 'Новая игра';

            setTimeout(() => {
                btn.click = location.reload();
            }, 3000);
        }
        
        else if(userNum === '') {
            message.innerHTML = ` Нужно вести число от 0 до 10`;
            input.style.border = 'solid 1px red'
            message.style.color = 'red'
            click += 1;
        }
        else  {
            message.innerHTML = `${userNum} не правильно, у вас осталось ${click} попытки`;
            input.style.border = 'solid 1px red'
            message.style.color = 'red'
        }

        if(click === 0) {
            btn.innerHTML = 'Новая игра';
            message.innerHTML = `рандомное число ${randomNum}`
        } else if(click === -1) {
            btn.click = location.reload()   
        }
    })
});