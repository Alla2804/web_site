import React from 'react';
import { FaPaw } from "react-icons/fa";

export class MainPage extends React.Component{
    render(){
        return(
            <div className="container my-5">
                <h4 className="text mb-2"><FaPaw/> Помогаем бездомным животным, в том числе брошенным.</h4>
                <h4 className="text mb-2"><FaPaw/> Создаем условия для социализации и поиска дома для животных.</h4>
                <h4 className="text mb-2"><FaPaw/> Поддерживаем волонтерское движение и улучшаем условия проживания животных в приютах.</h4>
            </div>
        )
    }
}