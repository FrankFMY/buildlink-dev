import React, { useState, useEffect } from 'react';

const ServiceForm = ({ onSaveService, initialService }) => {
    const [title, setTitle] = useState(
        initialService ? initialService.title : ''
    );
    const [description, setDescription] = useState(
        initialService ? initialService.description : ''
    );
    const [price, setPrice] = useState(
        initialService ? initialService.price : ''
    );
    const [contact, setContact] = useState(
        initialService ? initialService.contact : ''
    );

    useEffect(() => {
        if (initialService) {
            setTitle(initialService.title);
            setDescription(initialService.description);
            setPrice(initialService.price);
            setContact(initialService.contact);
        } else {
            setTitle('');
            setDescription('');
            setPrice('');
            setContact('');
        }
    }, [initialService]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description || !price || !contact) return;
        onSaveService({
            id: initialService ? initialService.id : Date.now(), // Используем существующий ID или генерируем новый
            title,
            description,
            price,
            contact,
        });
    };

    return (
        <form
            className='p-6 border border-gray-200 rounded-lg shadow-lg max-w-lg mx-auto flex flex-col gap-4 bg-white'
            onSubmit={handleSubmit}
        >
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                {initialService
                    ? 'Редактировать услугу'
                    : 'Создать новую услугу'}
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
                {initialService ? 'Сохранить изменения' : 'Добавить услугу'}
            </button>
        </form>
    );
};

export default ServiceForm;
