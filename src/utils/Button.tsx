import { ReactElement } from "react";

export default function Button(props:buttonProps){
    const {children,onClick} = props;
    return(
        <button type="button" onClick={onClick} className="btn btn-primary rounded-lg rounded-pill mt-2 mb-2">{children}</button>
    )
}

interface buttonProps{
    children : React.ReactNode,
    onClick() : void
}