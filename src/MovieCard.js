import * as React from "react";
import {Button, Paper} from "@material-ui/core";

export class MovieCard extends React.Component {
    nominateMovie = (event) => {
        this.props.onChildClick(this.props.movie);
    }

    render() {
        return (
            <Paper id="paper">
                {this.props.movie.Title} ({this.props.movie.Year})
                <br></br>
                <Button 
                    variant="contained" 
                    color="primary" 
                    name={this.props.movie.Title}
                    onClick={this.nominateMovie}
                    disabled={this.props.nominated.includes(this.props.movie)}>
                        Nominate
                </Button>
            </Paper>
        )
    }
}