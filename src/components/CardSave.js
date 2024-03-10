import React, {useEffect} from 'react'
import "../../styles/CardSave.scss"
import { useSelector, useDispatch } from 'react-redux';
import { removeSavedItem,setSavedItems } from '../redux/features/savedItemsSlice';

const SAVED_ITEMS_KEY = 'savedItems';

export default function CardSave() {
    const dispatch = useDispatch();
    const { items: savedItems } = useSelector(state => state.savedItems);

    useEffect(() => {
        const savedItemsFromLocalStorage = JSON.parse(localStorage.getItem(SAVED_ITEMS_KEY)) || [];
        dispatch(setSavedItems(savedItemsFromLocalStorage));
    }, [dispatch]);

    const handleDelete = (item) => {
        console.log('Removing item at index:', item);
        dispatch(removeSavedItem(item));
    };
   
  return (
    <div className="card-save">
        <div className="saved-items">
            {savedItems && savedItems.length > 0 ? (
                savedItems.map((item, index) => (
                    <div key={index} className="saved-item">
                      <div>  <p>{item.text}</p></div>
                        <button onClick={() => handleDelete(item)} className="saved-item-btn">Delete</button>
                    </div>
                ))
            ) : (
                <div><p>No saved items</p></div>
            )}
        </div>
    </div>
  )
}
