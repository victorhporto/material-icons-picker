import React, {useState} from "react";
import {Select, Paper} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import IconsPicker from "./IconsPicker";

const IconsSelect = () => {

    const [open, setOpen] = useState(false)

    return (
        <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            onClick={()=>setOpen(true)}
            onClose={()=>setOpen(false)}
            open={open}
            // value={age}
            // onChange={handleChange}
        >
            <Paper style={{width: 400, height: 400}}>

                <TextField fullWidth id="standard-basic" label="Standard" />

                <IconsPicker />

            </Paper>
        </Select>
    )
}

export default IconsSelect;