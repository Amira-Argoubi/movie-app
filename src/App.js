import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/home/home";
import SignIn from "./Components/signIn/signin";
import Detail from "./Components/home/detailsMovie";
import Favoris from "./Components/home/favouriteMovie";
import SignInValiationForm from "./Components/signUp/signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Tof1 from "./Components/home/film1.jpg";
import Tof2 from "./Components/home/film2.jpg";
import Tof3 from "./Components/home/film3.jpg";
import Tof4 from "./Components/home/film4.jpg";
import Tof5 from "./Components/home/film5.jpg";
import Tof6 from "./Components/home/film6.jpg";
import Tof7 from "./Components/home/film7.jpg";
import Tof8 from "./Components/home/film8.jpg";

class App extends Component {
  movies = [
    {
      name: "The Mask",
      description:
        "The Mask (Le Masque au Québec) est un film américain humoristique réalisé par Chuck Russell, sorti en 1994. Le film s'inspire d'une série de comics publiée par Dark Horse Comics. Une série d'animation a été réalisée à partir du film et diffusée de 1995 à 1997. Une suite, Le Fils du Mask, est sortie en 2005.. ",
      rating: "*****",
      image: Tof8,
      id: "001",
    },
    {
      name: " Pearl Harbor  ",
      description:
        "Pearl Harbor est un film américain réalisé par Michael Bay, sorti en 2001. Scénarisé par Randall Wallace et produit par Jerry Bruckheimer, il met notamment en vedette Ben Affleck, Josh Hartnett, Kate Beckinsale, Cuba Gooding Jr., Tom Sizemore, Jon Voight, Colm Feore et Alec Baldwin.",
      rating: "***",
      image: Tof2,
      id: "002",
    },
    {
      name: "Intouchables",
      description:
        "Intouchables raconte l'histoire d'une forte amitié entre un riche aristocrate, Philippe, devenu paraplégique suite à un accident de parapente, et Driss, un jeune de banlieue tout juste sorti de prison qu'il va engager",
      rating: "***",
      image: Tof6,
      id: "003",
    },
    {
      name: "Pirates of the caribbean",
      description:
        "Le premier film reprend la thématique de l'attraction très populaire Pirates of the Caribbean ouverte en 1967 à Disneyland, en Californie, et utilisant le système audio-animatronic. La franchise suit les aventures du capitaine pirate Jack Sparrow interprété par Johnny Depp.",
      rating: "****",
      image: Tof3,
      id: "004",
    },
    {
      name: "A star is born",
      description:
        "Star de country un peu oubliée, Jackson Maine découvre Ally, une jeune chanteuse très prometteuse. Tandis qu'ils tombent follement amoureux l'un de l'autre, Jack propulse Ally sur le devant de la scène et fait d'elle une artiste adulée par le public. Bientôt éclipsé par le succès de la jeune femme, il vit de plus en plus de mal son propre déclin.",
      rating: "****",
      image: Tof4,
      id: "005",
    },
    {
      name: "Deux moi",
      description:
        "Rémy et Mélanie ont trente ans et vivent dans le même quartier à Paris. Elle multiplie les rendez-vous ratés sur les réseaux sociaux pendant qu'il peine à faire une rencontre. Tous les deux victimes de cette solitude des grandes villes, à l’époque hyper connectée où l’on pense pourtant que se rencontrer devrait être plus simple.",
      rating: "****",
      image: Tof7,
      id: "006",
    },
    {
      name: "Bloodshot",
      description:
        "Ray Garrison est un soldat tué en mission, et ramené à la vie par RST Corporations, l'entreprise qui l’a transformé en super-humain. Des nanotechnologies coulent désormais dans ses veines, ce qui le rend invincible. Il est plus fort que jamais et capable de guérir instantanément de ses blessures.",
      rating: "****",
      image: Tof5,
      id: "007",
    },
    {
      name: "Gladiator",
      description:
        "Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire avec une bravoure et un dévouement exemplaires. Jaloux du prestige de Maximus, et plus encore de l'amour que lui voue l'empereur, le fils de MarcAurèle, Commode, s'arroge brutalement le pouvoir, puis ordonne l'arrestation du général et son exécution.",
      rating: "****",
      image: Tof1,
      id: "008",
    },
  ];

  state = {
    movies: this.movies,
    favourites: [],
  };
  SearchBar = (e) => {
    if (e.target.value.length === 0) {
      this.setState({ movies: this.movies });
      console.log(this.state.movies);
    } else {
      this.setState({
        movies: this.state.movies.filter((fil) =>
          fil.name.includes(e.target.value)
        ),
      });
    }
  };
  /*********************************Search by Rate************************ */
  getrate = (r) => {
    console.log(r);
    let newlist = this.movies.filter((el) => el.rating.length >= r);
    this.setState({ movies: newlist });
  };

  //**************************************************Add to favoris ******************* */
  addFavoris = (e) => {
    alert("MOvied added to favourites");
    this.state.favourites.push(e);
    console.log(this.state.favourites);
  };
  /********************************Remove******************************** */
  removeMovie = (e) => {
    alert("Movie Removed");
    let a = "";
    let c = [];
    for (let i = 0; i < this.state.favourites.length; i++) {
      if (e == this.state.favourites[i]) {
        a += i;
        c = [...this.state.favourites.splice(1, 1)];
      }
    }
    this.setState({
      favourites: c,
    });
  };

  //console.log(this.state.movies);
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar SearchBar={this.SearchBar} />
          <Switch>
            <Route exact path={"/"}>
              <Home
                movies={this.state.movies}
                getrate={this.getrate}
                addFavoris={this.addFavoris}
              />
            </Route>
            <Route path={"/favourite"}>
              <Favoris
                favourites={this.state.favourites}
                removeMovie={this.removeMovie}
              />
            </Route>

            {this.movies.map((el) => (
              <Route path={"/detail/" + el.id}>
                <Detail el={el} />
              </Route>
            ))}

            <Route path={"/signup"}>
              <SignInValiationForm />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
