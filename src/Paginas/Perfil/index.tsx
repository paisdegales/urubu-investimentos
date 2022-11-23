import React, { useState } from "react";

import { Header } from "../../Componentes/Header";
import { Sidebar } from "../../Componentes/Sidebar";
import { CardPerfil } from "../../Componentes/CardPerfil";
import { NovoInvestimento } from "../../Componentes/NovoInvestimento";

import { Cadastro } from "../../Popups/Cadastro";
import { Entrar } from "../../Popups/Entrar";
import { RemoverCartao } from "../../Popups/RemoverCartao";

import "./index.css";

export const Perfil = () => {

	const [ showCadastro, setCadastro ] = useState(false);
	const [ showEntrar, setEntrar ] = useState(false);
    const [ sidebar, setSidebar ] = useState(true)

	const fechaCadastro = () => {
		setCadastro(false);
	}

	const abreCadastro = () => {
		setCadastro(true);
	}

	const fechaEntrar = () => {
		setEntrar(false);
	}

	const abreEntrar = () => {
		setEntrar(true);
	}

	return (
		<div className="inicial">
			<Header
				abreCadastro={abreCadastro}
				fechaCadastro={fechaCadastro}
				abreEntrar={abreEntrar}
				fechaEntrar={fechaEntrar}
                toggleSidebar={() => setSidebar(anterior => !anterior)}
			/>

            <main>
                { sidebar && <Sidebar /> }
                <section className="conteudo-principal">
                    <CardPerfil
                        nome="David Messias"
                        saldo="10,00"
                        investimentos={10}
                        lucrou="-100,00"
                        cartoes={["Cartão 1", "Cartão 2"]}
                    />

                    <NovoInvestimento/>
                </section>
            </main> 
            
			{ showEntrar && <Entrar fechaEntrar={fechaEntrar}/>}
			{ showCadastro && <Cadastro fechaCadastro={fechaCadastro}/> }

		</div>
	);
}