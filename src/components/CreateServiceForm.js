import React, { useState } from 'react';

const CreateServiceForm = ({ onAddService }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description || !price || !contact) return;
        onAddService({
            id: Date.now(), // Simple unique ID for now
            title,
            description,
            price,
            contact,
        });
        setTitle('');
        setDescription('');
        setPrice('');
        setContact('');
    };

    return (
        <form
            className='p-6 border border-gray-200 rounded-lg shadow-lg max-w-lg mx-auto flex flex-col gap-4 bg-white'
            onSubmit={handleSubmit}
        >
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                Создать новую услугу
            </h2>
            <input
                type='text'
                placeholder='Название услуги'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <textarea
                placeholder='Описание услуги'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='p-3 border border-gray-300 rounded-md min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <input
                type='text'
                placeholder="Цена (например, 'договорная' или '1000 руб.')"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <input
                type='text'
                placeholder='Контактная информация (телефон, email и т.д.)'
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button
                type='submit'
                className='p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300'
            >
                Добавить услугу
            </button>
        </form>
    );
};

export default CreateServiceForm;
