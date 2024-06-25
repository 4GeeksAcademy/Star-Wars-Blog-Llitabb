const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicle: [],
			character: [],
			planets: [],
			favorites: "inicial desde flux",
			myFavorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeFavorites: (titulo) => {
				setStore({ favorites: titulo });

				const store = getStore();

				if (store.myFavorites.includes(titulo)) {
					setStore({
						myFavorites: store.myFavorites.filter((favor)=>favor != titulo)
					})
				} else {
					setStore({ myFavorites: [...store.myFavorites, titulo] })
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
