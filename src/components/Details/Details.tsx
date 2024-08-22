import IUserInfo from '../../models'
import './Details.css'

interface IUser {
    userInfo: IUserInfo,
}

export default function Details({ userInfo }: IUser) {
    if (!userInfo) {
        return null;
    }
    const { id, name, avatar, details } = userInfo;
    const { city, company, position } = details;
    
    return (
        <div className='container_details' data-id={id}>
            <div className="container_details-img">
                <img src={avatar} alt='' className='details-img' />
            </div>
            <span className='details-name'>{name}</span>
            <span className='details-item'>City: {city}</span>
            <span className='details-item'>Company: {company}</span>
            <span className='details-item'>Position: {position}</span>
        </div>
    );
}