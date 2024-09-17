const btn = document.querySelector('#no')
const height = document.documentElement.scrollHeight / 4
const width = document.documentElement.scrollWidth / 2

function randomWidth(max){
    do {
        var position = btn.getBoundingClientRect();
        var current = position.left;
        
		const randomer = Math.ceil(Math.random() * 10)

        const x = Math.ceil(Math.random() * max)
        if(10 <= x + current <= width){
            if(randomer % 2 === 0){
                return x * -1
            } else if(randomer % 2 != 0){
                return x
            }
        }
    } while (True)
}

function randomHeight(max){
    do {
        var position = btn.getBoundingClientRect();
        var current = position.top;

		const randomer = Math.ceil(Math.random() * 10)


        const y = Math.ceil(Math.random() * max)
        if(10 <= y + current <= height){
            if(randomer % 2 === 0){
                return y * -1
            } else if(randomer % 2 != 0){
                return y
            }
        }

    } while (True)
}

btn.addEventListener('mouseover', function () {
    btn.style.transform = `translate(${randomWidth(width)}px, ${randomHeight(height)}px)`;
})