import React from 'react';

const ServiceCard = ({ service, onEdit, onDelete, currentUser }) => {
    const isOwner = currentUser && service.contact === currentUser.username;

    return (
        <div className='border border-gray-200 p-4 m-2 rounded-md shadow-md flex flex-col'>
            <h3 className='text-lg font-semibold text-gray-800'>
                {service.title}
            </h3>
            <p className='text-gray-600 mt-1 flex-grow'>
                {service.description}
            </p>
            <p className='text-gray-700 mt-2'>
                <strong className='font-medium'>Цена:</strong> {service.price}
            </p>
            <p className='text-gray-700'>
                <strong className='font-medium'>Контакт:</strong>{' '}
                {service.contact}
            </p>
            {service.contact && (
                <p className='text-sm text-gray-500 mt-1'>
                    Добавлено: {service.contact}
                </p>
            )}
            {isOwner && (
                <div className='mt-4 flex space-x-2'>
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Предотвращаем срабатывание onClick родителя
                            onEdit(service);
                        }}
                        className='px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300'
                    >
                        Редактировать
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Предотвращаем срабатывание onClick родителя
                            onDelete(service.id);
                        }}
                        className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300'
                    >
                        Удалить
                    </button>
                </div>
            )}
        </div>
    );
};

export default ServiceCard;
