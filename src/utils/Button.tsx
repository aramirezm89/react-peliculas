
export default function Button(props:buttonProps){
    const {children,onClick,type,disabled} = props;
    return(
        <button type={type} disabled={disabled} onClick={onClick} className="btn btn-primary mt-2 mb-2 mr-1">{children}</button>
    )
}

interface buttonProps{
    children : React.ReactNode,
    onClick?() : void,
    type: "button" | "submit"
    disabled:boolean
}

Button.defaultProps = {
 type:"button",
 disabled:false
}