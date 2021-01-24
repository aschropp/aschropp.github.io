import * as React from "react";
import {Button, Paper} from "@material-ui/core";

export class NominateCard extends React.Component {
    denominateMovie = (event) => {
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
                    onClick={this.denominateMovie}>
                        Remove
                </Button>
            </Paper>
        )
    }
}