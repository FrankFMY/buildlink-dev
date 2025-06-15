import React from 'react';

const ServiceDetail = ({ service }) => {
    if (!service) {
        return (
            <div className='text-center p-5 text-gray-600'>
                Выберите услугу для просмотра
            </div>
        );
    }

    return (
        <div className='border border-gray-200 p-6 m-auto rounded-lg shadow-lg max-w-2xl bg-white'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                {service.title}
            </h2>
            <p className='text-gray-700 mb-2'>
                <strong className='font-semibold'>Описание:</strong>{' '}
                {service.description}
            </p>
            <p className='text-gray-700 mb-2'>
                <strong className='font-semibold'>Цена:</strong> {service.price}
            </p>
            <p className='text-gray-700'>
                <strong className='font-semibold'>Контакт:</strong>{' '}
                {service.contact}
            </p>
        </div>
    );
};

export default ServiceDetail;
