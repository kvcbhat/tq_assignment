import classes from './Card.module.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Card = ({ card }) => {
    return (
        <div className='card mb-4 rounded-5 shadow'>
            <div className=' row align-items-center'>
                <img className="col-md-6 col-lg-4 img-fluid" src={card.image_url} alt="Card image cap"></img>
                <div className='px-4 px-md-5 py-3 col-md-6 col-lg-8'>
                    <h2>{card.card_title}</h2> 
                    {card.data && <p>{card.data_type}: {card.data_value} </p> } 
                    {card.button && <button className='btn btn-primary'>{card.button_name}</button>}
                    {card.link && <a href={card.redirect}>{card.link_name}</a>}
                    {card.note && <p>{card.note}</p>}
                </div>
            </div>
        </div>
    );
  };

  export default Card;