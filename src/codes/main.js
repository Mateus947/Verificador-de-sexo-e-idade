function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.querySelector("#nascimento").value
    var idade = Number(ano - nascimento)
    var div_saida = document.querySelector("#saida")
    var res = document.querySelector("#textsaida")
    var sexo = document.getElementsByName("radsex")
    var img = document.getElementById('imagem')
    
    // Condições para tratar exceções
    if(Number(nascimento) > ano || Number(nascimento) == 0 ){
        alert('ERRO REVEJA OS VALORES')
    }
    //Quando tudo estiver OK
    else{
        if(sexo[0].checked){
        var genero = ''
        genero = 'HOMEM'

            if(idade >= 0  && idade <= 11){
                img.setAttribute("src", "/src/assets/images/Criançahomem.jpg")
            }

            else if(idade >= 12 && idade <= 20){
                img.setAttribute("src", "/src/assets/images/Adolescentehomem.jpg")
            }

            else if(idade >= 21 && idade <= 59){
                img.setAttribute("src", "/src/assets/images/Homemadulto.jpg")
            }

            else if(idade >= 60 && idade <= 122){
                img.setAttribute("src", "/src/assets/images/Homemvelho.jpg")
            }

            else{
                img.setAttribute("src", "/src/assets/images/Caveira.jpg")
            }
        } 
        else if(sexo[1].checked){
            genero = 'Mulher'
    
            if(idade >= 0 && idade <= 11){
                img.setAttribute('src', '/src/assets/images/Criançamulher.jpg')
            }
    
            else if(idade >= 12 && idade <= 20){
                img.setAttribute('src', '/src/assets/images/Adolescentemulher.jpg')
            }
    
            else if(idade >= 21 && idade <= 59){
                img.setAttribute('src' , '/src/assets/images/Mulheradulta.jpg')
            }
    
            else if(idade >= 60 && idade <= 122){
                img.setAttribute('src', '/src/assets/images/Mulhervelha')
            }
    
            else{
                img.setAttribute('src', '/src/assets/images/Caveira.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        
    } 
}