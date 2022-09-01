import React from "react";
import PostListItem from '../post-list-item';
import './post-list.css';
import { ListGroup} from 'reactstrap';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
   // eslint-disable-next-line
    const elements = posts.map( (item) => { 
        if (typeof(item) === "object" && isEmpty(item) ) {
            const {id, ...itemProps} = item; // получаем две переменных из item. id переменная и itemProps все остальные свойства item без id;
            return(
                <li key={id} className="list-group-item">
                    <PostListItem 
                        {...itemProps}
                        onDelete={() => onDelete(id)} 
                        onToggleImportant={ () => onToggleImportant(id)}
                        onToggleLiked={ () => onToggleLiked(id)}
                        />  
                </li> // так как свойства у item и свойства у PostListItem имеют одинаковые названия, мы можем их передать в виде {...itemProps}
            )  
        }
               // благодаря формату es8 все прочтется верно;
    })

    function isEmpty(obj) {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    return(
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;