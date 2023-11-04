'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    Codigo:{
        type: String,
        required: true,
        unique: true,
    },
    Descricao:{
        type: String,
        required: true,
    },
    Data_Inicio:{
        type: String,
        required: true,
    },
    Data_Fim:{
        type: String,
        required: true,
    },
    Tipo_Ato:{
        type: String,
        required: true,
    },
    Numero_Ato:{
        type: Number,
        required: true,
    },
    Ano_Ato:{
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Ncm', schema);