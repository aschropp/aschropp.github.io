import * as React from "react";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

export class SearchInput extends React.Component {
    handleInputChange = (event) => {
        let value = event.target.value;
        this.props.searchCallback(value)
    }
    render() {
        return (
            <FormControl fullWidth>
                <TextField
                    id="input-with-icon-textfield"
                    label="What Movie Title are you looking for?"
                    onChange={this.handleInputChange}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    }}
                />
            </FormControl>
        )
    }
}
