import Botao from "./Botao";

function App(){

		const botao = [
			
		];

	return(

		<div className="cont"> 
			{
			palavras.map((cons, cont) => {
					return <Botao key={cont}
							title={cons.title}
						/>;
				})
			}
	  </div>
	);
}

export default App;
