import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceList = ({
    services,
    onServiceClick,
    onEditService,
    onDeleteService,
    currentUser,
}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {services.length === 0 ? (
                <p className='text-center text-gray-600 col-span-full'>
                    Пока нет добавленных услуг. Создайте новую!
                </p>
            ) : (
                services.map((service) => (
                    <div
                        key={service.id}
                        onClick={() => onServiceClick(service)}
                        className='cursor-pointer'
                    >
                        <ServiceCard
                            service={service}
                            onEdit={onEditService}
                            onDelete={onDeleteService}
                            currentUser={currentUser}
                        />
                    </div>
                ))
            )}
        </div>
    );
};

export default ServiceList;
