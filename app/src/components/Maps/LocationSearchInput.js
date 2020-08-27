
//DOCUMENTATION: https://developers.google.com/maps/documentation/javascript/places-autocomplete#get-place-information
//IT USES GOOGLE'S PLACES API, PLUS THE AUTOCOMPLETE FEATURE

import React, { useState, useEffect, useRef } from "react";
import "./Styles.css"

let autoComplete;

const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
        autoCompleteRef.current,
        { types: ["address"] }
    );
    autoComplete.setFields(["address_components", "formatted_address", "geometry"]);
    autoComplete.addListener("place_changed", () =>
        handlePlaceSelect(updateQuery)
    );
}

async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    //console.log(addressObject.geometry.location.lat());
    //console.log(addressObject.geometry.location.lng()); // 6 digits after the decimal, plus up to 4 digits before the decimal
    //console.log(addressObject.geometry.location.toJSON());
    if (addressObject.geometry === undefined) 
        window.localStorage.setItem("addressFlag", "false")
    else 
        window.localStorage.setItem("addressFlag", "true")

    console.log(addressObject);
}

function SearchLocationInput() {
    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);

    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyB7SGSIiGlWfLy9zLcTo4D6McVogW4Bl1E&libraries=places`,
            () => handleScriptLoad(setQuery, autoCompleteRef)
        );
    }, []);

    return (
        <div className="search-location-input">
            <input
                ref={autoCompleteRef}
                onChange={event => setQuery(event.target.value)}
                placeholder=""
                value={query}
                type="search"
            />
        </div>
    );
}

export default SearchLocationInput;

