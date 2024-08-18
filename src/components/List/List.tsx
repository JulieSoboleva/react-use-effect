import ListItem from './ListItem/ListItem'
import IListItem from '../../models/index'
import './List.css'

interface IListHandler {
    list: IListItem[],
    getUserIdHandler: (id: number) => void,
}

export default function List({ list, getUserIdHandler }: IListHandler) {
    return (
        <div className='list_container'>
            <ul className='list'>
                {list.map((item) => (
                    <ListItem
                        key={item.id}
                        item={item}
                        getUserIdHandler={getUserIdHandler}
                    />
                ))}
            </ul>
        </div>
    );
}