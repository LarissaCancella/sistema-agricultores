import { Request, Response } from 'express';
import Agricultor from '../models/agricultor';

export const getAgricultores = async (req: Request, res: Response) => {
    try {
        const listAgricultores = await Agricultor.findAll();
        res.json(listAgricultores)
    } catch (error) {
        res.status(400).json({
            msg: `Erro ao buscar agricultores`
        })
    }
    
}

export const getAgricultor = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        const agricultor = await Agricultor.findByPk(id);

        if(agricultor) {
            res.json(agricultor)
        } else {
            res.status(404).json({
                msg: `Não existe nenhum agricultor com o id ${id} cadastrado na base de dados `
            })
        }
    } catch (error) {
        res.status(400).json({
            msg: `Erro ao buscar agricultor de id ${id}`
        })
    }
    
 
}

export const postAgricultor = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Agricultor.create(body);

        res.json({
            msg: 'Agricultor cadastrado com sucesso!',
            body
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Ocorreu um erro ao cadastrar o agricultor',
        })
    }
    
}

export const updateAgricultor = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const agricultor = await Agricultor.findByPk(id);

        if(agricultor) {
            await agricultor.update(body);
            res.json({
                msg: 'Agricultor atualizado com sucesso!',
                body
            })
        } else {
            res.status(404).json({
                msg: `Não existe nenhum agricultor com o id ${id} cadastrado na base de dados `
            })
        }
    } catch (error) {
        res.status(400).json({
            msg: 'Ocorreu um erro ao atualizar o agricultor',
        })
    }
}

export const deleteAgricultor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const agricultor = await Agricultor.findByPk(id);

    if(agricultor) {
        await agricultor.destroy();
        res.json({
            msg: "O agricultor foi excluído com sucesso!"
        })
    } else {
        res.status(404).json({
            msg: `Não existe nenhum agricultor com o id ${id} cadastrado na base de dados `
        })
    }
}