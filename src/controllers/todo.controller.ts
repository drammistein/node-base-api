import { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const all = async (req: Request, res: Response) => {
    const list = await Todo.findAll();
    res.json({ //retorno
        list: list
    });
}

export const add = async (req: Request, res: Response) => {
    if(req.body.title) {
        // Criar a tarefa
        let newTodo = await Todo.create({
            title: req.body.title,
            done: req.body.done ? true : false
        });
        // Retorno dos dados
        res.status(201).json({ item: newTodo });
    } else {
        res.json({ error: 'Dados não enviaddos.'});
    }
}

export const update = async () => {

}

export const remove = async () => {

}