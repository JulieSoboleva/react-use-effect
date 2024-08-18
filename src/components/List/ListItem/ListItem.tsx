import IListItem from '../../../models/index'
import './ListItem.css'

export interface IItemHandler {
    item: IListItem,
    getUserIdHandler: (id: number) => void,
}

export default function ListItem({ item, getUserIdHandler }: IItemHandler) {
    return (
        <li
            className={'list_item ' + (item.active ? 'active' : '')}
            onClick={() => {
                getUserIdHandler(item.id);
            }}
        >
            {item.name}
        </li>
    );
}