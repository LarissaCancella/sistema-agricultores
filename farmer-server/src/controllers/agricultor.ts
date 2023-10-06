import { Request, Response } from 'express';
import Agricultor from '../models/agricultor';

export const getAgricultores = async (req: Request, res: Response) => {
    const listAgricultores = await Agricultor.findAll();
    res.json(listAgricultores)
}

export const getAgricultor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const agricultor = await Agricultor.findByPk(id);

    if(agricultor) {
        res.json(agricultor)
    } else {
        res.status(404).json({
            msg: `Não existe nenhum agricultor com o id ${id} cadastrado na base de dados `
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
        console.log(error)
        res.json({
            msg: 'Ocorreu um erro ao cadastrar o agricultor',
        })
    }
    
}

export const updateAgricultor = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    const agricultor = await Agricultor.findByPk(id);

    try {
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
        console.log(error)
        res.json({
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