import { Request, Response } from "express"

// Listar todos os produtos
export const getProducts = (req: Request, res: Response) => {
      res.json({
            msg: 'Listar todos os produtos'
      })
};

// Listar um produto pelo id
export const getProduct = (req: Request, res: Response) => {
      const { id } = req.params;

      res.json({
            msg: "Listar um produto",
            id
      });
};

// Deletar um produto pelo id
export const deleteProduct = (req: Request, res: Response) => {
      const { id } = req.params;
      
      res.json({
            msg: 'Deletar um produto',
            id
      })
};

// Criar um produto
export const postProduct = (req: Request, res: Response) => {
      const { body } = req;

      res.json({
            msg: 'Criar um produto',
            body
      })
};

// Editar um produto
export const updateProduct = (req: Request, res: Response) => {
      const { id } = req.params;
      const { body } = req;
      
      res.json({
            msg: 'Editar um produto',
            id,
            body
      })
};