import React from "react";

const Icon = (props) => {
    const {
        icon, 
        title,
    } = props;

    return(
        <div className="flex items-center text-gray-500 text-sm pl-12">
            <div className="pr-2">{icon}</div>
            <div className="pr-12">{title}</div>
        </div>
    );
};

export default Icon;