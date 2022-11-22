import {Request, Response} from 'express';
import {ListarByPagamentosService} from '../../services/pagamentos/ListarByPagamentosService';

class ListarByPagamentosController{

    async handle(req: Request, res: Response){

        const codigo = req.query.codigo as string;

        const listByPagamentos = new ListarByPagamentosService();

        const pagamento = await listByPagamentos.execute({
            codigo
        })

        return res.json(pagamento);

    }

}

export {ListarByPagamentosController}