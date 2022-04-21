import React from 'react';

const ServiceItem = ({icon, serviceName, tags}) => {
    return (
        <article className='service-two__item'>
            {icon}
            <h1>{serviceName}</h1>
            <div className="tags">
                {tags.map((tag,key) => (
                    <span key={key}>{tag}</span>
                    )
                )}
            </div>
        </article>
    );
}

export default ServiceItem;