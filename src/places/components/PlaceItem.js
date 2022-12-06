import React,{useState,useContext} from "react";
import './PlaceItem.css';
import Card from "../../shared/components/UIElement/Card";
import Button from "../../shared/components/FormElement/Button";
import Modal from "../../shared/components/UIElement/Model";
import { AuthContext } from "../../shared/context/auth-context";


const PlaceItem = props =>{

    const auth = useContext(AuthContext);

const [showMap, setShowMap] = useState(false);
const [showConfirmModel, setShowConfirmModel] = useState(false);

const openMapHandler =() =>setShowMap(true);
const closeMapHandler =()=>setShowMap(false);

const showDeleteWarningHandler = () =>{

    setShowConfirmModel(true);
};

const cancelDeleteHandler = () =>{
     setShowConfirmModel(false);
}

const confirmDeleteHandler = () =>{
    setShowConfirmModel(false);
    console.log("deleting...")
}

    return( 
        <React.Fragment>
            <Modal 
            show={showMap}
            onCancel={closeMapHandler}
            header={props.address}
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={<Button onClick={closeMapHandler}>CLOSE</Button>} >
                <div className="map-container">
                    <h2>sorry sandesh map cannot be shown it is costly which you cannot afford</h2>
                </div>
            </Modal>

            <Modal 
            header="Are you sure?"
            footerClass="place-item__modal-actions"
            show={showConfirmModel}
            onCancel={cancelDeleteHandler}
            footer={
                <React.Fragment>
                    <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                    <Button danger onClick={confirmDeleteHandler}>Delete</Button>
                </React.Fragment>
            } ></Modal>

    <li className="place-item">
        <Card className ="place-item__content">
        <div className="place-item__image">
            <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
            
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
           {auth.isLoggedIn && <Button to={`/places/${props.id}`}>EDIT</Button>} 
            {auth.isLoggedIn &&<Button danger onClick={showDeleteWarningHandler}>Delete</Button>}
        </div></Card>
    </li></React.Fragment>)
}

export default PlaceItem;