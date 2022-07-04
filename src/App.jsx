import Botao from "./Botao";

function App(){

		const botao = [
			{
				title: "linux",
			},
			{
				title: "docker",
			},
			{
				title: "server",
			},
			{
				title: "rails",
			},
			{
				title: "douane",
			},
			{
				title: "my-developments",
			},
			{
				title: "command-line",
			},
			{
				title: "ruby",
			},
			{
				title: "c-2",
			},
			{
				title: "linux-on-mac",
			},
			{
				title: "maintenance",
			},
			{
				title: "security",
			},
			{
				title: "gnome",
			},
			{
				title: "kubernetes",
			},
			{
				title: "mes-developpements",
			},
			{
				title: "ubuntu",
			},
			{
				title: "python",
			},
			{
				title: "vcs",
			},
			{
				title: "capybara",
			},
			{
				title: "contribution",
			},
			{
				title: "git",
			},
			{
				title: "apt",
			},
			{
				title: "bazaar",
			},
			{
				title: "chef",
			},
			{
				title: "cucumber",
			},
			{
				title: "debian",
			},
			{
				title: "game",
			},
			{
				title: "howto",
			},
			{
				title: "packaging",
			},
			{
				title: "testing",
			},
			{
				title: "boost",
			},
			{
				title: "debug",
			},
			{
				title: "devise",
			},
			{
				title: "elixir",
			},
			{
				title: "gtk",
			},
			{
				title: "homebrew",
			},
			{
				title: "information",
			},
			{
				title: "ssh",
			},
			{
				title: "tuxtremsplit",
			},
			{
				title: "xpath",
			},
		];

	return(

		<div className="cont"> 
			{
			botao.map((cons, cont) => {
					return <Botao key={cont}
							title={cons.title}
						/>;
				})
			}
	  </div>
	);
}

export default App;
