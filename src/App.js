import React, { useState } from "react";
import "./App.css";  
import Header from "./components/Header";
import AddressList from "./components/AddressList";
import AddressForm from "./components/AddressForm";
import Weather from "./components/Weather";

function App() {
    const [addresses, setAddresses] = useState([]);
     const [showForm, setShowForm] = useState(false);
     const [editingIndex, setEditingIndex] = useState(null);
     const [City, setCity]  = useState(""); 

    function addOrEditAddress(values) {
        setCity(values.city); 

        if (editingIndex !==  null) {
            const updatedAddresses = [...addresses];
            updatedAddresses[editingIndex] = values;
            setAddresses(updatedAddresses);
            setEditingIndex(null);
        } else {
            setAddresses([...addresses, values]);
        }
        setShowForm(false);
    }
    return (
        <div>
            <Header />  
            <div className="form">
                {showForm ? (
                    <AddressForm
                        onSubmit={addOrEditAddress}
                        initialValues={editingIndex !== null ? addresses[editingIndex] : null}
                        onCancel={() => setShowForm(false)}
                    />
                ) : (
                    <AddressList
                        addresses={addresses}
                        onAdd={() => setShowForm(true)} 
                        onEdit={(index) => {
                            setEditingIndex(index);
                            setShowForm(true);
                        }}
                    />
                )}
            </div>

         <div className="weather">
                <Weather city={City} />
            </div>
        </div> 
    );
}

export default App;