
import './SelectorMultiple.css';

export default function SelectorMultiple(props:selectorMultipleProps){

    const {seleccionados,noSeleccionados,onChange} = props;

    function seleccionar(item:selectorMultipleModel){
        const seleccionados = [...props.seleccionados,item];
        const noSeleccionados = props.noSeleccionados.filter(valor => valor !== item);
        onChange(seleccionados,noSeleccionados);
    }

    function deseleccionar(item:selectorMultipleModel){
        const seleccionados = props.seleccionados.filter(valor => valor !== item);
        const noSeleccionados = [...props.noSeleccionados,item];
        onChange(seleccionados,noSeleccionados);
    }

    function seleccionarTodo(){
        const seleccionados = [...props.seleccionados,...props.noSeleccionados];
        const noSeleccionados:selectorMultipleModel[] = [];
        onChange(seleccionados,noSeleccionados);
    }

    function deseleccionarTodo(){
        const seleccionados : selectorMultipleModel[] = [];
        const noSeleccionados = [...props.seleccionados,...props.noSeleccionados]; 
        onChange(seleccionados,noSeleccionados);
    }

    return(
        <div className="selector-multiple">
            <ul>
                {noSeleccionados.map(item => 
                <li key={item.key} onClick={() => seleccionar(item)}>{item.value}</li>)}
            </ul>
            <div className="selector-multiple-botones">
                    <button type="button" onClick={seleccionarTodo}>{'>>'}</button>
                    <button type="button" onClick={deseleccionarTodo}>{'<<'}</button>
            </div>
            <ul>
                {seleccionados.map(item => 
                <li key={item.key} onClick={() => deseleccionar(item)}>{item.value}</li>)}
            </ul>
        </div>
    )
}

interface selectorMultipleProps{
    seleccionados : selectorMultipleModel[];
    noSeleccionados: selectorMultipleModel[];
    onChange(seleccionados:selectorMultipleModel[],noSeleccionados:selectorMultipleModel[]):void;
}

 export interface selectorMultipleModel{
    key: number;
    value : string;
}