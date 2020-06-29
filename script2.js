function toSex() {
    var time = new Date()
    var year = time.getFullYear()
    var birth = document.getElementById('number').value
    var age = year - Number(birth)
    var ans = document.getElementById('res')
    var img = document.getElementById('screen')

    if (birth.length == 0 || birth > year) {
        alert('TA ERRADO ISSO DAE TAOKEY')
    } else if (birth < 1920) {
        alert('TA QUERENDO ME LUDIBRIAR CÊRO?')
    } else {
        var fem = document.getElementById('female')
        var masc = document.getElementById('male')
        var outro = document.getElementById('other')
        var sexo;
        if (fem.checked) {
            sexo = 'Feminino'
        } 

        if (masc.checked) {
            sexo = 'Masculino'
        }

        if (outro.checked) {
            sexo = 'Outro'
        
        } if (fem.checked && age <= 19) {
            ans.innerText = `You are a girl and have ${age} years`
            img.setAttribute('src', 'femchild.jpg')
        } else if (masc.checked && age <=19) {
            ans.innerText = `You are a boy and have ${age} years`
            img.src = 'mascchild.jpg'
        } else if (outro.checked && age <=19) {
            ans.innerText = `You are little combat helicopter and you're ${age} years`
            img.setAttribute('src', 'helchild.png')
        } else if (fem.checked && age <= 60) {
            ans.innertText = `You are an adult woman and have ${age} years`
            img.src = 'femadult.jpg' 
        } else if (masc.checked && age <= 60) {
            ans.innerText = `You are an adult man and have ${age} years`
            img.src = 'mascadult.png'
        } else if (outro.checked && age <= 60 ) {
            ans.innerText = `You are an adult combat helicopter and have ${age} years`
            img.src = 'heladult.png'
        } else if (fem.checked && age <= 100) {
            ans.innertText = `You are an old woman and you have ${age} years`
            img.src = 'femold.png'
        } else if (masc.checked && age <= 100) {
            ans.innertText = `You are an old man and you have ${age} years`
            img.src = 'mascold.jpg'
        } else if (outro.checked && age <=100) {
            ans.innerText = `You are an old combat helicopter and you have ${age} years`
            img.src = 'helold.jpg'
            }
        }
}