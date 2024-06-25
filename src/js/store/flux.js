const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicle: [],
			character: [],
			planets: [],
			favorites: "inicial desde flux",
			misFavorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeFavorites: (titulo) => {
				console.log("change favorites desde flux" + titulo)

				setStore({ favorites: titulo });

				const store = getStore();

				if (store.misFavorites.includes(titulo)) {
					console.log("Ya esta en favoritos")
					setStore({
						misFavorites: store.misFavorites.filter((favor)=>favor != titulo)
					})
				} else {
					setStore({ misFavorites: [...store.misFavorites, titulo] })
				}
				;
			},
			loadSomeData: () => {
				Promise.all([
				  fetch("https://www.swapi.tech/api/starships").then(response => response.json()),
				  fetch("https://www.swapi.tech/api/people").then(response => response.json()),
				  fetch("https://www.swapi.tech/api/planets").then(response => response.json())
				]).then(([starshipsData, characterData, planetsData]) => {
				  setStore({
					vehicle: starshipsData.results,
					character: characterData.results,
					planets: planetsData.results,
				  });
				}).catch(error => {
				  console.error('Error al cargar datos:', error);
				});
			  }
			  ,
		}
	};
};

export default getState;
