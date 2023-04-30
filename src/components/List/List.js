import React from 'react';
import './List.css';

const List = (props) => {
    return (
        <div>
            <ul>
                {
                    props.dir.map((item, index)=>(
                        <li key={index}>
                            {item.name} - {item.tel}
                            <span>
                                <button
                                    onClick={
                                        (e) => props.view(item, e)
                                    }
                                >Ver</button>
                                <button
                                    onClick={(e)=> props.edit(index, e)}
                                >Editar</button>
                                <button
                                    onClick={
                                        (e)=>props.remove(index, e)
                                    }
                                >Deletar</button>
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List;
