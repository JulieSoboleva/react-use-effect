export default interface IUserInfo {
    id: number,
    name: string,
    avatar: string,
    details: {
        city: string, 
        company: string, 
        position: string,
    },
}

export default interface IListItem {
    id: number,
    active: boolean,
    name: string,
}