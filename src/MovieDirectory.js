import * as React from "react";
import {SearchInput} from "./SearchInput";
import {MovieCard} from "./MovieCard";
import {NominateCard} from "./NominateCard";
import Grid from '@material-ui/core/Grid';
import { Container } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';

export class MovieDirectory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            movies: [],
            nominatedMovies: [],
        }
    }


    searchMovies = async (keywords) => {
        fetch(`http://www.omdbapi.com/?apikey=6d676ede&s=${keywords}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        movies: result.Search
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    handleNomination = movie => {
        this.setState( currentState => ( {
            nominatedMovies: [ ...currentState.nominatedMovies, movie ]
        }));
    }

    handleDenomination = movie => {
        var array = [...this.state.nominatedMovies];
        var index = array.indexOf(movie)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({nominatedMovies: array});
        }
    }

    render() {
        var showAlert = <div></div>;
        const {error, movies, nominatedMovies} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            if (nominatedMovies.length === 5) {
                showAlert = <Alert>You've nominated 5 movies!</Alert>;
            }
            return (
                <Container maxWidth="lg">
                    <h1>The Shoppies</h1>
                    <SearchInput searchCallback={this.searchMovies}/>
                    <div id="main">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <h1>Results</h1>
                                {movies && movies.map((movie, index) => (
                                    <MovieCard key={`${index}-${movie}`} movie={movie} nominated={nominatedMovies} onChildClick={this.handleNomination}/>
                                ))}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <h1>Nominations</h1>
                                {showAlert}
                                {nominatedMovies.map((movie, index) => (
                                    <NominateCard key={`Nom ${index}-${movie}`} movie={movie} nominated={nominatedMovies} onChildClick={this.handleDenomination}/>
                                ))}
                            </Grid>
                        </Grid>
                    </div>  
                </Container>
            );
        }
    }
}
