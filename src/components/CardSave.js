import React from 'react'
import "../../styles/CardSave.scss"
import { useSelector, useDispatch } from 'react-redux';
import { removeSavedItem } from '../redux/features/savedItemsSlice';

export default function CardSave({onDelete }) {
    const dispatch = useDispatch();
    const { items: savedItems } = useSelector(state => state.savedItems);

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
                        <p>{item.text}</p>
                        <button onClick={() => handleDelete(item)} className="saved-item-btn">Delete</button>
                    </div>
                ))
            ) : (
                <p>No saved items</p>
            )}
        </div>
    </div>
  )
}
