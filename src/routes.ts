import { Router } from "express";
import {CreatePagamentoController} from './controllers/pagamento/CreatePagamentoController';
import {ListarTodosPagamentoController} from './controllers/pagamento/ListarTodosPagamentoController';
import {ListarByPagamentosController} from './controllers/pagamento/ListarByPagamentosController';

const router = Router();

//ROTAS DE PAGAMENTO
router.post('/create_pagamento', new CreatePagamentoController().handle);
router.get('/all_pagamentos', new ListarTodosPagamentoController().handle);
router.get('/pagamentos/codigo', new ListarByPagamentosController().handle);


export {router};