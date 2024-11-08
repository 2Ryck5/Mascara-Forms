function mascara_telefone(){
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0]!="(")
    {
        if(tel_formatado[0]!=undefined)
        {
            document.getElementById("telefone").value="("+tel_formatado[0];
        }
    }

    if (tel_formatado[3]!=")")
    {
        if(tel_formatado[3]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
            mascara_telefone()
        }
        
    }
    
    if (tel_formatado[4]!=" ")
    {
        if(tel_formatado[4]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,4)+" "+tel_formatado[4]
        }

    }
    
    if (tel_formatado[6]!=" ")
    {
        if(tel_formatado[6]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,6)+" "+tel_formatado[6]
        }
    }


    if (tel_formatado[11]!="-")
    {
        if(tel_formatado[11]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,11)+"-"+tel_formatado[11]
        }
    }
}


function mascara_cep(){ 
    var cep_formatado = document.getElementById("CEP").value
    if (cep_formatado[2]!=".")
    {
        if (cep_formatado[2]!=undefined)
        {
            document.getElementById("CEP").value=cep_formatado.slice(0,2)+"."+cep_formatado[2];
        }
    }

    if (cep_formatado[6]!="-")
    {
        if(cep_formatado[6]!=undefined)
        {
            document.getElementById("CEP").value=cep_formatado.slice(0,6)+"-"+cep_formatado[6]
        }
    }

}   

function mascara_CPF(){
    var CPF_formatado = document.getElementById("CPF").value
    if (CPF_formatado[3]!=".")
    {
        if (CPF_formatado[3]!=undefined)
        {
            document.getElementById("CPF").value=CPF_formatado.slice(0,3)+"."+CPF_formatado[3];
        }
    }

    if (CPF_formatado[7]!=".")
    {
        if(CPF_formatado[7]!=undefined)
        {
            document.getElementById("CPF").value=CPF_formatado.slice(0,7)+"."+CPF_formatado[7]
        }
    }
    
    if (CPF_formatado[11]!="-")
    {
        if(CPF_formatado[11]!=undefined)
        {
            document.getElementById("CPF").value=CPF_formatado.slice(0,11)+"-"+CPF_formatado[11]
        }
    }

}
function mascara_CNPJ(){
    var CNPJ_formatado = document.getElementById("CNPJ").value
    if (CNPJ_formatado[2]!=".")
    {
        if (CNPJ_formatado[2]!=undefined)
        {
            document.getElementById("CNPJ").value=CNPJ_formatado.slice(0,2)+"."+CNPJ_formatado[2];
        }
    }

    if (CNPJ_formatado[6]!=".")
    {
        if (CNPJ_formatado[6]!=undefined)
        {
            document.getElementById("CNPJ").value=CNPJ_formatado.slice(0,6)+"."+CNPJ_formatado[6];
        }
    }

    if (CNPJ_formatado[10]!="/")
    {
        if (CNPJ_formatado[10]!=undefined)
        {
            document.getElementById("CNPJ").value=CNPJ_formatado.slice(0,10)+"/0001"+CNPJ_formatado[10];
            mascara_CNPJ()
        }
    }
    if (CNPJ_formatado[11]!="0")
    {
        if (CNPJ_formatado[11]!=undefined)
        {
            document.getElementById("CNPJ").value=CNPJ_formatado.slice(0,11)+"0001"+CNPJ_formatado[11];
            mascara_CNPJ()
        }
    }
    if (CNPJ_formatado[12]!="0")
    {
        if (CNPJ_formatado[12]!=undefined)
        {
            document.getElementById("CNPJ").value=CNPJ_formatado.slice(0,12)+"001"+CNPJ_formatado[12];
            mascara_CNPJ()
        }
    }
    if (CNPJ_formatado[13]!="0")
    {
        if (CNPJ_formatado[13]!=undefined)
        {
            document.getElementById("CNPJ").value=CNPJ_formatado.slice(0,13)+"01"+CNPJ_formatado[13];
            mascara_CNPJ()
        }
    }
    if (CNPJ_formatado[14]!="1")
    {
        if (CNPJ_formatado[14]!=undefined)
        {
            document.getElementById("CNPJ").value=CNPJ_formatado.slice(0,14)+"1"+CNPJ_formatado[14];
            mascara_CNPJ()
        }
    }



    if (CNPJ_formatado[15]!="-")
    {
        if (CNPJ_formatado[15]!=undefined)
        {
            document.getElementById("CNPJ").value=CNPJ_formatado.slice(0,15)+"-"+CNPJ_formatado[15];
        }
    }

}

function mascara_codigo(){
    var CODIGO_formatado = document.getElementById("CODIGO").value
    if (CODIGO_formatado[2]!="_")
    {
        if (CODIGO_formatado[2]!=undefined)
        {
            document.getElementById("CODIGO").value=CODIGO_formatado.slice(0,2)+"_"+CODIGO_formatado[2];
        }
    }
    if (CODIGO_formatado[5]!="/")
    {
        if (CODIGO_formatado[5]!=undefined)
        {
            document.getElementById("CODIGO").value=CODIGO_formatado.slice(0,5)+"//"+CODIGO_formatado[5];
        }
    }
    if (CODIGO_formatado[10]!="-")
    {
        if (CODIGO_formatado[10]!=undefined)
        {
            document.getElementById("CODIGO").value=CODIGO_formatado.slice(0,10)+"-"+CODIGO_formatado[10];
        }
    }
    if (CODIGO_formatado[14]!=".")
    {
        if (CODIGO_formatado[14]!=undefined)
        {
            document.getElementById("CODIGO").value=CODIGO_formatado.slice(0,14)+"."+CODIGO_formatado[14];
            mascara_CNPJ()
        }
    }
    if (CODIGO_formatado[15]!="9")
    {
        if (CODIGO_formatado[15]!=undefined)
        {
            document.getElementById("CODIGO").value=CODIGO_formatado.slice(0,15)+"9"+CODIGO_formatado[15];
            
        }
    }
    if (CODIGO_formatado[16]!=".")
    {
        if (CODIGO_formatado[16]!=undefined)
        {
            document.getElementById("CODIGO").value=CODIGO_formatado.slice(0,16)+"."+CODIGO_formatado[16];
        }
    }
}


function Save_datas(){

    let input_nome = document.getElementById("Nome").value
    let input_endereco = document.getElementById("Endereco").value
    let input_CEP = document.getElementById("CEP").value
    let input_CPF = document.getElementById("CPF")
    let input_telefone = document.getElementById("telefone")
    let input_CNPJ = document.getElementById("CNPJ")
    let input_CODIGO = document.getElementById("CODIGO")

    localStorage.setItem("Nome", input_nome)
    localStorage.setItem("Endereco", input_endereco)
    localStorage.setItem("CEP", input_CEP)
    localStorage.setItem("CPF", input_CPF)
    localStorage.setItem("telefone", input_telefone)
    localStorage.setItem("CNPJ", input_CNPJ)
    localStorage.setItem("CODIGO", input_CODIGO)
    window.location.href = "confirm.html"
}

function read_datas(){
    let input_nome = localStorage.getItem("Nome")
    let input_endereco = localStorage.getItem("Endereco")
    let input_CEP = localStorage.getItem("CEP")
    let input_CPF = localStorage.getItem("CPF")
    let input_telefone = localStorage.getItem("telefone")
    let input_CNPJ = localStorage.getItem("CNPJ")
    let input_CODIGO = localStorage.getItem("CODIGO")

    console.log(input_nome)

}