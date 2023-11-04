'use strict'
const mongoose = require('mongoose');
const Ncm = mongoose.model('Ncm');

exports.get = async()=>{
    const res = await Ncm.find({}, 'Codigo Descricao');
    return res;
}

exports.getByCod = async(cod)=>{
    let res;
    res = await Ncm.findOne({
        Codigo: cod
    }, 'Codigo Descricao');
    return res;
}

exports.getCapitulo = async(cod)=>{
    let res;
    res = await Ncm.findOne({
        Codigo: cod.substr(0, 2),
    }, 'Codigo Descricao')
    return res;
}