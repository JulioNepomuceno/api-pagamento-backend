import prismaClient from "../../prisma";

interface PagamentoRequest{
    id: string;
    codigo : string;
    nometipopagamento : string;
    descricao: string;
    status: string;
    nomepessoacadastro: string;
}

class UpdatePagamentoService{

    async execute({id,codigo, nometipopagamento,descricao,status,nomepessoacadastro}:PagamentoRequest){

        const updatePagamento = await prismaClient.pagamentos.update({
            where:{
                id:  id
            },
            data:{
                codigo: codigo, 
                nometipopagamento: nometipopagamento,
                descricao: descricao,
                status: status,
                nomepessoacadastro: nomepessoacadastro
            }
        })

        return updatePagamento;
        
    }
}

export{UpdatePagamentoService}