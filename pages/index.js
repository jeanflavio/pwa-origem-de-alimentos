import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'


import {
    Card, CardImg, CardTitle, CardSubtitle, 
  } from 'reactstrap';


function Index({dados}) {

    return (

        <div className="card-wrapper">            
                {dados.produtos.slice(0,4).map(produto => (
                    <Card className="card">
                    <CardImg  classname="img-card"src={produto.imagem} alt="Card image cap" />
                        <CardTitle tag="h5">{produto.nome}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{produto.categoria}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{produto.fornecedor}</CardSubtitle>
                    </Card>
                ))}        
        </div>
       
    )
}

Index.getInitialProps = async () =>{
    const response = await axios.get(
        'https://vitrine.alimentodeorigem.com.br/api/inicio'
    );

    return { dados:  response.data}
};

export default Index;