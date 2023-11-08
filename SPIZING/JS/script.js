botaoCor = document.getElementById("botao-cor");
botaoCor1 = document.getElementById("botao-cor1");
FundoSite = document.getElementById("body-site");
bannerHome = document.getElementById("banner-home");
FundoImgs = document.getElementsByClassName("area-imagem");
ProdutoTexto = document.getElementsByClassName("texto-produto");
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
    FundoImgs[0].style.backgroundColor = "#021020";
    FundoImgs[1].style.backgroundColor = "#021020";
    FundoImgs[2].style.backgroundColor = "#021020";
    FundoImgs[3].style.backgroundColor = "#021020";
    FundoImgs[4].style.backgroundColor = "#021020";
    FundoImgs[5].style.backgroundColor = "#021020";
    FundoImgs[6].style.backgroundColor = "#021020";
    areaProd.style.color = "#021020";
    areaSuporte.style.color = "#021020";
    areaForma.style.color = "#021020";
    areaForma.style.borderTop = "0.2vw solid #021020";
    areaContato.style.borderTop = "0.2vw solid #021020";
    areaContato.style.color = "#021020";
    linksProd[0].style.color = "#021020";
    linksProd[1].style.color = "#021020";
    linksProd[2].style.color = "#021020";
    linksProd[3].style.color = "#021020";
    linksProd[4].style.color = "#021020";
    linksProd[5].style.color = "#021020";
    linksProd[6].style.color = "#021020";
    linksProd[7].style.color = "#021020";
    linksProd[8].style.color = "#021020";
    linksProd[9].style.color = "#021020";
    linksProd[10].style.color = "#021020";
    linksProd[11].style.color = "#021020";
    linksProd[12].style.color = "#021020";
    linksProd[13].style.color = "#021020";
    linksProd[14].style.color = "#021020";
    linksProd[15].style.color = "#021020";
    linksProd[16].style.color = "#021020";

}

function voltarCor() {
    FundoSite.style.backgroundColor = "#021020";
    botaoCor.style.display = "grid";
    botaoCor1.style.display = "none";
    FundoImgs[0].style.backgroundColor = "#fff";
    FundoImgs[1].style.backgroundColor = "#fff";
    FundoImgs[2].style.backgroundColor = "#fff";
    FundoImgs[3].style.backgroundColor = "#fff";
    FundoImgs[4].style.backgroundColor = "#fff";
    FundoImgs[5].style.backgroundColor = "#fff";
    FundoImgs[6].style.backgroundColor = "#fff";
    areaProd.style.color = "#fff";
    areaSuporte.style.color = "#fff";
    areaForma.style.color = "#021020";
    areaForma.style.borderTop = "0.2vw solid #fff";
    areaContato.style.borderTop = "0.2vw solid #fff";
    areaContato.style.color = "#fff";
    linksProd[0].style.color = "#fff";
    linksProd[1].style.color = "#fff";
    linksProd[2].style.color = "#fff";
    linksProd[3].style.color = "#fff";
    linksProd[4].style.color = "#fff";
    linksProd[5].style.color = "#fff";
    linksProd[6].style.color = "#fff";
    linksProd[7].style.color = "#fff";
    linksProd[8].style.color = "#fff";
    linksProd[9].style.color = "#fff";
    linksProd[10].style.color = "#fff";
    linksProd[11].style.color = "#fff";
    linksProd[12].style.color = "#fff";
    linksProd[13].style.color = "#fff";
    linksProd[14].style.color = "#fff";
    linksProd[15].style.color = "#fff";
    linksProd[16].style.color = "#fff";
}

function carrossel2() {
    bannerHome.style.width = "99vw";
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
    bannerHome.style.width = "99vw";
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






