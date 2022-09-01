import React, {Component} from "react";
import AppHeader  from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import './app.css';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: "Going to learn react", important: true, id: 'qweqwe'},
                {label: "This is so boring", important: false, id: 'asdasd'},
                {label: "I need a break...", important: false, id: 'erert'}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
    }

    deleteItem(id) {
        console.log(id);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id); //с помощью findIndex разбиваем массив на части elem и потом сравниваем elem.id с id по которому произошел клик, который мы получаем из post-list. Это делается, чтобы вычислить пост, или индекс элемента массива, который мы собираемся удалить со страницы

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]; // this.state напрямую менять нельзя, т.е. нельзя удалить часть массива из data. можно только создать новый массив и записать в data новый массив. создаем массив newArr, в который мы передаем - [...-spread оператор, он позволяет сразу развернуть все элементы нового массива, который мы получаем с помощью метода массива split(), data.slice(0, index)- обрезаем массив data c первого элемента и до элемента-индекса, который мы искали выше, ...data.slice(index + 1) - обрезаем массив data cо следующего элемента после элемента index, второй не указан, по умолчанию значение - до конца массива, и с помощью спред оператора точно также раскрываем новый массив. Без спред операторов был бы массив newArr = [arr[], arr2[]] ], то есть массив с массивами и посты не отрисовались бы на странице.

            return {
                data: newArr
            }
        })
    }

    addItem(body) {
        const newId = `f${(~~(Math.random()*1e8)).toString(16)}`;
        
        const newItem = {
            label: body,
            important: false,
            id: newId
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
       console.log(`Important ${id}`);
    }

    onToggleLiked(id) {
       console.log(`Like ${id}`);
    }

    render() {
        return(
            <div className="app">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}
