import {useDispatch, useSelector} from "react-redux";
import {useContext} from "react";
import {Context} from "./App";
import {Box, Chip, List, ListItem, ListItemButton} from "@mui/joy";
import s from "./deleted.module.css";
import {restore} from "./redux/deletedSlice";
import {setTask} from "./redux/taskSlice";
import {TaskAltRounded} from "@mui/icons-material";


const History = () => {

    const deleted = useSelector(state => state.deleted.deleted)

    const dispatch = useDispatch()

    let visibility = useContext(Context)

    const allDeleted = deleted.map((el, i) => <div key={i}>
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
                    <ListItemButton className={s.sex}>
                        {el}
                    </ListItemButton>
                </ListItem>

                <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
                    <ListItemButton
                        role="menuitem"
                        component="a"
                        href="#horizontal-list"
                        aria-label="Delete"
                    >

                <Chip onClick={() => {
                    dispatch(restore(i))
                    dispatch(setTask(el))
                }} variant="soft" color = 'success' endDecorator={<TaskAltRounded onClick={() => {
                    dispatch(restore(i))
                    dispatch(setTask(el))
                }
                } variant="plain"/>}>Restore</Chip>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </div>)




    return (
        <ul className={s.xd}>
            {visibility && allDeleted}
        </ul>
    )
}

export default History