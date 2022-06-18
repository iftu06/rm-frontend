import React from "react"
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { POSITION } from "react-toastify/dist/utils"
import ToastMsg from "./toastmsg"

const Toastify = ({msg}) => {
        toast.success(<ToastMsg msg={msg} />,
        {position : POSITION.TOP_CENTER,autoClose : 8000});
    
}

export default Toastify;