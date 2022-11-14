import {ContextVis} from "./App";
import {useContext} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Chip, List, ListItem, ListItemButton} from "@mui/joy";
import s from "./search.module.css";
import {setFoundMas, setMas} from "./redux/taskSlice";
import {setDeleted} from "./redux/deletedSlice";
import {CancelRounded} from "@mui/icons-material";

const Search = () => {
    const dispatch = useDispatch()

    const sel = useSelector(state => state.tasks.value)

    const visibility1 = useContext(ContextVis)

    const found = useSelector(state => state.tasks.found)

    let style = found.map((elem, index) => <div key = {index}>
        <Box component="nav" aria-label="My site">
            <List
                role="menubar"
                row
                sx={{
                    minWidth: 320,
                }}
            >
                <ListItem role="none">
                    <ListItemButton
                        role="menuitem"
                        component="a"
                        href="#horizontal-list"
                        aria-label="Home"
                    >

                    </ListItemButton>
                </ListItem>
                <ListItem role="none">
                    <ListItemButton className={s.a}>
                        {elem}
                    </ListItemButton>
                </ListItem>

                <ListItem role="none" sx={{marginInlineStart: 'auto'}}>
                    <ListItemButton
                        role="menuitem"
                        component="a"
                        href="#horizontal-list"
                        aria-label="Delete"
                    >
                        <Chip onClick={() => {
                            let a = [...sel]
                            let b = sel.indexOf(elem)
                            let c = [...found]
                            let d = found.indexOf(elem)
                            c.splice(d, 1)
                            a.splice(b, 1)
                            dispatch(setMas(a))
                            dispatch(setFoundMas(c))
                            dispatch(setDeleted(elem))
                        }} variant="soft" color='danger'
                              endDecorator={<CancelRounded color='danger' variant="plain" onClick={() => {
                                  let a = [...sel]
                                  let b = sel.indexOf(elem)
                                  a.splice(b, 1)
                                  dispatch(setMas(a))
                                  dispatch(setDeleted(elem))
                              }}/>}>
                            Remove
                        </Chip>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </div>);





    return (
        <ul className={s.ul}>
            {visibility1 && style}
        </ul>
    )
}

export default Search