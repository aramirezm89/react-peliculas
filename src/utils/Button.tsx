
export default function Button(props:buttonProps){
    const {children,onClick,type} = props;
    return(
        <button type={type} onClick={onClick} className="btn btn-primary mt-2 mb-2 mr-1">{children}</button>
    )
}

interface buttonProps{
    children : React.ReactNode,
    onClick?() : void,
    type: "button" | "submit"
}

Button.defaultProps = {
 type:"button"
}