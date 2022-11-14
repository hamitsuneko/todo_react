import {useDispatch, useSelector} from "react-redux";
import {editTask, setMas} from './redux/taskSlice'
import {setDeleted} from "./redux/deletedSlice";
import History from "./history";
import {Badge, Box, Chip, Input, List, ListItem, ListItemButton} from "@mui/joy";

import {
    CancelOutlined,
    CancelRounded, DeleteOutlined, EditOutlined,
    TaskAltRounded
} from "@mui/icons-material";
import s from './tasks.module.css'
import {useContext, useEffect, useState} from "react";
import {ContextOpen, ContextVis} from "./App";
import Search from "./search";
import {useRef} from "react";
import {deleteCompleted, setCompleted} from "./redux/completedSlice";

const Tasks = () => {

    const buttonOpen = useContext(ContextOpen)

    const [edit, setEdit] = useState(-1)

    const dispatch = useDispatch()

    const sel = useSelector(state => state.tasks.value)

    const deleted = useSelector(state => state.deleted.deleted)

    const completed = useSelector(state => state.completed.completed)

    const visibility1 = useContext(ContextVis)

    const inputRef = useRef()

    let parasha

    if (sel.length - completed.length >= 0) {
        parasha = sel.length - completed.length
    } else if (sel.length - completed.length < 0) {
        parasha = 0
    }

    const btnRef = useRef()

   useEffect(() => {
       document.body.addEventListener('click', (event) => {
           if ( event.path.length !== 15 && !event.path.includes(inputRef.current)) {
               setEdit(-1)
           }
       })
   }, [])

    const sss = sel.map((el, i) =>


        <div key={i}>


            <Box className={s.b} component="nav" aria-label="My site">
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
                            //href="#horizontal-list"
                            aria-label="Home"
                        >

                        </ListItemButton>
                    </ListItem>
                    {edit !== i &&
                        <>
                            <ListItem onClick={() => {
                                    dispatch(setCompleted(i))


                            }} role="none">
                                <ListItemButton className={s.a}>
                                    {el}
                                </ListItemButton>
                            </ListItem>
                            {!completed.includes(i) && <Badge
                                color="danger"
                                size="sm"
                                variant="solid"
                            />}
                            {completed.includes(i) && <Badge
                                color="success"
                                size="sm"
                                variant="solid"
                            />}

                        </>
                    }
                    {edit === i && <Input ref={inputRef} value={sel[i]} onChange={(a) => {
                        dispatch(editTask([a.target.value, i]))
                    }}></Input>}

                    <ListItem role="none" sx={{marginInlineStart: 'auto'}}>
                        <ListItemButton
                            role="menuitem"
                            component="a"
                            href="#horizontal-list"
                            aria-label="Delete"
                        >

                            <Chip ref = {btnRef} onClick={() => {
                                setEdit(i)
                            }} variant="soft" color='warning'
                                  endDecorator={<EditOutlined color='warning' variant="plain" onClick={() => {
                                      setEdit(i)
                                  }}/>}>
                                Edit
                            </Chip>

                            <Chip onClick={() => {
                                let a = [...sel]
                                let b = sel.indexOf(el)
                                a.splice(b, 1)
                                dispatch(setMas(a))
                                dispatch(setDeleted(el))
                                dispatch(deleteCompleted(el))
                            }} variant="soft" color='danger'
                                  endDecorator={<CancelRounded color='danger' variant="plain" onClick={() => {
                                      let a = [...sel]
                                      let b = sel.indexOf(el)
                                      a.splice(b, 1)
                                      dispatch(setMas(a))
                                      dispatch(setDeleted(el))
                                      dispatch(deleteCompleted(el))
                                  }}/>}>
                                Remove
                            </Chip>


                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>


        </div>)

    return (<div>
        <ul className={s.ul}>
            {buttonOpen && !visibility1 && sss}

        </ul>
        <History/>
        <Search/>

        <Chip variant="soft" color='success' startDecorator={<TaskAltRounded/>}>
            {`Tasks Completed : ${completed.length}`}
        </Chip>
        <Chip className={s.sum} variant="soft" color='danger' startDecorator={<CancelOutlined/>}>
            {`Tasks Remained : ${parasha}`}
        </Chip>
        <Chip variant="soft" color='primary' startDecorator={<DeleteOutlined/>}>
            {`Tasks Deleted : ${deleted.length}`}
        </Chip>


    </div>)
}

export default Tasks
