import prismaClient from "../../prisma";

interface PagamentoRequest{
    codigo: string;
}

class ListarByPagamentosService
{
    async execute({codigo}:PagamentoRequest){

        const findbyPagamento = await prismaClient.pagamentos.findMany({
            where:{
                codigo: codigo
            }
        })

        return findbyPagamento;
        
    }
}

export {ListarByPagamentosService}