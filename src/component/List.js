import React, { useState } from "react";
import Popup from "./popup";

const List = ({ data, index, item, storeItem }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();

  const deleteItems = (key) => {
    let _items = item;
    _items = _items.filter((data, index) => index !== key);
    storeItem(_items);
  };

  const editItem = (e,newValue) => {
    e.preventDefault();
    let _items = item;
    _items[selectedIndex] = newValue;
    storeItem(_items);
    setIsOpen(!isOpen);
  };

  
  const togglePopup = (index, data) => {
    setIsOpen(!isOpen);
    console.log(index);
    setSelectedItem(data);
    setSelectedIndex(index);
  };
  return (
    <li>
      {data}
      <i className="fas fa-edit" onClick={() => togglePopup(index, data)}></i>
      {isOpen && (
        <Popup
          content={<> </>}
          sendingData={selectedItem}
          handleClose={togglePopup}
          edit={editItem}
        />
      )}
      <i
        className="fa fa-trash"
        aria-hidden="true"
        onClick={() => deleteItems(index)}
      ></i>
    </li>
  );
};
export default List;
