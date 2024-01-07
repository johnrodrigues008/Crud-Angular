import { Request, Response } from "express"
import Product from "../models/productModels";

// Listar todos os produtos
export const getProducts = async (req: Request, res: Response) => {
      try {
            const listProduct = await Product.findAll();

            res.json(listProduct);

      } catch (error) {
            res.json(`Erro ao listar todos os produtos: ${error}`);
      }
};

// Listar um produto pelo id
export const getProduct = async (req: Request, res: Response) => {
      try {
            const { id } = req.params;
            const product = await Product.findByPk(id);
      
            if(product) {
                  res.json(product);
            } else {
                  res.status(404).json({
                        msg: `Não existe um usuário com o id: ${id}`
                  })
            };
            
      } catch (error) {
            res.json(`Erro ao listar o produto: ${error}`);
      }

};

// Deletar um produto pelo id
export const deleteProduct = async (req: Request, res: Response) => {

      try {
            const { id } = req.params;
            const product = await Product.findByPk(id);
      
            if(!product){
                  res.status(404).json({
                    msg: `Não existe um usuário com o id: ${id}`,
                  });
            } else {
                  await product.destroy();
                  res.json({
                        msg: `Produto deletado com sucesso!`
                  })
            };
      } catch (error) {
            res.json(`Erro ao deletar o produto: ${error}`);
      }

};

// Criar um produto
export const postProduct = async (req: Request, res: Response) => {

      try {
            const { body } = req;
      
            await Product.create(body);
      
            res.json({
                  msg: `Produto criado com sucesso!`
            });
      } catch (error) {
            res.json(`Erro ao criar o produto: ${error}`);
      }

};

// Editar um produto
export const updateProduct = async (req: Request, res: Response) => {
      
      const { id } = req.params;
      const { body } = req;
      
      try {
            const product = await Product.findByPk(id);

            if(product){
                  await product.update(body);
                  res.json({
                        msg: `O produto foi editado com sucesso!`
                  })
            } else {
                  res.status(404).json({
                        msg: `Não existe um usuário com o id: ${id}`,
                  })
            }
      
            
      } catch (error) {
            res.json(`Erro ao editar o produto: ${error}`);
      }
      
};