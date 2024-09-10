$(".banner").slick({
    autoplaySpeed: 4000,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

class comidas {
    constructor(nome, descricaor, descricao, igredientes){
        this.nome = nome;
        this.descricaor = descricaor;
        this.descricao = descricao;
        this.igredientes = igredientes;
    };
    
};

var selecionado = new comidas ("", "", "", "");


const pratos = document.querySelectorAll(".prato");

pratos.forEach((prato) => {
    
    prato.addEventListener('click', () => {
        localStorage.clear();
        var h1 = prato.querySelector("h1")
        localStorage.setItem("pratoclicado", h1.textContent);
    });
});

function UsarJson() {
    fetch("dados.json")
    .then(res => res.text())
    .then(res => {
        res=JSON.parse(res);

        var pratoClicado = localStorage.getItem('pratoclicado');

        document.querySelector(".Imagem").src = res[pratoClicado].Img;
        document.querySelector(".Nomebase").innerHTML = res[pratoClicado].Nome;
        document.querySelector(".DescricaoR").innerHTML = res[pratoClicado].DescricaoR;
        document.querySelector(".Descricao").innerHTML = res[pratoClicado].Descricao;
        document.querySelector(".Igredientes").innerHTML = res[pratoClicado].Ingredientes;

    });
    
};



document.querySelector(".barraDP").addEventListener('input', function() {
    const Filtro = this.value.toLowerCase();
    document.querySelectorAll(".prato").forEach(function(div) {
        const h1Text = div.querySelector('h1').textContent.toLowerCase();
        div.style.display = h1Text.includes(Filtro) ? "" : "none";
    });

    if (this.value) {
        const ancoras = document.querySelectorAll(".ancoras");
        for (var i = 0; i<ancoras.length; i++){
            ancoras[i].style.display = "none";
        };
    } else {
        const ancoras = document.querySelectorAll(".ancoras");
        for (var i = 0; i<ancoras.length; i++){
            ancoras[i].style.display = "";
        };
    };
});


