'use strict'
const repository = require('../repositories/ncm-repository');
const mongoose = require('mongoose');

exports.get = async(req, res, next)=>{
    try{
        var data = await repository.get();
        res.status(200).send({data});
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getByCod = async(req, res, next)=>{
    try{
        var data = await repository.getByCod(req.params.Codigo);
        res.status(200).send({data});
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getCapitulo = async(req, res, next)=>{
    try{
        var data = await repository.getCapitulo(req.params.Codigo);
        res.status(200).send({data});
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}