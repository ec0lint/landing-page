import React from "react";

export default function SearchingBar() {
    return (
        <div id="searchingBar">
            <form>
                <div className="searchingBar">
                    <label className="searchingBarBoxLabel">@</label>
                    <input id="Mail" type="email" name="Mail" />
                </div>
            </form>
        </div>
    );
}