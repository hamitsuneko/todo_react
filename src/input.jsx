import {useContext, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllTasks, searchTasks, setTask} from "./redux/taskSlice";
import s from './input.module.css'
import {
    Context,
    ContextClose,
    ContextFunc,
    ContextOpen,
    ContextSetClose,
    ContextSetOpen,
    ContextVis,
    ContextVisFunc
} from "./App";
import {deleteAll, deleteAll2} from "./redux/deletedSlice";
import {Button, Input} from "@mui/joy";
import {deleteCompleted} from "./redux/completedSlice";


const Imput = () => {

    const dispatch = useDispatch()

    const [value, setValue] = useState('')

    const buttonOpen = useContext(ContextOpen)

    const buttonClose = useContext(ContextClose)

    const setButtonOpen = useContext(ContextSetOpen)

    const setButtonClose = useContext(ContextSetClose)

    let visibility = useContext(Context)

    let setVisibility = useContext(ContextFunc)

    let visibility1 = useContext(ContextVis)

    let setVisibility1 = useContext(ContextVisFunc)

    const tasks = useSelector(state => state.tasks.value)


    const e = useRef()

    useEffect(() => {


        const onKeyDown = e => {
                if (e.keyCode === 13) {
                    if (value === '') {
                        alert('Enter task')
                    } else {
                        dispatch(setTask(value))
                        setValue('')
                    }

                }


        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [dispatch, value])



    return (



        <div>
            <Input className={s.ipt} ref={e} value={value} onChange={(a) => {
                setValue(a.target.value)
            }}></Input>
            {buttonOpen && <Button variant="soft" className={s.btn} onClick={() => {
                setVisibility(!visibility)
                setButtonOpen(!buttonOpen)

                setButtonClose(!buttonClose)

            }}>Open History</Button>}
            {buttonClose && <Button variant="soft" className={s.btn} onClick={() => {
               setButtonClose(!buttonClose)
                setButtonOpen(!buttonOpen)
                setVisibility(!visibility)
            }}>Close History</Button>}
            {buttonOpen && <Button variant="soft" className={s.btn} onClick={() => {
                if (value === '') {
                    alert ('Enter search text')
                } else {
                    setVisibility1(true)
                    dispatch(searchTasks(value))
                }


            }}>Search Task</Button>}



            {visibility1 && <Button variant="soft" className={s.btn} onClick={() => {
                setVisibility1(false)

            }}>Hide Search</Button>}

            {buttonClose && <Button variant="soft" color='danger' className={s.btn} onClick={() => {
                dispatch(deleteAll2())
            }}>Clear History</Button>}

            {buttonOpen && <Button variant="soft" color='danger' className={s.btn} onClick={() => {
                dispatch(deleteAll(tasks))
                dispatch(deleteAllTasks(tasks))
                dispatch(deleteCompleted())

            }}>Delete All Tasks
            </Button>}

        </div>)

}

export default Imput