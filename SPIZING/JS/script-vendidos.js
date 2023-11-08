botaoCor = document.getElementById("botao-cor");
botaoCor1 = document.getElementById("botao-cor1");
FundoSite = document.getElementById("body-site");
bannerHome = document.getElementById("banner-home");
FundoImgs = document.getElementsByClassName("area-imagem");
ProdutoTexto = document.getElementsByClassName("texto-produto");
Pesquisa = document.getElementById("area-pesquisa");
areaProd = document.getElementById("produto");
areaSuporte = document.getElementById("suporte");
areaForma = document.getElementById("forma");
areaContato = document.getElementById("contato");
linksProd = document.getElementsByClassName("elementoRoda");
var cont = 0;

function trocaCor() {
    FundoSite.style.backgroundColor = "#fff";
    botaoCor.style.display = "none";
    botaoCor1.style.display = "grid";
    Pesquisa.style.borderTop = "0.4vh solid #021020";
    Pesquisa.style.borderBottom = "0.4vh solid #021020";
    areaProd.style.color = "#021020";
    areaSuporte.style.color = "#021020";
    areaForma.style.color = "#021020";
    areaForma.style.borderTop = "0.2vw solid #021020";
    areaContato.style.borderTop = "0.2vw solid #021020";
    areaContato.style.color = "#021020";
}

function voltarCor() {
    FundoSite.style.backgroundColor = "#021020";
    botaoCor.style.display = "grid";
    botaoCor1.style.display = "none";
    Pesquisa.style.borderTop = "0.4vh solid #fff";
    Pesquisa.style.borderBottom = "0.4vh solid #fff";
    areaProd.style.color = "#fff";
    areaSuporte.style.color = "#fff";
    areaForma.style.color = "#021020";
    areaForma.style.borderTop = "0.2vw solid #fff";
    areaContato.style.borderTop = "0.2vw solid #fff";
    areaContato.style.color = "#fff";
}

function carrossel2() {
    bannerHome.style.width = "100vw";
    bannerHome.src = "imagens/banner4.png";
    setTimeout("slide2()", 3000)
}
    
    function slide2(){
        bannerHome.src = "imagens/banner2.png";
        setTimeout("slide3()", 3000)
    }

    function slide3(){
        bannerHome.src = "imagens/banner1.png";
        setTimeout("slide4()", 3000)
    }

    function slide4(){
        bannerHome.src = "imagens/banner3.png";
        setTimeout("carrossel2()", 3000)
    }

function carrossel(){
    bannerHome.style.width = "100vw";
    bannerHome.src = "imagens/banner4.png";
    setTimeout("slides2()", 3000)
    }
    
    function slides2(){
        bannerHome.src = "imagens/banner2.png";
    setTimeout("slides3()", 3000)
    }

    function slides3(){
        bannerHome.src = "imagens/banner1.png";
    setTimeout("slides4()", 3000)
    }
    
    function slides4(){
        bannerHome.src = "imagens/banner3.png";
    setTimeout("carrossel()", 3000)
}
