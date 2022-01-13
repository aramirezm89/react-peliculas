
export default function Button(props:buttonProps){
    const {children,onClick,type,disabled,className,style} = props;
    return(
        <button type={type} disabled={disabled} style={style} onClick={onClick} className={className}>{children}</button>
    )
}

interface buttonProps{
    children : React.ReactNode,
    onClick?() : void,
    type: "button" | "submit"
    disabled:boolean,
    className:string
    style?:object
}

Button.defaultProps = {
 type:"button",
 disabled:false,
 className: "btn btn-primary mt-2 mb-2 mr-1"
}